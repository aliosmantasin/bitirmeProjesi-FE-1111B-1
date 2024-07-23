import { Fragment } from "react/jsx-runtime"
import FirstGlance from "../component/HomePage/FirstGlance"
import Categories from "../component/Categories/Categories"
import Product from "../component/Product/Product"

const HomePage = () => {
  return (
    <Fragment>
      <FirstGlance/>
      <Categories/>
      <Product/>
    </Fragment>
  )
}

export default HomePage