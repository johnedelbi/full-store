import PropTypes from 'prop-types';

import './Product.css';

const product = ({product})=> {
  return (
    <div className='product'>
        <h1>{product.name}</h1>
        <img src={product.img} alt={product.name} />
        <h2>Category:{product.category}</h2>
        <h2>price: ${product.price}</h2>

    </div>
  )
}

product.propTypes = {
    product: PropTypes.shape({
        category: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    })
}

export default product
