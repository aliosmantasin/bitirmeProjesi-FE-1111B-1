import { Fragment } from 'react'
import Navbar from '../component/layout/Navbar/Navbar'
import { Outlet } from 'react-router-dom'


const Rootlayout = () => {
  return (
    <Fragment>
      <Navbar/>
       <Outlet/>
    </Fragment>
  )
}

export default Rootlayout