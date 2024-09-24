import App from "../../App";
import Home from "../../components/feature/home";

export default {
    path: "/",
    element: <App />,
    children: [
        {
            path: "flights",
            element: <Home />
        }
    ]
}
