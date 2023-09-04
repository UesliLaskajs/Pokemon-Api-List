import { useEffect, useState } from "react"


const App=()=>{
  
  const[data,setData]=useState([]);
  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  .then(response=>{
    if(!response.ok){
      throw new Error('Network response was not ok')
    }
    return response.json();
  })
  .then(data=>{
    const modifiedData=data.results.slice(0,704);
    setData(modifiedData);
  })
  .catch(err=>{
    throw new Error('Error',err);
  })
},[]);


return(
  <>
  <ul>
    {
      data.map((item,index)=>(
        <li key={index}>{item.name}</li>
      ))
    }
  </ul>
  </>
)
}
export default App
