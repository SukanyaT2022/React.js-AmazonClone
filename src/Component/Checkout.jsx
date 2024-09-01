import { useEffect, useState } from 'react';

const Checkout = ({ item, length }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (item.length > 0) {
      let sum = 0;
      item.map((val) => {
        sum += val.price * val.quantity;
      });
      setTotal(sum);
    }
  }, [item]);

  return (
    <div className="checkout_container">
      <h1>Checkout</h1>
      <p> Total = ${total.toFixed(2)}</p>

      <p> Quantity = {length}</p>
    </div>
  );
};

export default Checkout;
