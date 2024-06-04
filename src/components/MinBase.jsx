import { useState } from "react";
import Select from 'react-select'

const options = [
    {value:"0L", label:"0L"},
    {value:"10L", label:"10L"},
    {value:"20L", label:"20L"},
    {value:"30L", label:"30L"},
    {value:"40L", label:"40L"},
    {value:"50L", label:"50L"},
    {value:"60L", label:"60L"},
    {value:"70L", label:"70L"}
  ]

const MinBase = () => {
    const [selectedOption, setSelectedOption] = useState([]);
  
    function handleChange(selectedOption){
      setSelectedOption(selectedOption);
    }

    return (
        <>
        <Select
               options={options}
               value={selectedOption}
               onChange={handleChange}
               placeholder="Minimum Base Pay Salary"
               isMulti={true}
            />
        </>
    )
}

export default MinBase;    