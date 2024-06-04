import { useContext, useEffect } from "react";
import { FilterContext } from "../pages/JobSearch";

const SearchCompany = () => {

    const { searchQuery, setSearchQuery, setSearchedData, jobData } = useContext(FilterContext);

    useEffect(() => {
        if(searchQuery) {
            const debouncedSearch = setTimeout(() => {
                setSearchedData(
                    jobData.filter((info) => {
                        return info.companyName.toLowerCase().includes(searchQuery.toLowerCase());
                    })
                )
            }, 1000)

            return () => clearTimeout(debouncedSearch);
        }
        else{
            setSearchedData(jobData)
        }
    }, [searchQuery])

    return (
        <>
            <input
                type="text"
                className="border border-gray-400 p-2 rounded font-light text-sm w-48 m-1"
                placeholder="Search Company Name"
                name="companyName"
                id=""
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </>
    )
}

export default SearchCompany;