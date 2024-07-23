import { Fragment } from 'react/jsx-runtime';
import FirstGlance from '../component/HomePage/FirstGlance';
import Categories from '../component/Categories/Categories';
import Banner from '../component/HomePage/Banner';
import ProductComponent from '../component/Product/Product';
import { ProductObje } from '../component/Product/ProductCard';

const HomePage = () => {
  return (
    <Fragment>
      <FirstGlance />
      <Categories />
      <ProductComponent products={ProductObje} />
      <Banner />
    </Fragment>
  );
};

export default HomePage;
