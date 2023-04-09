import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';


const App = ()=> {
  return (
    <div className="Container">
      <Header />
        <Nav />
    </div>
  );
}

export default App;
