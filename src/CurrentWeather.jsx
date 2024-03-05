import { Search } from "./Search";

export const CurrentWeather = ({
  currentWeather,
  handleOnSearchChange,
  icon,
}) => {
  const city =
    currentWeather?.city
      ?.split(" ")
      .slice(0, -1)
      .join(" ")
      .replace(/[,]/g, "") || "Yerevan";
  const feelsLike = Math.trunc(currentWeather?.main?.feels_like);
  const description = currentWeather?.weather?.[0].description;
  const humidity = currentWeather?.main?.humidity;
  const pressure = currentWeather?.main?.pressure;
  const temp = Math.trunc(currentWeather?.main?.temp);

  return (
    <div className="mt-0  w-1/3 ml-24">
      <div className="text-white flex flex-col items-end ml-24 ">
        <p className=" text-7xl pt-1 tracking-wider mb-5 ml-24 ">
          {icon}
          {temp}°
        </p>
        <h3 className="mt-2text-3xl text-gray-200 font-light uppercase text-3xl tracking-widest mb-1 pr-1  ">
          {city}
        </h3>
        <div className="mt-6 mb-10 bg-none">
          <Search onSearchChange={handleOnSearchChange} />
        </div>
      </div>
      <div className="flex flex-col mt-1 text-gray-100 text-xs gap-1 items-end pr-2">
        <p>Description: {description} </p>
        <p>Feels like: {feelsLike}°</p>
        <p>Humidity: {humidity}% </p>
        <p>Pressure: {pressure} hPa</p>
      </div>
    </div>
  );
};
