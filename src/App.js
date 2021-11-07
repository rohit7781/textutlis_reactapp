
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title='Rohit Text utils' />
      {/* <TextForm heading="Entre your text" /> */}
      <About />

    </>
  );
}

export default App;
