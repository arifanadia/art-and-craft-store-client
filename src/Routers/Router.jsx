import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import AddCraftitem from "../Pages/AddCraftitem/AddCraftitem";
import AllCraftItems from "../Pages/AllCraftItems/AllCraftItems";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import MyList from "../Pages/MyList/MyList";
import PrivateRoutes from "./PrivateRoutes";
import UpdateItem from "../Pages/UpdateItem/UpdateItem";
import CategoryItems from "../Pages/CategoryItems/CategoryItems";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/add-item',
                element: <AddCraftitem></AddCraftitem>

            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>

            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>

            },

            {
                path: '/all-craft-items',
                element: <AllCraftItems></AllCraftItems>

            },

            {
                path: '/craftItems/:id',
                element:<PrivateRoutes> <ViewDetails></ViewDetails></PrivateRoutes>

            },
            {
                path: '/myList',
                element: <PrivateRoutes><MyList></MyList></PrivateRoutes>

            },
            {
                path: '/updateItem/:id',
                element: <UpdateItem></UpdateItem>

            },
            {
                path: '/categoryItems',
                element: <CategoryItems></CategoryItems>

            },



        ]
    },
]);

export default router;