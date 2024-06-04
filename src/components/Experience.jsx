import { useState } from 'react';
import Select from 'react-select'

const options = [
    {value:1, label:1},
    {value:2, label:2},
    {value:3, label:3},
    {value:4, label:4},
    {value:5, label:5},
    {value:6, label:6},
    {value:7, label:7},
    {value:8, label:8},
    {value:9, label:9},
    {value:10, label:10}
  ]

const Experience = () => {
    const [selectedOption, setSelectedOption] = useState([]);
  
    function handleChange(selectedOption){
      setSelectedOption(selectedOption);
    }

    return (
        <>
            {/* <input type="text" className="border border-gray-400 p-2 rounded font-light text-sm w-40 m-1" placeholder="Experience" name="minExp" id="" /> */}
            <Select
               options={options}
               value={selectedOption}
               onChange={handleChange}
               placeholder="Experience"
               isMulti={true}
            />
        </>
    )
}

export default Experience;