import Role from "../components/Role";
import Experience from "../components/Experience";
import Remote from "../components/Remote";
import MinBase from "../components/MinBase";
import Location from "../components/Location";
import SearchCompany from "../components/SearchCompany";

const Filter = ({setSearch}) => {

    return (
        <div className="p-8 pb-1 pl-20 pr-20 flex flex-wrap justify-between">
            {/* <Role/> */}
            <Experience/>
            <Remote/>
            <MinBase/>
            <Location/>
            <SearchCompany setSearch={setSearch}/>
        </div>
    )
}

export default Filter;