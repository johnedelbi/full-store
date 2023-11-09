import axios from 'axios';
//import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import './products.css';
import Loading from './Loading';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get('http://localhost:3000/');
                if (res.status !== 200) {
                    throw new Error(`Failed to fetch data with the status ${res.status}`);
                } else {
                    setProducts(res.data.products);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, []);

    return (
        <div className='products'>
            {loading && <Loading />}
            {error && <p>{error}</p>}
            {products.length > 0 ? (
                products.map((product, index) => <Product key={index} product={product} />)
            ) : (
                <p>There are no products.</p>
            )}
        </div>
    );
};

Products.propTypes = {};

export default Products;
