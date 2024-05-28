const JobCard = ({companyName, logoUrl, jobRole, location, minExp, maxExp, minJdSalary, maxJdSalary, salaryCurrencyCode, jobDetailsFromCompany}) => {
    return (
        <div className=" m-5 w-80 p-2 rounded-2xl shadow shadow-gray-400">
            <div className="m-1 mb-2">
                <span className="border-2 border-gray ml-1 p-1 rounded-xl text-xs">⏳ posted {Math.floor(Math.random() * 10) + 1} days ago</span>
                <div className="m-1 mt-4 flex">
                    <div className="m-1">
                        <span className="border-2 border-gray-500 bg-gray-200 pb-1 rounded-sm">Logo</span>
                        {/* <img src={logoUrl} alt={companyName} /> */}
                    </div>
                    <div className="m-1">
                        <div className="text-gray-600 font-semibold">{companyName}</div>
                        <div className="text-sm">{jobRole}</div>
                        <div className="text-sm">{location}</div>
                    </div>
                </div>
                <div className="m-1 text-gray-600 font-semibold">Estimeated Salary : {minJdSalary} - {maxJdSalary} ✅</div>
            </div>

            <div className="p-1 m-1">
                <div>
                    <div className="font-semibold text-gray-700">About Company :</div>
                    <div>
                        <h3 className="font-bold text-sm">About us</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error maxime illo vel repellat quos pariatur libero, assumenda eum molestias cupiditate quisquam ullam quod dolores, quasi est consequuntur mollitia ipsum officia!...<span className="text-blue-600 font-semibold cursor-pointer">more</span></p>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="text-gray-600 font-semibold">Minimum Experience</div>
                    <div>{minExp} Years</div>
                </div>
            </div>

            <div className="m-1 ml-2 mr-2 p-2 text-center rounded-md cursor-pointer bg-green-300 font-medium text-lg">⚡ Easy Apply</div>
        </div>
    )
}

export default JobCard;