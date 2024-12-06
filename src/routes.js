import { useRoutes } from 'react-router-dom';
import Home from "./pages/Home";
import EditNote from "./pages/EditNote";

const AppRoutes = () => {
    return useRoutes([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/edit/:id",
            element: <EditNote/>,
        },
    ]);
};

export default AppRoutes;