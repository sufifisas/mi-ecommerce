import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import TextField from '../../components/TextField';
import FormWrapper from '../../components/FormWrapper';

const SingleProduct = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <MainLayout title="Single Product">
            { location?.key === 'default' ?
                <Link to="/">Home</Link> : <button onClick={() => navigate(-1)}>Back</button>	
            }
            {/* <div>Single Product ID: { id }</div> */}
            <div className='max-w-[600px] mt-6 mx-auto'>
                <FormWrapper>
                    <div className='grid grid-cols-1 gap-4'>
                        <TextField label="Brand" name="brand" defaultValue="Vegetables"  validation="yup.string().required()"/>
                        <TextField label="Product Name" name="product_name" defaultValue="Sayur Bayam" validation="yup.string().required()"/>
                        <TextField label="UPC12 Number" name="upc12" defaultValue="123456789012"
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