import { useState } from "react";

const Role = () => {

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const jobRoles = [
        {
            category: 'Marketing',
            options: ['Marketing Manager', 'Digital Marketer', 'Brand Manager']
        },
        {
            category: 'Development',
            options: ['Software Developer', 'Frontend Developer', 'Backend Developer']
        }
        // Add more categories and options as needed
    ];

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleOptionClick = (option) => {
        if (!selectedOptions.includes(option)) {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const removeOption = (optionToRemove) => {
        setSelectedOptions(selectedOptions.filter(option => option !== optionToRemove));
    };

    return (
        <div className="m-0">
            <input type="text" className="border border-gray-400 p-2 rounded font-light text-sm w-40 m-1 mb-0" placeholder="Roles" name="role" id="" onClick={toggleDropdown} readOnly />
            <div className="absolute bg-white shadow shadow-gray-400 rounded m-1 w-40 p-2 font-semibold">
                {showDropdown && (
                    <div className="dropdown-content">
                        {jobRoles.map(({ category, options }) => (
                            <div key={category}>
                                <h3 className="font-semibold text-gray-400 text-normal p-1">{category}</h3>
                                <ul>
                                    {options.map(option => (
                                        <li key={option} className="text-mds text-gray-700 p-1 text-sm" onClick={() => handleOptionClick(option)}>
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="selected-options">
                {selectedOptions.map(option => (
                    <span key={option} className="selected-option bg-gray-100 p-1 pt-0 rounded-md">
                        <span className="text-sm">{option}</span>
                        <span className="remove ml-2 cursor-pointer text-lg font-bold" onClick={() => removeOption(option)}>&times;</span>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Role;    