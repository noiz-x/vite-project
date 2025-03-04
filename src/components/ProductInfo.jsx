const product = {
    name: 'Laptop',
    price: 1200,
    availability: true,
}

const ProductInfo = () => {
    return (
    <div>
        <div>
            <p>Name: {product.name}</p>
            <p>Price: ${product.price}</p>
            {product.availability ? <p>In Stock</p> : <p>Not in Stock</p>}
        </div>
    </div>
  )
}

export default ProductInfo