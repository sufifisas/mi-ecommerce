import { Link } from "react-router-dom";
import Search from "../../components/Search";
import MainLayout from "../../layouts/MainLayout";

const Product = () => {
  return (
    <MainLayout>
        <div>Product</div>
        <Search />
        <Link to="/1">Go to Product 1</Link>
    </MainLayout>
  )
}

export default Product