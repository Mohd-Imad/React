import React from 'react'

const ProductsList = (props) => {
    let selectedProduct = (product)=>{
        props.method(product)
    }
    return (
        <>
            <h1>Products List</h1>
            <pre>{JSON.stringify(props)}</pre>
            <table className="table table-hover">
                <thead className="bg-warning">
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.products.map((product) => {
                            return <tr key={product.id} onMouseOver={selectedProduct.bind(this,product)}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ProductsList
