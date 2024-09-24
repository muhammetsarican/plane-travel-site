
import { useFlightData } from "../../../providers/FlightDataProvider";
import CategoryBox from "./category-box";
import FlightItem from "./flight-item";

export default () => {
    const { currentFlight } = useFlightData();

    return (
        // <!-- main box - start -->
        <div id="main-box" className="bg-secondary rounded-lg overflow-hidden">
            <CategoryBox />
            {/* <!-- content - start --> */}
            <div id="content" className="p-5 max-h-[90dvh] overflow-scroll">
                <div id="sort-bar" className="flex justify-between items-center p-5">
                    <div id="sorting" className="text">
                        <label htmlFor="#sort">Sort by:</label>
                        <select name="sort" id="sort" className="font-bold capitalize bg-transparent">
                            <option value="recommended">recommended</option>
                        </select>
                    </div>
                    <div id="avg-statistic" className="flex gap-1 items-center">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                strokeLinecap="round" strokeLinejoin="round"
                                className="lucide lucide-circle-alert w-5 h-5 stroke-2 stroke-blue-500">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" x2="12" y1="8" y2="12" />
                                <line x1="12" x2="12.01" y1="16" y2="16" />
                            </svg>
                        </span>
                        <p className="font-semibold capitalize">avg fare: $225</p>
                    </div>
                </div>
                <div id="flights" className="flex flex-col gap-3 p-5">
                    <FlightItem {...currentFlight} />
                </div>
            </div>
            {/* <!-- content - end --> */}
        </div>
        // <!-- main box - end -->
    )
}
