import { createBrowserRouter } from "react-router-dom";
import Error from "../../Layout/Error";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Registration/Register";
import MyReview from "../../Pages/Reviews/MyReview/MyReview";
import MyreviewUpdate from "../../Pages/Reviews/MyreviewUpdate/MyreviewUpdate";
import Reviewform from "../../Pages/Reviews/Reviewform/Reviewform";
import Addservice from "../../Pages/Services/AddService/Addservice";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services/Services";
import Privateroutes from "../PrivateRoutes/Privateroutes";

export const router = createBrowserRouter([
    {
        path :'/',
        element :<Main></Main>,
        errorElement : <Error></Error>,
        children :[
            {
                path : '/',
                element : <Home></Home>

            },
            {
                path :'/blog',
                element :<Blog></Blog>
            },
            {
                path : '/login',
                element :<Login></Login>
            },
            {
                path :'/register',
                element :<Register></Register>
            },
            {
                path : '/services',
                element :<Services></Services>
            },
            {
                path :'/services/:id',
                element :<ServiceDetails></ServiceDetails>,
                loader :({params})=> fetch(`https://max-server.vercel.app/services/${params.id}`)
            },
            {
                path : '/reviewcheckout/:id',
                element : <Privateroutes><Reviewform></Reviewform></Privateroutes>,
                loader :({params})=> fetch(`https://max-server.vercel.app/services/${params.id}`)
            },
            {
                path:'/myreviews',
                element:<Privateroutes><MyReview></MyReview></Privateroutes>
            },
            {
                path:'//review/:id',
                element:<Privateroutes><MyreviewUpdate></MyreviewUpdate></Privateroutes>,
                loader :({params})=> fetch(`https://max-server.vercel.app/review/${params.id}`)
            },
            {
                path : '/Addservice',
                element:<Privateroutes><Addservice></Addservice></Privateroutes>
            }
        ]
    }
]);