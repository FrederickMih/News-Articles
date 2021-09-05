import Routes from '../routes/routes';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Styles/App.css';

const App = () => (
  <div className="app-div">
    <Navbar />
    <Routes />
    <Footer />
  </div>
);

export default App;
