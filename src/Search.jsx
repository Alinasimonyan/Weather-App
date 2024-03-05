import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GeoApiUrl, GeoApiOptions } from "./api";

export const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const loadOptions = (inputValue) => {
    return fetch(
      `${GeoApiUrl}/cities?minPopulation=10000&namePrefix=${inputValue}`,
      GeoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
    setSearch("");
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="Enter Location"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        className="w-64 bg-white text-black "
      />
    </div>
  );
};
