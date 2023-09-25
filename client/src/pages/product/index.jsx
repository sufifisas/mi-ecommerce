import { Link } from "react-router-dom";
import Search from "../../components/Search";
import MainLayout from "../../layouts/MainLayout";
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import axios from 'axios';
import Loader from "../../components/Loader";
import Dropdown from "../../components/Dropdown";

const Product = () => {

  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get('http://localhost:4001/api/products' + (keyword && `?keyword=${keyword}`))
    .then(function (response) {
      // handle success
      setProducts(response.data);
      setIsLoading(false)
    })
    .catch(function (error) {
      // handle error
      console.log(error.message);
      setIsLoading(false)
    })
  }, [keyword])

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
  }, [sortBy, products])

  return (
    <MainLayout title="Products">
        <div className="flex flex-col-reverse sm:grid sm:grid-cols-3 gap-3 lg:grid-cols-4">
          <div className="w-full">
            <Dropdown onChange={(e) => setSortBy(e.target.value)} label="Sort By" name="sort" options={[
              {
                label: 'Product Name A-Z',
                value: 'A',
              },
              {
                label: 'Product Name Z-A',
                value: 'B',
              },
              {
                label: 'Brand A-Z',
                value: 'C',
              },
              {
                label: 'Brand Z-A',
                value: 'D',
              },
            ]}/>
          </div>
          <div className="sm:col-span-2 lg:col-span-3">
            <Search keyword={keyword} setKeyword={setKeyword} placeholder="Search by Brand or Product Name"/>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3  lg:grid-cols-4 mt-8 gap-x-4 gap-y-6">
          { sortedList.length > 0 ? 
            <>
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
            </>
            :
            <>
              { keyword ? 
                <div className="col-span-4 text-center pt-10">Sorry, no results found</div>
                :
                <div className="col-span-4 text-center pt-10">Products list is empty</div>
              }
            </>
           
          }
        </div>
        { isLoading &&
          <Loader />
        }
    </MainLayout>
  )
}

export default Product