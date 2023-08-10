import Body from "../../components/layout/body";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

function Home() {
    return (
      <div className="App body">
        <header className="App-header">
          <Header />
        </header>
        <body>
          <Body />
        </body>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
  
  export default Home;