import { useState, useEffect, useRef, createContext } from 'react';
import Filter from "../components/Filter";
import JobCard from "../components/JobCard";

export const FilterContext = createContext();

const JobSearch = () => {

    const [jobData, setJobData] = useState([]);
    const [page, setPage] = useState(1); // Track the current page
    const loader = useRef(null);

    const [searchQuery, setSearchQuery] = useState("");
    const [searchedData, setSearchedData] = useState([]);
    console.log("Data : ", searchedData)

    useEffect(() => {
        const fetchJobData = async () => {
            try {
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                const body = JSON.stringify({
                    "limit": 9,
                    "offset": (page - 1) * 9 // Calculate the offset based on the current page
                });

                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body
                };

                const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                // setJobData(data.jdList); // Set the fetched data to the state
                setJobData(prevData => [...prevData, ...data.jdList]); // Append the fetched data to the existing data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchJobData();
    }, [page]);

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, { threshold: 1 });
        if (loader.current) {
            observer.observe(loader.current);
        }
        return () => observer.disconnect();
    }, []);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <div>
            <FilterContext.Provider value={{ searchQuery, setSearchQuery, setSearchedData, jobData }}>
                <Filter />
            </FilterContext.Provider>
            <div className="flex flex-wrap justify-around p-16">
                {searchQuery.length > 0 ? (
                    searchedData.map((info) => {
                        return (
                            <JobCard companyName={info.companyName}
                                jobRole={info.jobRole}
                                minJdSalary={info.minJdSalary == null ? 8 : info.minJdSalary}
                                maxJdSalary={info.maxJdSalary}
                                salaryCurrencyCode={info.salaryCurrencyCode}
                                location={info.location}
                                minExp={info.minExp == null ? 0 : info.minExp}
                            />
                        )
                    })
                ) : (
                    jobData.map((info) => {
                        return (
                            <JobCard companyName={info.companyName}
                                jobRole={info.jobRole}
                                minJdSalary={info.minJdSalary == null ? 8 : info.minJdSalary}
                                maxJdSalary={info.maxJdSalary}
                                salaryCurrencyCode={info.salaryCurrencyCode}
                                location={info.location}
                                minExp={info.minExp == null ? 0 : info.minExp}
                            />
                        )
                    })
                )}
                <div ref={loader} className="font-bold text-xl">Loading...</div>
            </div>
        </div>
    )
};


export default JobSearch;