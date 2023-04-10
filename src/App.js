import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';


const App = ()=> {
  return (
    <div className="Container">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
