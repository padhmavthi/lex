import logo from './logo.svg';
import './App.css';

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


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;