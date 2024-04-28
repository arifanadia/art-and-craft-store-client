import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import AddCraftitem from "../Pages/AddCraftitem/AddCraftitem";
import AllCraftItems from "../Pages/AllCraftItems/AllCraftItems";



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
                path:'/all-craft-items',
                element: <AllCraftItems></AllCraftItems>

            },
        


        ]
    },
]);

export default router;