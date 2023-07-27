import Body from "../../components/layout/body";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import Privatnost from "../layout/privatnost";
import Uvjeti from "../layout/uvjeti";
import Impresum from "../layout/impresum";
import Contact from "./contact";

function Home() {
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
        <Impresum />
      </div>
    );
  }
  
  export default Home;