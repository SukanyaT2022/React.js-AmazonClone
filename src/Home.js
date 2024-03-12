import {useState,useEffect} from 'react'

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
        Hello
    </div>
  )
}

export default Home