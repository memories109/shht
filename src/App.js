import './App.css';
import Detail  from './Detail'
import Main  from './Main'
import Navigation  from './Navigation'


function App() {
  return (
    <div className="App">
      <header>
          <div class="container">
              <div class="intro-text">
                  <div class="intro-lead-in">Hello Errbody</div>
                  <div class="intro-heading">Yes Mel, Ajmal, Chien, Junne maybe and Syok.</div>
                  <a href="#services" class="page-scroll btn btn-xl">Aku Bukan Sempit</a>
              </div>
          </div>
      </header>
      <Navigation>
        <Main></Main>
        <Detail></Detail>
      </Navigation>
    </div>
  );
}

export default App;
