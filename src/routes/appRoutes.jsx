import { createBrowserRouter } from "react-router-dom";
import Root from '../pages/Root.jsx'
import About from '../pages/About.jsx'
import List from '../pages/List.jsx'
import ErrorPage from "../pages/ErrorPage.jsx";

export const router = createBrowserRouter([
    { path: '/', element: <Root />,errorElement: <ErrorPage/>,
        children:[
            { path: '/about', element: <About /> },
            { path: '/', element: <List /> },
        ]
    },
]);