import './App.css';
import Header from './Header/Header';
import Agenda from "./agenda/agenda";
import Main from "./topic/main";
import Side from "./side/side";

function App() {
  return (
    <div className="App">
      <Header/>
      <Agenda/>
      <Main/>
      <Side/>
    </div>
  );
}

export default App;
