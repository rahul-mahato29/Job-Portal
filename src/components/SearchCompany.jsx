import { useState } from "react";

const SearchCompany = ({setSearch}) => {

    const [value, setValue] = useState("");

    return (
        <>
            <input 
            type="text" 
            className="border border-gray-400 p-2 rounded font-light text-sm w-48 m-1" 
            placeholder="Search Company Name" 
            name="companyName" 
            id="" 
            onChange={(e) =>{setValue(e.target.value)}}
            />
        </>
    )
}

export default SearchCompany;