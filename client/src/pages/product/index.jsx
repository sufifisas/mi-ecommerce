import { Link } from "react-router-dom";
import Search from "../../components/Search";
import MainLayout from "../../layouts/MainLayout";
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";

const Product = () => {

  const products = [
    {
      brand: 'vegetables',
      name: 'test',
      barcode: 1212331314,
      id: 1,
    },
    {
      brand: 'ant',
      name: 'abc',
      barcode: 1212331314,
      id: 3,
    },
    {
      brand: 'bread',
      name: 'trtr',
      barcode: 1212331314,
      id: 4,
    },
    {
      brand: 'veg',
      name: 'de',
      barcode: 1212331314,
      id: 5,
    },
    {
      brand: 'vegetables',
      name: 'xcc',
      barcode: 1212331314,
      id: 6,
    },
  ]

  const [sortBy, setSortBy] = useState('A');
  const [sortedList, setSortedList] = useState(products);
  const unsortedList = [...products];

  useEffect(() => {
    switch (sortBy) {
      case 'A': {
        setSortedList(unsortedList.sort((a, b) => {
          const nameA = a.name.toUpperCase(); // ignore upper and lowercase
          const nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        
          // names must be equal
          return 0;
        }))
        break;
      };
      case 'B': {
        setSortedList(unsortedList.sort((b, a) => {
          const nameA = a.name.toUpperCase(); // ignore upper and lowercase
          const nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        
          // names must be equal
          return 0;
        }))
        break;
      };
      case 'C': {
        setSortedList(unsortedList.sort((a, b) => {
          const brandA = a.brand.toUpperCase(); // ignore upper and lowercase
          const brandB = b.brand.toUpperCase(); // ignore upper and lowercase
          if (brandA < brandB) {
            return -1;
          }
          if (brandA > brandB) {
            return 1;
          }
        
          // brands must be equal
          return 0;
        }))
        break;
      };
      default: {
        setSortedList(unsortedList.sort((b, a) => {
          const brandA = a.brand.toUpperCase(); // ignore upper and lowercase
          const brandB = b.brand.toUpperCase(); // ignore upper and lowercase
          if (brandA < brandB) {
            return -1;
          }
          if (brandA > brandB) {
            return 1;
          }
        
          // brands must be equal
          return 0;
        }))
        break;
      }
    }
  }, [sortBy])

  return (
    <MainLayout title="Products">
        <div className="flex gap-3">
          <select onChange={(e) => setSortBy(e.target.value)}>
            <option value="A">1</option>
            <option value="B">2</option>
            <option value="C">3</option>
            <option value="D">4</option>
          </select>
          <Search />
        </div>
        <div className="grid grid-cols-4 mt-8 gap-x-4 gap-y-6">
          { sortedList.map((product, index) => {
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