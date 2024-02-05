import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/CartSlice';

export const CartComponent = () => {
    const state = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    console.log("cart state = ",state);
  return (
    <div>
        <h1>Cart</h1>
        <div>
          <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>Product Name</th>
                    <th scope='col'>Product Price</th>
                    <th scope='col'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    state?.map((prod)=>{
                        return(<tr>
                            <td>{prod.name}</td>
                            <td>{prod.price}</td>
                            <td>
                                <button onClick={()=>dispatch(removeFromCart(prod))} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>)
                    })
                }
            </tbody>
          </table>
        </div>
    </div>
  )
}
