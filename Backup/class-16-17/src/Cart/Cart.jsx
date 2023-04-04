import React, { useState } from "react"
let Cart = () => {
    let [product, setProduct] = useState({ prod_Name: "Iphone 12", price: 45000, qty: 1 })
    let incrHandler = () => {
        setProduct({ ...product, qty: product.qty + 1 })
    }
    let decrHandler = () => {
        setProduct({ ...product, qty: product.qty - 1 })
    }
    return <React.Fragment>
        <pre>{JSON.stringify(product)}</pre>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <table className="table">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>QTY</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.prod_Name}</td>
                                <td>{product.price}</td>
                                <td><i onClick={decrHandler} className="fa fa-minus-circle"></i>
                                    {product.qty}
                                    <i className="fa fa-plus-circle" onClick={incrHandler}></i></td>
                                <td>{product.qty * product.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </React.Fragment>
}
export default Cart