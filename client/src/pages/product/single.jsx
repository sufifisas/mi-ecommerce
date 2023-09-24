import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import TextField from '../../components/TextField';
import FormWrapper from '../../components/FormWrapper';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader';

const SingleProduct = () => {
    let { id } = useParams();
    const [product, setProduct] = useState({})
    const [updateCount, setUpdateCount] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const [formError, setFormError] = useState('');
    const [formSuccess, setFormSuccess] = useState('');

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

    const handleSubmit = (data) => {
        setIsLoading(true)
        setFormError('')
        setFormSuccess('')
        axios.put('http://localhost:3000/api/products/' + id, data)
        .then((response) => {
            setFormSuccess(response.data.message)
            setUpdateCount(prev => prev + 1)
            setIsLoading(false)
        })
        .catch((error) => {
          // handle error
          setFormError(error.response.data.message);
          setIsLoading(false)
        })
    }

    return (
        <MainLayout title={product?.name}>
            <div className='font-semibold'>
                { location?.key === 'default' ?
                    <Link to="/">Home</Link> : <button onClick={() => navigate(-1)}>Back</button>	
                }
            </div>
            <div className='max-w-[600px] mt-6 mx-auto'>
                { formSuccess && <p className='flash success mb-4'>{formSuccess}</p> }
                <FormWrapper onSubmit={handleSubmit} onChange={() => {setFormError(''); setFormSuccess('')}}>
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
                    { formError && <p className='flash fail mt-4'>{formError}</p>}

                    <div className='mt-6 flex gap-2 justify-start'>
                        <button type='submit' className='btn min-w-[126px]'>Save</button>
                        <Link to="/">
                            <button type='button' className='btn_outline min-w-[126px]'>Cancel</button>
                        </Link>
                    </div>
                </FormWrapper>
            </div>
            { isLoading && 
                <Loader />
            }
        </MainLayout>
    )
  }
  
  export default SingleProduct