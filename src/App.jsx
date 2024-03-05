import { weatherApiKey, weatherApiUrl } from "./api";
import { useState, useEffect } from "react";
import { Forecast } from "./Forecast";
import { CurrentWeather } from "./CurrentWeather";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState({});
  const [forecastForWeek, setForecastForWeek] = useState(null);
  const [icon, setIcon] = useState(null);
  const [lat, setLat] = useState(40.181388888);
  const [lon, setLon] = useState(44.514444444);
  const [currentCity, setCurrentCity] = useState("");

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const fetchWeather = () => {
    const weatherFetch = fetch(
      `${weatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
    );
    const weatherFetchForecast = fetch(
      `${weatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
    );

    Promise.all([weatherFetch, weatherFetchForecast])
      .then(async (response) => {
        const currentResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: `${currentCity}`, ...currentResponse });
        setForecastWeather({ city: `${currentCity}`, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const cityName = searchData.label;
    setCurrentCity(cityName);
    setLat(lat);
    setLon(lon);
  };

  useEffect(() => {
    fetchWeather();
  }, [currentCity]);

  return (
    <>
      <div className="bg-pack-train  min-h-screen bg-cover bg-no-repeat bg-fixed bg-center flex flex-col justify-center items-center md:w-screen font-sans font-light">
        <div className="flex flex-col  items-end w-2/3 h-1/3 mt-10 rounded-md tracking-widest p-10">
          <CurrentWeather
            currentWeather={currentWeather}
            handleOnSearchChange={handleOnSearchChange}
          />
          <hr className="w-2/4 h-0.5 mt-6 mb-4 bg-gray-100 border-0 rounded md:my-7 ml-24" />
          <div className="flex flex-row gap-4 mt-2 ml-24 rounded-md text-white sm:flex-col-2 ">
            <Forecast
              forecastForWeek={forecastForWeek}
              days={days}
              icon={icon}
              currentWeather={currentWeather}
              forecastWeather={forecastWeather}
              setForecastForWeek={setForecastForWeek}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
