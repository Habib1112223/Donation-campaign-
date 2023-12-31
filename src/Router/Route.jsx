import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import ErrorPage from "../Pages/404/404";

const myCreateRoute = createBrowserRouter([
      {
            path:'/',
            errorElement: <ErrorPage></ErrorPage>,
            element: <MainLayout></MainLayout>,
            children:[
                  {
                        path: '/',
                        element: <Home></Home>,
                        loader: ()=> fetch('donation.json')
                        
                  },
                  {
                        path:'/donation',
                        element:<Donation></Donation>
                  },
                  {
                        path:'/statistics',
                        element:<Statistics></Statistics>
                  },
                  {
                        path:'/donation-details/:id',
                        element:<DonationDetails></DonationDetails>,
                        loader: () => fetch('donation.json')
                  }
            ]
      }
])

export default myCreateRoute;