import './App.css';
import Footer from './Components/footer/Footer';
import Footer_Autors from './Components/footer_autors/Footer_Autors';
import Header from './Components/header/Header';
import Main from './Components/main/Main';

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Footer_Autors />
    </div>
  );
}

export default App;
