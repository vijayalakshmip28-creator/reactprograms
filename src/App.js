function App(){
  var unit=126
  return(<>
  <h1>Calculate Eb bill</h1>
  <h2>{(unit<=100 && "Rs.0") ||
  (unit>=101 && unit<=125 && "Rs.50") ||
  (unit>=126 && unit<=200 && "Rs."+(unit-100)*2) ||
  (unit>=201 && unit<=300 &&  "Rs."+(200+(unit-200)*3))||
  (unit>=301 && unit<=400 && "Rs."+(500+(unit-300)*4)) ||
   "Rs."+(900+(unit-400)*5)
   }
  
  
  </h2>
   </>)
}
export default App


/*function App()
{
  var age=20
  return(<>
  <h1>Age eligible for vote or not</h1>
  <h2>{(age>=18 && "This is eligible age for Vote") || "Not eligible for Vote"}</h2>
  </>)
}
export default App
 /*function App()
{
  var num=85
  return(<>
  <h1>Simple if else if or else if ladder</h1>
  <h2>{(num>=85 && "Outstanding") || (num>=75 && "Excellent") || (num>=65 && "Verygood") 
  || (num>=55 && "Good" ) ||  "Fair" }</h2></>)
}
export default App




/*function App()
{
  var mark=40
  return(<>
     <h1>Given number even or add</h1>
     <h2>{(mark%2===0 && "Even")|| "Odd"}</h2>
  </>)
}
export default App


/*function App()
{
  var mark=33
  return(<>
  <h1>React simple if statement</h1>
  <h2>{(mark>34 && "PASS") || "FAIL"}</h2>
  </>)
}
export default App



/*function App()
{
  var mark=35
  return(<>
  <h1>React simple if statement</h1>
  <h2>{mark>34 && "PASS"}</h2>
  </>)
}
export default App



/*function App()
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
