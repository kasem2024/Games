
import {createBrowserRouter} from 'react-router-dom'
import Layout from './pages/Layout'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import PageDetails from './pages/PageDetails'
export const  router  =  createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    errorElement:<ErrorPage/>,
    children:[
        {index:true , element:<HomePage/>},
        {path:'games/:slug' , element:<PageDetails/>}
    ]

}])

