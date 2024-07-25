import { Fragment } from 'react'
import Navbar from '../component/layout/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/layout/Footer/Footer'


const Rootlayout = () => {
  return (
    <Fragment>
      <Navbar/>
       <Outlet/>
       <Footer/>
    </Fragment>
  )
}

export default Rootlayout