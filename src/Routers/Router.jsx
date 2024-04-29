import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import AddCraftitem from "../Pages/AddCraftitem/AddCraftitem";
import AllCraftItems from "../Pages/AllCraftItems/AllCraftItems";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path:'/',
                element:<Home></Home>

            },
            {
                path:'/add-item',
                element: <AddCraftitem></AddCraftitem>

            },
            {
                path:'/signUp',
                element: <SignUp></SignUp>

            },
            {
                path:'/signIN',
                element: <SignIn></SignIn>

            },
        
            {
                path:'/all-craft-items',
                element: <AllCraftItems></AllCraftItems>

            },
        
            {
                path:'/craftItems/:id',
                element: <ViewDetails></ViewDetails>

            },
        


        ]
    },
]);

export default router;