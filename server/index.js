const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;

const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';

let getInitial = false;
let sseClients = [];

let setState = 0;
let state;
let deviceConnected;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors({
    origin: ['https://miratekstack.com', clientUrl], 
    methods: ['GET', 'POST', 'HEAD'],
    allowedHeaders: ['Content-Type']
}));

// Basic JSON message endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the JSON API!',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

app.get('/initial', (req, res) => {
    getInitial = true;
    res.json({message: 'Initial data set to true'});
}); 

app.post('/state/update', (req, res) => {
    const { heater, ac, television, fan } = req.body;

    // Here you would typically save the data to a database or process it
    //console.log('Received state update:', { heater, ac, television, fan });

    // Prepare data for SSE broadcast
    state = {heater, ac, television, fan };
    setState = 1;

    res.json({
        message: 'State update received successfully',
        status: 'success',
    });
});

// Endpoint for server sent events
app.get('/sensor-stream', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
    });


    // Send initial connection message
    res.write('data: {"type": "connection", "message": "Connected to sensor stream"}\n\n');

    // Add client to the list
    const clientId = Date.now();
    const client = {
        id: clientId,
        response: res
    };
    sseClients.push(client);

    //console.log(`SSE Client ${clientId} connected. Total clients: ${sseClients.length}`);

    // Handle client disconnect
    req.on('close', () => {
        //console.log(`SSE Client ${clientId} disconnected`);
        sseClients = sseClients.filter(client => client.id !== clientId);
        //console.log(`Total clients: ${sseClients.length}`);
    });

    req.on('aborted', () => {
        //console.log(`SSE Client ${clientId} aborted connection`);
        sseClients = sseClients.filter(client => client.id !== clientId);
    });
})

// Function to broadcast data to all connected SSE clients
function broadcastToClients(data) {
    if (sseClients.length === 0) {
        //console.log('No SSE clients connected');
        return;
    }

    //console.log(`Broadcasting to ${sseClients.length} clients:`, data);
    
    // Remove disconnected clients
    sseClients = sseClients.filter(client => {
        try {
            client.response.write(`data: ${JSON.stringify(data)}\n\n`);
            return true;
        } catch (error) {
            //console.log('Client disconnected during broadcast:', error.message);
            return false;
        }
    });
}


//Arduino initial data endpoint
app.post('/initial/reading', (req, res) => {
    const { heater, ac, television, fan } = req.body;

    // Here you would typically save the data to a database or process it
    //console.log('Received initial data:', { heater, ac, television, fan });

    // Prepare data for SSE broadcast
    const initialData = {
        type: 'state-update',
        timestamp: new Date().toISOString(),
        data: { heater, ac, television, fan }
    };

    // Broadcast to all connected SSE clients immediately
    broadcastToClients(initialData);
    getInitial = false;
    res.json({
        message: 'Initial data received successfully',
        status: 'success',
    });
});

//Arduino sensor data endpoint
app.post('/sensor/reading', (req, res) => { 
    const { temperature, humidity, lightLevel, soundLevel } = req.body;

    // Validate the incoming data
    if (typeof temperature !== 'number' || typeof humidity !== 'number' || 
        typeof lightLevel !== 'number' || typeof soundLevel !== 'number') {
        return res.status(400).json({ error: 'Invalid sensor data format' });
    }

    // Here you would typically save the data to a database or process it
    //console.log('Received sensor data:', { temperature, humidity, lightLevel, soundLevel });

    // Prepare data for SSE broadcast
    const sensorData = {
        type: 'sensor-update',
        timestamp: new Date().toISOString(),
        data: { temperature, humidity, lightLevel, soundLevel }
    };

    // Broadcast to all connected SSE clients immediately
    broadcastToClients(sensorData);

    res.json({
        message: 'Sensor data received successfully',
        status: 'success',
        initial: getInitial,
    });
})

app.get('/state/reading', (req, res) => {
    if (setState == 1) {
        //console.log('Sending state data:', state);
        res.json({
            message: true,
            status: 'success',
            data: state
        });
        setState = 0; // Reset after sending   
    } else {
        res.json({
            message: false,
            status: 'success'
        });
    }   
});

app.get('/heartbeat/reading', (req, res) => {
    deviceConnected = new Date(); // Device is connected
    res.json({
        message: 'Device is connected', 
    })
})

// Keep-alive ping for SSE clients (optional)
setInterval(() => {
    if (sseClients.length > 0) {
        broadcastToClients({
            type: 'ping',
            timestamp: new Date().toISOString()
        });
    }
    if (deviceConnected) {
        const now = new Date();
        const diff = now - deviceConnected;
        if (diff > 60000) { // If more than 60 seconds since last heartbeat
            deviceConnected = null; // Device is disconnected
            broadcastToClients({
            type: 'device',
            timestamp: new Date().toISOString(),
            data: { connected: false }
        });
        } else {
            broadcastToClients({
                type: 'device',
                timestamp: new Date().toISOString(),
                data: { connected: true }
            });
        }
    }
}, 30000); // Send ping every 30 seconds

// Start the server
app.listen(PORT, () => {
  //console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;