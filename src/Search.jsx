import { AsyncPaginate } from "react-select-async-paginate";
import { useState, useEffect } from "react";
import { GEO_URL, options } from "./api";

export const Search = ({ onSearchChange }) => {
  const customStyle = {
    control: (provided, state) => ({
      ...provided,
      width: "200px",
      fontSize: "11pt",
      height: "20px",
      borderRadius: "25px",
      border: "2px solid white",
      boxShadow: state.isFocused ? "0 0 0 2px #D3D3D3	" : null,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#D3D3D3	" : null,
      color: state.isFocused ? "black" : null,
    }),
  };

  const [search, setSearch] = useState(null);

  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = async (inputValue) => {
    return fetch(
      `${GEO_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadOptions();
  }, []);

  return (
    <AsyncPaginate
      placeholder="Enter Location"
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      styles={customStyle}
      loadOptions={loadOptions}
    />
  );
};
