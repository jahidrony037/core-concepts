import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
      var friends = ["Rimu","Rony","Rehenuma","Hasan","Tabssum","Jahid"];
      var products =[
        {name:"PhotoShop",price:"99.9$"},
        {name:"Adobe-PDF",price:"69.9$"},
        {name:"Adobe Premiere",price:"109.9$"},
        {name:"Adobe Design",price:"$56"}
        
      ]

    var boys = [
      {name:"Jahid ", job:"Software Engineer"},
      {name:"Sajib", job:"Doctor"},
      {name:"Apple", job:"Environmental Scientist"},
      {name:"Khalilur",job:"Disaster Specialist"},
      {name:"Shakil",job:"Lecturer"}
    ]
  return (
    <div className="App">"
      <header className="App-header">
        <Posts></Posts>
        <Count></Count>
        <Users></Users>
        <p>I am React Person </p>
      <ul>
       {friends.map(friend => <li>{friend}</li>)}
      </ul>

      {
        boys.map(boy => <Friends boys={boy}></Friends> )
      }

        <Person name={friends[1]} job="React Devloper"></Person>
        <Person name="Rehenuma" job="Doctor"></Person>
        <Person name ="Jahid Hasan Rony" job="Software Engineer"></Person>
        <Person name="Rehenuma Tabassum Rimu" job="Gynecologists"></Person>
        {
          products.map(pd => <Product product={pd}></Product>)
        }

        <Count></Count>
        
      </header>
    </div>
  );
  }

function Person(props){
  const personStyle = {
    border:'2px solid green',
    margin:'10px',
    padding:'5px',
    backgroundColor:'cyan',
    color:'red'
  }
  return (
    <div style ={personStyle}>
  <h1>My Name is {props.name}</h1>
  <h2>I am a {props.job}</h2>
  </div>
  )
}

function Product(props){
  const productStyle ={
    border:"1px solid yellow",
    borderRadius:"5px",
    width:"200px",
    height:"200px",
    float:"left",
    margin:"8px",
    backgroundColor:"cyan"
    
  } 
  const {name, price} =props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button style={{paddingBottom:"10px",margin:"10px"}}>Buy Now</button>
    </div>
        )
}

function Friends (props){
  const {name,job}=props.boys
  return(
    <div>
      <h2>{name}</h2>
      <h3>{job}</h3>
      </div>
  )
}

function Count (){
  const [count,setCount] = useState(0);
  const increaseHandler = () => {
    const newCount = count + 1;
    newCount = setCount;
  }
  return (
   
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count -1)}>Decrease</button>
      <button onClick={increaseHandler}>Increase</button>
    </div>
  )
}

function Users(){
  const [users,setUser] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUser(data))
   console.log(users);

  },[])
  
  
  return(
    <div>
      <h2>Dynamic Users:{users.length}</h2>
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
    </div>
  )
}

function Posts() {
  const [posts,setPost]= useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(data => setPost(data))
   
  },[])
  const postStyle = {
    border:"1px solid green",
    backgroundColor:"salmon",
    borderRadius:"10px",
    boxShow:"5px 5px 10px gray",
    float:"left",
    display:"float",
    margin:"0 auto"

  }
  return(
    <div>
      {posts.map(post => <div style={postStyle}> <h2>ID:{post.id} <br></br> Title:<p>{post.title}</p></h2></div>)}
     
    </div>
  )
}


export default App;
