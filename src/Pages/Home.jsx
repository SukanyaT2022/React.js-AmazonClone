import {useState,useEffect} from 'react'
import Navbar2 from "../Component/Navbar2"

const Home = () => {
  const [products,setProducts] = useState();

  useEffect(()=>{
    (async () =>{
      let record = await fetch("https://dummyjson.com/products")
      let result = await record.json();
      console.log(result);  
    })()
  },[])


  return (
    <div>
        <Navbar2/>
        <h1>Home</h1>
    </div>
  )
}

export default Home