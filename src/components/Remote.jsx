import { useState } from "react";
import Select from 'react-select'

const options = [
    {value:"Remote", label:"Remote"},
    {value:"Hybrid", label:"Hybrid"},
    {value:"In-Office", label:"In-Office"},
  ]

const Remote = () => {
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
               placeholder="Remote"
               isMulti={true}
            />
        </>
    )
}

export default Remote;    