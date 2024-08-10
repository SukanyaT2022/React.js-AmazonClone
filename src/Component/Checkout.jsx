import {useEffect,useState} from "react"

const Checkout = ({item,length}) => {
const [total,setTotal] = useState(0)

useEffect(()=>{
    if(item.length>0){
        item.map(()=>{
            setTotal(total + item.price*item.quantity)
        })
    }
},[item])

  return (
    <div className="checkout_container">
      <h1>Checkout</h1>
      <p>Total = ${total}</p>
    </div>
  )
}

export default Checkout
