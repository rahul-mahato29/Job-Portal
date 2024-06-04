import { useState } from "react";
import Select from 'react-select'

const options = [
    {value:"Delhi", label:"Delhi"},
    {value:"Mumbai", label:"Mumbai"},
    {value:"Banglore", label:"Banglore"},
    {value:"Hyderabad", label:"Hyderabad"},
    {value:"Chennai", label:"Chennai"},
    {value:"Kolkata", label:"Kolkata"},
  ]

const Location = () => {
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
               placeholder="Location"
               isMulti={true}
            />
        </>
    )
}

export default Location;    