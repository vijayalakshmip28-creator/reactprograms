function App()
{
  if(true)
  {
  var v=100
  let l=200
  const c=300  //don't change the value
  v++;
  l++;
    console.log("Let:"+1);
  //c++;
  console.log("const:"+c);
  }
  return(
    <>
    <h1>Variable:Global: {v}</h1>
    <h2>let and const does not work: because local</h2>
    
    </>
  )
}
export default App





/*function App()
{
  let myfun=(a,b,c)=>{
    var tot =a+b+c
    document.getElementById("res").innerHTML=`<h2>Total:${tot}</h2>`;
}
return(<>
   <h2>Arrow function with Parameters</h2>
   <h3>Note::in calling function must use parenthesis with passing args</h3>

   <button onClick={()=>myfun(20,30,10)}>GetTotal</button>
   <div id="res"></div>
</>)
}
export default App
/*function App(){
   let myfun=()=>{
     document.getElementById("res").innerHTML="Congracts you to clicked the button";
   }

  return(<>
  <h2>Arrow function without parameter</h2>
  <h3>Note:  1.onClick C must be a caps <br></br> 2.don't use double quotes</h3>
  <h3>3.in calling function don't use parenthesis when without passing args</h3>
  <button onClick={myfun}>ClickMe</button>
  <div id="res"></div>
  </>)
}
export default App



/*import myimg from'./images/ad11.jpg'
function App()
{
  return(
    <>
    <h2>Image Demo using path as expression</h2>
    <img src={myimg} width="500" height="auto" alt='path in wrong'></img></>
  )
}
export default App


/*function App()
{
  var a=100
  var b=500
  var c=350
  return(
    <>
    <h2>Biggest Amoung 3 no's using conditional or ternary operator</h2>
    <h1>Biggest Number a or b:{a<b?a:c}</h1>
    <h1>Biggest Number a or b or c:{(a>b && a>c) ?a: (b>c ? b:c)}
      
                       
    </h1>
    </>
  )
}
export default App


/*function App(){
       ///javascript learned code
       var a=20
       var b=30
       var c="viji"

       return(<>
         <h1>Total:{a+b}</h1>
        <marquee bgcolor='yellow'><font size='9'>{c}</font></marquee>
         
       </>)
}
export default App

/*import React from "react";
class Parent extends React.Component
{
  render()
  {
    return(<>
         <h1>Welcome to ParentClass</h1>
          <h1><u>P.Vijayalakshmi</u></h1>
          <h1>Lalapet,Karur</h1>
          <h1>SBI,BusinessCorrespondent</h1>
          <h1>now,learn webdevelopment and digitalmarketing</h1>
           </>)
  }

}
class App extends Parent
{
  render()
  {
     return(<>
            <Parent/>
            <h1>Welcome to Class Component</h1>
            <h1>Html</h1>
            <h1>CSS</h1>
            <h1>Javascript</h1>
           </>

     )
  }
}
export default App
/*function App()
{
  return(
    <div>
    <h1>welcome to react</h1>
    <h1>P.Vijayalakshmi</h1>
    </div>
  )
}
export default App
/* import logo from './logo.svg';
 import './App.css';

 function App() {
   return (
    <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
                     Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
         className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
