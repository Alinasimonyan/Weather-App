import { nanoid } from "nanoid";
import { Search } from "./Search";
import { FaCloudMoonRain } from "react-icons/fa";

const Days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    return null;
  };

  return (
    <>
      <div className="bg-pack-train  min-h-screen bg-cover bg-no-repeat bg-fixed bg-center flex flex-col justify-center items-center md:w-screen sm:w-fit font-sans">
        <div className="flex flex-col justify-center items-center w-2/3 h-1/3 p-10 ml-24 mt-10 rounded-md  tracking-widest	 ">
          <div className="mr-10 mt-5 mb-10  justify-center items-center">
            <Search onSearchChange={handleOnSearchChange} />
          </div>
          <div className="mt-0 ml-70 w-1/3 justify-center items-center">
            <div className="text-white flex flex-col justify-center items-center">
              <p className=" text-7xl pt-1 tracking-wider mb-5">12°</p>
              <h3 className="mt-2text-3xl text-gray-800 font-semibold	uppercase text-3xl tracking-widest mb-2">
                London
              </h3>
              <h5 className="italic text-xs text-gray-200">
                November 19th, 2023 | 1:54 PM
              </h5>
            </div>
            <div className="flex flex-row mt-6 text-gray-200 text-xs gap-2 justify-center items-center ">
              <div>
                <p>Description: Broken clouds</p>
                <p>Feels like: 14 °C</p>
              </div>
              <div>
                <p>Humidity: 53% </p>
                <p>Pressure: 1003 hPa</p>
              </div>
            </div>
          </div>
          <hr className="w-3/4 h-0.5  mt-2 bg-gray-100 border-0 rounded md:my-7 dark:bg-gray-700" />
          <div className="flex flex-row gap-6 backdrop-blur-sm mt-2 ml-24 p-4 rounded-md text-white">
            {Days.map((day) => (
              <div key={nanoid()}>
                <div className="flex flex-col gap-2">
                  {day} <FaCloudMoonRain /> 9°
                </div>
                <div className="text-l pr-12 pl-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div
          className="bg-gradient-to-br gray-300/30  text-white 
               border-white border-6 rounded-md w-40 h-40 text-right pr-4 pt-2 font-normal	tracking-widest flex flex-row gap-6 my-0"
        >
          
        </div> */}
    </>
  );
}

export default App;
