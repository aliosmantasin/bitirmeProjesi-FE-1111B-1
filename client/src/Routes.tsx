import { createBrowserRouter } from 'react-router-dom'
import Rootlayout from '../src/root'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import ProteinPage from './pages/ProteinPage'
import {ProteinData} from './component/Product/ProteinPage/ProteinData'
import {SporFoodPage} from './pages/SporFoodPage'
import HealtyPage from './pages/HealtPage'
import FoodPage from './pages/FoodPage'
import VitaminPage from './pages/VitaminPage'
import AllProductPage from './pages/AllProductPage'
import ProductDetailPage from './pages/ProductDetailPage'
import AccountPage from './pages/AccountPage'



const Routes = createBrowserRouter([
     {
        path: '/',
        element: <Rootlayout/>,
        errorElement: <ErrorPage/>,
        children: [
         {
            index: true,
            element: <HomePage/>,
       
         },
         {
            path: 'protein',
            element: <ProteinPage proteins={ProteinData}/>,
         },

         {
            path: 'sporgidalari',
            element: <SporFoodPage/>
         },

         {
            path: 'saglik',
            element: <HealtyPage/>
         },
         {
            path: 'gida',
            element: <FoodPage/>
         },
         {
            path: 'vitamin',
            element: <VitaminPage/>
         },
         {
            path: 'tumurunler',
            element: <AllProductPage/>
         },
         {
            path: 'urundetay',
            element: <ProductDetailPage/>
         },
         {
            path: 'hesabim',
            element: <AccountPage/>
         },
        ]
     }
])

export default Routes