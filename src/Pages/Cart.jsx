import { useEffect } from "react"

const Cart = (props) => {

  useEffect(()=>{
    console.log(props.cart)
  },[props.cart])

  return (
    <div className='mt-56 text-center'>
    <h1>Cart</h1>
    </div>
  )
}

export default Cart