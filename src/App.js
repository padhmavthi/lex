import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link,} from "react-router-dom"
import Form from './Form';
import ToDoList from './ToDoList';


function Header() {
  return (<div><header>
    <a href="about.html" className='about'>ABOUT</a>
    <a href="qualification." className='quali'>QUALIFICATION</a>
    <a href="skill" className='skill'>SKILL</a>
  </header>
  </div>
  );
}


function Body() {
  return (<div>
    <body> HLO EVERYBODY <br></br>
      THIS IS MY PORTFOLIO

    </body>
  </div>
  );
}


function Footer() {
  return (<div><footer>
    yyyuyaxyauxuaxg

  </footer>
  </div>
  );

}
function About() {
  
    return (
    <div>
   this is about component
  </div>
  )
}
function Contact() {
  return (
    <div>this is Contact</div>
  )
}

function Teams() {
  return (
    <div>
      this is Team
    </div>
  )
}


function Navbar() {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/Teams">Teams</Link>
      <Link to="/Add-student">Add-student</Link>
      <Link to="/ToDoList">ToDoList</Link>
      <Link to="/Student-Details">Student-Details</Link>
    

      
      
      
    </div>

  )
  }


        





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />}></Route>
         <Route path="/contact" element={<Contact />}></Route>
         <Route path="/Teams" element={<Teams />}></Route>c:\Users\Ultrabook\AppData\Local\Programs\Microsoft VS Code\resources\app\out\vs\code\electron-sandbox\workbench\workbench.html
         <Route path="/add-student" element={<Form />}></Route>
         <Route path="/ToDoList" element={<ToDoList />}></Route>
         



      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;