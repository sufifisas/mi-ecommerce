import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import TextField from '../../components/TextField';
import FormWrapper from '../../components/FormWrapper';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SingleProduct = () => {
    let { id } = useParams();
    const [product, setProduct] = useState({})
    const [updateCount, setUpdateCount] = useState(0)
    useEffect(() => {
        axios.get('http://localhost:3000/api/products/' + id)
        .then(function (response) {
          // handle success
          setProduct(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error.message);
        })
      }, [updateCount])
    
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (data) => {
        axios.put('http://localhost:3000/api/products/' + id, data)
        .then(function (response) {
          setUpdateCount(prev => prev + 1)
        })
        .catch(function (error) {
          // handle error
          console.log(error.message);
        })
    }

    return (
        <MainLayout title={product?.name}>
            { location?.key === 'default' ?
                <Link to="/">Home</Link> : <button onClick={() => navigate(-1)}>Back</button>	
            }
            {/* <div>Single Product ID: { id }</div> */}
            <div className='max-w-[600px] mt-6 mx-auto'>
                <FormWrapper onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 gap-4'>
                        <TextField label="Brand" name="brand" defaultValue={product?.brand}  validation="yup.string().required()"/>
                        <TextField label="Product Name" name="name" defaultValue={product?.name} validation="yup.string().required()"/>
                        <TextField label="UPC12 Number" name="barcode" defaultValue={product?.barcode}
                            validation="yup.string()
                            .required()
                            .matches(/^[0-9]+$/, 'this field only accepts integer')
                            .min(12, 'must be exactly 12 digits')
                            .max(12, 'must be exactly 12 digits')"/>
                    </div>
                    <div className='mt-6 flex gap-2 justify-start'>
                        <button type='submit' className='btn min-w-[126px]'>Save</button>
                        <Link to="/">
                            <button type='button' className='btn_outline min-w-[126px]'>Cancel</button>
                        </Link>
                    </div>
                </FormWrapper>
            </div>
        </MainLayout>
    )
  }
  
  export default SingleProduct