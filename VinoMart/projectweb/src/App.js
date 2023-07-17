import "./App.css";
import Body from "./components/layout/body";
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer";
import Contact from "./views/layout/contact";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Header />
      </header>
      <body>
        <Body />
      </body>
      <footer>
        <Footer />
      </footer> */}
      <Contact />
    </div>
  );
}

export default App;
