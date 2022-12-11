import './App.css';
import Contect from './Components/Contect/Contect';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';

function App() {
    return (
        <div>
            <div className="App container">
                <Navbar />
                <Intro />
                <Services />
                <Portfolio />
                <Contect />
            </div>
            <Footer />
        </div>
    );
}

export default App;
