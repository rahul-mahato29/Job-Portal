import { useState } from "react";
import Select from 'react-select'

const options = [
    {value:"Backend", label:"Backend"},
    {value:"Frontend", label:"Frontend"},
    {value:"Full Stack", label:"Full Stack"},
  ]

const Role = () => {
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
               placeholder="Roles"
               isMulti={true}
            />
        </>
    )
}

export default Role;    