import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

const SingleProduct = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <MainLayout title="Single Product">
            { location?.key === 'default' ?
                <Link to="/">Home</Link> : <button onClick={() => navigate(-1)}>Back</button>	
            }
            <div>Single Product ID: { id }</div>
        </MainLayout>
    )
  }
  
  export default SingleProduct