
import './App.css';
import {useEffect,useState} from 'react'

function App() {
  let [data,setData]=useState([])
  useEffect(()=>{
   fetch("https://www.mecallapi.com/api/users").then((result)=>{
    result.json().then((resp)=>{
      setData(resp)
    })
  })
  },[]);

  console.log("result",data)
  return (
    <div className="App">
   
      <table id="border"> 
        <tr><th>Full Name</th><th>Email</th><th>Profile</th></tr>
    
     {data.map((item)=>
     <>
      <tr><td><p>{item.fname} {item.lname}</p></td><td>{item.username}</td><td><img style={{height:"50px"}} src={item.avatar} alt="" /></td></tr>
     
     
     </>
     
    
     )}
       </table>
    </div>
  );
}

export default App;
