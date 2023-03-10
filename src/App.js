import "./App.css";
import LogoComponent from "./components/LogoComponent";
import FormParent from "./components/FormParent";

function App() {
  return (
    <div className="App">
      <div className="layout-div">
        <div className="logo-component-container">
          <LogoComponent />
        </div>
        <FormParent />
      </div>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
