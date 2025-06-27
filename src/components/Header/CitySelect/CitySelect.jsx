import React from "react";
import CreatableSelect from "react-select/creatable";
import { cityOptions } from "../data";
import { SelectWrapper } from "../styles";
import { useNavigate } from "react-router-dom";

const CitySelect = () => {
  const navigate = useNavigate();

  const handleChange = (newValue, actionMeta) => {
    navigate(`/${newValue.value}`);
  };

  return (
    <SelectWrapper>
      <CreatableSelect
        options={cityOptions}
        defaultInputValue={null}
        className="react-select-container"
        classNamePrefix="react-select"
        onChange={handleChange}
      />
    </SelectWrapper>
  );
};

export default CitySelect;
