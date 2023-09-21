import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';

const SingleProduct = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            { location?.key === 'default' ?
                <Link to="/">Home</Link> : <button onClick={() => navigate(-1)}>Back</button>	
            }
            <div>Single Product ID: { id }</div>
        </>
    )
  }
  
  export default SingleProduct