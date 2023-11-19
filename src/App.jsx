import { nanoid } from "nanoid";

const Days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function App() {
  return (
    <>
      <div className="  bg-pack-train min-h-screen bg-cover bg-no-repeat bg-fixed bg-center flex justify-center items-center">
        <div className="w-96 h-72 my-80 flex flex-col items-center mt-1  bg-gray-300/20 border-white border-6 rounded-md">
          <h1 className="black pt-5 pb-5 text-3xl capitalize font-semibold	text-center tracking-wide">
            discover weather
          </h1>
          <input className="rounded-md bg-gray-200" />
          <div>
            <h1 className="text-white text-6xl font-semibold	pt-5 tracking-wide">
              24 °C
            </h1>
          </div>
        </div>
        <div className="text-white mt-36 mr-12">
          
        </div>
      </div>
    </>
  );
}

export default App;
