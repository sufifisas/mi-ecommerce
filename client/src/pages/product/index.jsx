import { Link } from "react-router-dom";
import Search from "../../components/Search";
import MainLayout from "../../layouts/MainLayout";
import ProductCard from "../../components/ProductCard";

const Product = () => {

  const products = [
    {
      brand: 'vegetables',
      name: 'test',
      barcode: 1212331314,
      id: 1,
    },
    {
      brand: 'vegetables',
      name: 'test',
      barcode: 1212331314,
      id: 3,
    },
    {
      brand: 'vegetables',
      name: 'test',
      barcode: 1212331314,
      id: 4,
    },
    {
      brand: 'vegetables',
      name: 'test',
      barcode: 1212331314,
      id: 5,
    },
    {
      brand: 'vegetables',
      name: 'test',
      barcode: 1212331314,
      id: 6,
    },
  ]
  return (
    <MainLayout title="Products">
        <Search />
        <div className="grid grid-cols-4 mt-8 gap-x-4 gap-y-6">
          { products.map((product, index) => {
            return (
              <ProductCard
                key={index}
                brand={product.brand}
                title={product.name}
                code={product.barcode}
                id={product.id} />
            )
          })}
        </div>
        {/* <Link to="/1">Go to Product 1</Link> */}
    </MainLayout>
  )
}

export default Product