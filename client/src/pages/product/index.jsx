import { Link } from "react-router-dom";
import Search from "../../components/Search";
import MainLayout from "../../layouts/MainLayout";
import ProductCard from "../../components/ProductCard";

const Product = () => {
  return (
    <MainLayout title="Products">
        <Search />
        <div className="grid grid-cols-4 mt-8 gap-x-4 gap-y-6">
          <ProductCard brand="Vegetables" title="Kicap Lemak Manis" code="123456789012" url="2323" />
          <ProductCard brand="adabi" title="Kicap Lemak Manis Kicap Lemak Manis" code="123456789012" url="2323" />
          <ProductCard brand="adabi" title="Kicap Lemak Manis" code="123456789012" url="2323" />
          <ProductCard brand="adabi" title="Kicap Lemak Manis" code="123456789012" url="2323" />
          <ProductCard brand="adabi" title="Kicap Lemak Manis" code="123456789012" url="2323" />
        </div>
        {/* <Link to="/1">Go to Product 1</Link> */}
    </MainLayout>
  )
}

export default Product