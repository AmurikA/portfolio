import {
    createBrowserRouter
} from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage.tsx";


export const router = createBrowserRouter([

    {path: "/:lang", element: <PortfolioPage/>},
    {path: "/", element: <PortfolioPage/>}

], {
    basename: '/portfolio/'
});


