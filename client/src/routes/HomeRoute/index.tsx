import App from "../../App";
import FlightDetail from "../../components/feature/flight-detail";
import Home from "../../components/feature/home";

export default {
    path: "/",
    element: <App />,
    children: [
        {
            path: "flights",
            element: <Home />
        },
        {
            path: "flight-detail/:id",
            element: <FlightDetail />
        }
    ]
}
