// import { useEffect, useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import Product from '../components/product'
import { useGetProductsQuery } from '../slices/poductsApiSlice';
// import axios from 'axios' 
import Loader from '../components/Loader';
import Message from '../components/Message';
  
const Homescreen = () => {
  const { data: products, isLoading, error} = useGetProductsQuery();
   
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchproducts = async () => {
  //     const { data } = await axios.get('/api/products');
  //     setProducts(data);
  //    };
  // fetchproducts();
  // },[]);


  
  return (
    <>
    { isLoading ? (
     < Loader />
    ) : error ? (
     <Message variant ='danger'>{ error?.data?.messsage || error.error} </Message>
    ) : (
      <>
       <h1>Latest products</h1>
        <Row> 
          {products.map((product) => (
          <Col key ={product._id} sm={12} md={6} lg={4} xl={3}> 
          <Product product ={product} />
          </Col>
        ))}
        </Row>
      </>
    )}
    </>
    )};

export default Homescreen;


