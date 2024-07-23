import { createBrowserRouter } from 'react-router-dom'
import Rootlayout from './pages/root'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'


const Routes = createBrowserRouter([ // Routes 
     {
        path: '/',
        element: <Rootlayout/>,
        errorElement: <ErrorPage/>,
        children: [
         {
            index: true,
            element: <HomePage/>,
         },
         
        ]
     }
])

export default Routes