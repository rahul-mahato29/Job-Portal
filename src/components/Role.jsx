import { useState } from "react";

const RolesOption = [{
    category:"Engineering",
    roles:["Backend", "Frontend", "FullStack"]
}, {
    category:"Design",
    roles:["Designer", "Designer Manager"]
}]

const Role = () => {

    const [display, setDisplay] = useState(false)

    return (
        <div className="border-2 border-black">
            <input type="text" className="border border-gray-400 p-2 rounded font-light text-sm w-40 m-1 mb-0" placeholder="Roles" name="role" id="" onClick={() => {setDisplay(!display)}} />
            {display && <div className="m-1 shadow shadow-gray-600 rounded p-1 absolute bg-white w-40">
                {RolesOption.map((info) => {
                    return (
                        <div>
                        <ul className="font-semibold text-gray-600 p-1">{info.category}</ul>
                        <ul>{info.roles.map((info) => <ul className="p-1 hover:bg-blue-100">{info}</ul>)}</ul>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default Role;    