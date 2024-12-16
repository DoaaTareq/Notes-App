import { useRoutes } from 'react-router-dom';
import Home from "./pages/Home";
import EditNote from "./pages/EditNote";
import AddNote from './pages/AddNote';

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
        {
            path: "/add",
            element: <AddNote/>,
        }
    ]);
};

export default AppRoutes;