import { useState, useEffect, useRef } from 'react'
import Temperature from '../components/temperature'
import Humidity from '../components/humidity'
import SoundLevel from '../components/soundLevel'
import LightLevel from '../components/lightLevel'
import BatteryLevel from '../components/batteryLevel'
import Fan from '../components/fan'
import Heater from '../components/heater'
import Ac from '../components/ac'
import Television from '../components/television'
import Welcome from '../components/welcome'
import bg from '../assets/bg.png'
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../components/loading'
import { use } from 'react'


function Dashboard() {
  const serverUrl = 'https://server.miratekstack.com'; // Adjust this URL as needed
  const [loading, setLoading] = useState(false);

  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [lightLevel, setLightLevel] = useState(0);
  const [soundLevel, setSoundLevel] = useState(0);
  const [batteryLevel, setBatteryLevel] = useState(0);

  const [heater, setHeater] = useState(false);
  const [airConditioner, setAirConditioner] = useState(false);
  const [television, setTelevision] = useState(false);
  const [fan, setFan] = useState(false);

  const eventSourceRef = useRef(null);
  const [connectionStatus, setConnectionStatus] = useState('disconnected');
  const [lastUpdate, setLastUpdate] = useState(null);

  const [isDay, setIsDay] = useState(true)

  const formatToBoolean = (value) => {
    let rvalue = value >= 1 ? true : false;
    return rvalue;
  }

  const formatToInt = (value) => {
    ////console.log('Formatting value to int:', value);
    let rvalue = value ? 1 : 0;
    return rvalue;
  }

  // Send component state updates to the server
  const sendStateUpdate = () => {
    const stateUpdate = {
      heater: formatToInt(heater),
      ac: formatToInt(airConditioner),
      television: formatToInt(television),
      fan: formatToInt(fan)
    };

    //console.log('Sending state update:', stateUpdate);

    fetch(`${serverUrl}/state/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(stateUpdate)
    })
      .then(response => response.json())
      .then(data => {
        //console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    sendStateUpdate();
  }, [heater, airConditioner, television, fan]);


  useEffect(() => {
    // Create SSE connection
    const connectSSE = () => {
      //console.log('Connecting to SSE...');
      eventSourceRef.current = new EventSource(`${serverUrl}/sensor-stream`);

      eventSourceRef.current.onopen = () => {
        //console.log('SSE Connection opened');
      };

      eventSourceRef.current.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          //console.log('Received SSE data:', data);

          if (data.type === 'sensor-update') {
            setTemperature(data.data.temperature);
            setHumidity(data.data.humidity);
            setLightLevel(data.data.lightLevel);
            setSoundLevel(data.data.soundLevel);
            setBatteryLevel(data.data.batteryLevel);
            ////console.log('Sensor data updated:', data.data);

            //Update last update time if available
            setLastUpdate(new Date(data.timestamp));
          } else if (data.type === 'state-update') {
            setHeater(formatToBoolean(data.data.heater));
            setFan(formatToBoolean(data.data.fan));
            setTelevision(formatToBoolean(data.data.television));
            setAirConditioner(formatToBoolean(data.data.ac));
            ////console.log('State data updated:', data.data);

            // Update last update time if available
            setLastUpdate(new Date(data.timestamp));
          } else if (data.type === 'connection') {
            //console.log('Connection established:', data.message);
          } else if (data.type === 'device') {
            //console.log('Connection', data.data.connected);
            setConnectionStatus(data.data.connected ? 'connected' : 'disconnected');
          }
        } catch (error) {
          console.error('Error parsing SSE data:', error);
        }
      };

      eventSourceRef.current.onerror = (error) => {
        console.error('SSE Error:', error);

        // Attempt to reconnect after 3 seconds
        setTimeout(() => {
          if (eventSourceRef.current?.readyState === EventSource.CLOSED) {
            connectSSE();
          }
        }, 3000);
      };
    };

    connectSSE();

    // Cleanup on unmount
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
  }, []);


  //  Initial state
  useEffect(() => {
    fetch(`${serverUrl}/initial`)
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        //console.log(data);
      })
      .catch(error => console.error('Error fetching initial data:', error));
  }, []);


  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="min-h-screen w-full"
          style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          {/* Main Dashboard Container */}
          <div className="backdrop-blur-lg backdrop-brightness-60 bg-black/10 h-fit min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]">
            <div className="h-fit w-[80vw] mx-auto p-2 py-6 md:p-4 lg:p-6">

              {/* Dashboard Grid */}
              <div className="h-fit grid grid-rows-[auto_1fr] md:grid-rows-[auto_1fr_auto] gap-4 md:gap-6">

                {/* Top Section - Welcome & Sensors */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                  {/* Welcome Card - Takes 2 columns on large screens */}
                  <div className="lg:col-span-2">
                    <Welcome connectionStatus={connectionStatus} isDay={isDay} setIsDay={setIsDay} />
                  </div>

                  {/* Environmental Sensors */}
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
                    <SoundLevel soundLevel={soundLevel} />

                    <LightLevel lightLevel={lightLevel} />
                  </div>
                </div>

                {/* Middle Section - Temperature & Humidity & BAttery Level*/}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <Temperature temperature={temperature} />
                  <BatteryLevel batteryLevel={batteryLevel} isDay={isDay} />
                  <Humidity humidity={humidity} />
                </div>

                {/* Bottom Section - Device Controls */}
                <div className="grid grid-cols-2 h-[500px] md:h-[300px] md:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
                  <Fan fan={fan} setFan={setFan} />
                  <Heater heater={heater} setHeater={setHeater} />
                  <Ac airConditioner={airConditioner} setAirConditioner={setAirConditioner} />
                  <Television television={television} setTelevision={setTelevision} />
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard