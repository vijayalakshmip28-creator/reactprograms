import React from "react";
import { useEffect,useState } from "react";
const App=()=>
{
  const [name,setName]=useState("SK❤️")
  useEffect(()=>{
    document.title=`Hello!! ${name}`
  })
  const dis=()=>{
    setTimeout(()=>{
    setName("👍Sathiyakrishna")
  },5000)
}
   const dis1=()=>{
    setName("👍BharaniSRI.....")
  }

  return(<div>
    <h1>UseEffect and useState Hook</h1>
    <button onClick={dis}>ChangeName</button>
    <button onClick={dis1}>ChangeName</button>
    <br></br>
    {name}
  </div>)
}
export default App


/*import React from "react";
import { useEffect } from "react";
const App=()=>
{
  useEffect(()=>{
    document.title=`Sk💖`
  })
  return(<div>
    <h1>UseEffect Hook</h1>
  </div>)
}
export default App


/*import React from "react";
import { useState } from "react";
const App=()=>
{
   const[count,setCount]=useState(0)
  const dis=(event)=>{
     
        setCount(parseInt(event.target.value)+1)
}
return(
  <div>
  <button onClick={dis}   value={count}>You clicked: {count} times</button>
  
  </div>
)
}
export default App
  
/*import { useState } from "react";
function App()
{
  const[count,setCount]=useState(0)
  const show=(event)=>{
       if(event.target.id==="b1")
        setCount(count+1)
      if(event.target.id==="b2")
        setCount(count-1)
      if(event.target.id==="b3")
        setCount(count-5)
    }
  return(
<>
<button id="b1" onClick={show}>Increment By 1</button>
<button id="b2" onClick={show}>Decrement By 1</button><br></br>
<button id="b3" onClick={show}>Decrement by 5</button>
<br></br>
<h2>{count}</h2>
</>
)
}
export default App



/*import { useState } from 'react'
import React from 'react'

const App = () => {
  const [name,setName]=useState("---")  //default value

    const dis=(event)=>{
        setName(event.target.value)
    }
        
    const show =(v)=>{
      console.log(v)
    }  
    const find =(v1,v2)=>{
      console.log(v1+v2)
    }
    
  return (
    <div>
      <form>
        <input type='text' value={name} onChange={dis} placeholder='enter your name' ></input><br></br>
         <input type='password' onChange={()=> show ("12345")} placeholder='enter your password'></input><br></br>
          <input type='number' onChange={()=>find(10,25)} placeholder='enter accno'></input><br></br>
           <input type='email' placeholder='enter email'></input><br></br>
            <input type='date' placeholder='dob' name='dob'></input><br></br>
             <input type='time' name='time'></input><br></br>
              <label>Select gender</label>
               <input type='radio' name='gender'></input>Male
                <input type='radio' name='gender'></input>Female
                 <input type='radio' name='gender'></input>Others<br></br>
                 <select>
                  <option selected>Select month</option>
                  <option>JAn</option>
                  <option>Feb</option>
                  <option>March</option>
                 </select><br></br>
                 <label>Select course:</label>
                 <input type='checkbox'name='c1'></input>C++
                 <input type='checkbox'name='c2'></input>Javascript
                 <input type='checkbox'name='c3'></input>Java
                 <input type='checkbox'name='c4'></input>Programming language
                 <input type='checkbox'name='c5'></input>Digitalmarketing
                 <br></br>
                 Upload resume:<input type='file'></input>
                 <br></br>
                 <button><b><s>Clickme</s></b></button>
                 <br></br>
                 <label>Type your address:</label>
                 <textarea rows="7" cols="25"></textarea>
                 <br></br>
                 <label>SelectDate:</label>
                 <select size="4" multiple>
                  <option>Sunday</option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                 </select>
                 <br></br>
                 <label>Progress bar 90% completed</label>
                 <progress style={{backgroundColor:'green',border:"2px solid orange"}} min="0" max="100"></progress>
                 <br></br>
                  <font size="7">👌👍🤞💖😉</font>
                 <label>volume:</label>
                 <input type="range" min="0" max="6"></input>
                 
                 <input type='submit'></input>
                 <input type="button" value="clickme"></input>
                 </form>
    </div>
  )
}

export default App

/*
function App(props)
{
  var a=props.data.No 
  var b=props.data.Myname
  var c=props.data.Aadhar
  var d=props.data.Mark
  var e=props.data.Qualification
  var f=props.data.Hobbies
    return(<>
    <h2><u>Find Datatype:</u></h2>
    <h3>Type of no: {typeof(a)}</h3>
    <h3>Type of name: {typeof(b)}</h3>
    <h3>Type of aadhar: {typeof(c)}</h3>
    <h3>Type of mark: {Array.isArray(d)?"it is array":"it is object json"}</h3>
   <h3>Type of qualification: {typeof(e)}</h3> 
   <h3>Type of hobbies: {Array.isArray(f)?"it is array":"it is object json"}</h3></>)
  
}
export default App


/*import React from "react";
import parse from 'html-react-parser'
function App(props)
{
  var ans=""
  for (var s in props.data)
  {
    ans=ans+ `<li>${s} = ${props.data[s]}<br> </br></li>`
    console.log(s)
  }

  return(
    <>
    <h2>Combine react + props(function method)</h2>
    {parse("<ol type='a'>"+ans+"</ol>")}
    </>
  )
}
export default App



/*import React from "react";
import parse from 'html-react-parser'
class App extends React.Component
{
  constructor(props)
  {
    var ans=""
    super(props)
    for(var s in props.data)
    {
      ans=ans+`<li>${s} = ${props.data[s]}<br>   </br></li>`
      console.log(s)
    }
    //var h="<ol>"
    this.state={
      //res:h+ans
      res:"<ol type='I'>"+ans+"</ol>"
     
    }
  }
  render()
  {
    return(<>
       <h1>Combine react state + props</h1>
       {parse(this.state.res)}
       <div id="res"></div></>)
  }
}
export default App





/*import React from "react";
class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      sno:this.props.data.rno,
      stname:this.props.data.sname,
      smark:this.props.data.mark,
      srank:this.props.data.rank,
      sgrade:this.props.data.grade,
      slocation:this.props.data.location,
    }
  }
  render()
  {
    return(<>
    <h1>Studentdetails:</h1>
    <h2>StudentRollNo: {this.state.sno}</h2>
     <h2>StudentName: {this.state.stname}</h2>
     <h2>StudentMark: {this.state.smark}</h2>
      <h2>StudentRank: {this.state.srank}</h2>
       <h2>StudentGrade: {this.state.sgrade}</h2>
        <h2>StudentLocation: {this.state.slocation}</h2>
    </>)
  }
}
export default App
/*import React from "react";
class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      studentname:this.props.sname,
      studentmark:this.props.mark

    }
  }
  render()
  {
    return(<>
    <h1>Combine React state + props</h1>
    <h2>Student Name: {this.state.studentname}</h2>
    <h2>Student Mark: {this.state.studentmark}</h2></>)
  }

}

export default App





/*import React from "react";
class App extends React.Component
{
  constructor()
  {
    super()
    this.state={
      sno:123,
      sname:"Krizh",
      marks:[95,85,65,55,70]
    
      
    }
  }
  show=()=>
  {
    this.setState({sname:"V Sathyakrishna"})
  }
  dis=()=>{
    this.setState({marks:[50,40,30,20,25]})
  }
  dis1=()=>{
    const newmarks=[...this.state.marks]
    newmarks[4]=100
    this.setState({marks:newmarks})
  }
  render()
  {
    return(
      <>
      <h1>This is Class Component</h1>
      <h2>Serial Number: {this.state.sno}</h2>
      <h2>Student Name: {this.state.sname}</h2>
      
     {this.state.marks.map((item,index)=><>Mark {index+1}={item}<br></br></>)}
     <button onClick={this.show}>Update Name</button><br></br>
     <button onClick={this.dis}>Update all marks</button><br></br>
     <button onClick={this.dis1}>Update single mark</button>
      </>
    )
  }
}
export default App

/*
import { aadhar, accno, place, sname } from "./mycomponents/commomvar"

function App()
{
  return(
    <>
      <h1>Myname is:{sname}</h1>
      <h2>My city:{place}</h2>
      <h2>Acc no:{accno}</h2>
      <h2>Aadhar: {aadhar}</h2>
    </>
  )
}
export default App

/*
import Krishna from "./mycomponents/Krishna"

function App()
{
  return(
    <>
    <Krishna/>
        <h1>This is default  App Component </h1>
        

    </>
  )
}
export default App
/*function App()
{
  var arr=[11,22,33,44,55,66,77,88,99,105,12]
  var s=0
  var ma=arr[0]

  var order=arr
  var fans=""
  return(<>
  <h1>React Loop map method</h1>
  <h2>old model:</h2>
  {arr[0]}
  {arr[1]}
  {arr[2]}
  {arr[3]}
  {arr[4]}
  {arr[5]}
  {arr[6]}
  {arr[7]}
  {arr[8]}
  <h2>New model map(loop):</h2>
  {arr.map((v)=><>
  {v}<br></br></>)}

<h2>New model:</h2>
<ol type="A">
{arr.map((v)=><li>{v}</li>)}
</ol>
<h2>Task:Sum of Array</h2>
<div style={{display:"none"}}>
  {arr.map((item)=><>{s=s+item}<br></br></>)}
</div>
<h3>Sum of Array:{s}</h3>

<div style={{display:"none"}}>
  {arr.map((item)=><>{ma<item && <> {ma=item} </>}</>)}
  
</div>
<h3>Maximum of Array:{ma}</h3>

<h2>Ascending order:</h2>
<div style={{display:"none"}}>{order.sort((x,y)=>(x-y))}</div>
{order.map((item)=><>{item} +</>)}

<h2>Desending order:</h2>
<div style={{display:"none"}}>{order.sort((x,y)=>(y-x))}</div>
{order.map((item)=><>{item} -</>)}

<h2>Adding element in an array:</h2>
<div style={{display:"none"}}>{order.push(999)}</div>
{order.map((item)=><>{item} ,</>)}

<h2>Deleting last element:</h2>
<div style={{display:"none"}}>{order.pop(999)}</div>
{order.map((item)=><>{item} ,</>)}

<h2>Remove last comma or plus or any char:</h2>
<div style={{display:"none"}}>{order.map((item)=><>{fans=fans+item+","}</>)}</div>
      {fans.slice(0,-1)}  

</>)}
export default App




/*function App()
{
  var arr=[11,22,33,44,55,66]
  var[v1,,v2,...v3]=arr
  return(<>
     <h2><u>Spread operator</u></h2>
     <h3>index 0: {v1}</h3>
     <h3>index 1: {v2}</h3>
     <h3>index 4: {v3}</h3>
       </>)
}
export default App
/*function App()
{
  var arr=[11,22,33,44,55,66]
  
  return(<>
     <h2><u>Spread operator(Array)</u></h2>
     <h3>index 0: {arr[0]}</h3>
     <h3>index 1: {arr[1]}</h3>
     <h3>index 4: {arr[4]}</h3>
     <h3>index 6: {arr[6]}</h3>
       </>)
}
export default App


/*function App()
{
  var res="fail"
  var num=50
  return(<>
  <h1>Nested if</h1>
  <h2>{
  (res==="pass" && ((num>=85 && "Outstanding") || (num>=75 && "Excellent") || (num>=65 && "Verygood") 
  || (num>=55 && "Good" ) ||  "Fair")) 
  || "No grade because fail"
  }</h2></>)
}
export default App




/*function App(){
  var unit=420
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
