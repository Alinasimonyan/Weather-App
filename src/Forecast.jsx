import { nanoid } from "nanoid";
import { WiNightAltCloudyWindy, WiDaySunnyOvercast } from "react-icons/wi";
import { IoPartlySunnyOutline, IoRainyOutline } from "react-icons/io5";
import { BsCloudSnow } from "react-icons/bs";
import { useEffect } from "react";

export const Forecast = ({
  forecastForWeek,
  days,
  icon,
  currentWeather,
  forecastWeather,
  setForecastForWeek,
}) => {
  const forecastComp = () => {
    const forecastDays = forecastWeather?.list;
    console.log(forecastDays);
    let number = 0;
    let d = [];
    for (let i = 0; i < forecastDays?.length; i++) {
      number += 7;
      const eachDay = forecastDays[number];
      d.push(eachDay);
    }
    setForecastForWeek(d.slice(0, 5));
  };

  useEffect(() => {
    forecastComp();
  }, [currentWeather, forecastWeather]);

  return (
    <>
      {forecastForWeek?.map((day) => {
        const dateStringified = new Date(day?.dt_txt).getDay();
        const weekDay = days[dateStringified];
        const temperature = Math.trunc(day?.main?.temp);
        const main = day?.weather?.[0].main;

        let icon = "";
        if (main === "Clouds") {
          icon = <WiNightAltCloudyWindy />;
        } else if (main === "Sunny") {
          icon = <WiDaySunnyOvercast />;
        } else if (main === "Clear") {
          icon = <IoPartlySunnyOutline />;
        } else if (main === "Rain") {
          icon = <IoRainyOutline />;
        } else if (main === "Snow") {
          icon = <BsCloudSnow />;
        } else {
          icon = <IoPartlySunnyOutline />;
        }

        console.log(weekDay);
        return (
          <div key={nanoid()}>
            <div className="flex flex-col gap-2 ml-6">
              {weekDay}
              <div className="text-white text-3xl">{icon}</div> {temperature}°
            </div>
          </div>
        );
      })}
    </>
  );
};
