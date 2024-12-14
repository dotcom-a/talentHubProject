import { useState, useEffec } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import AboutUs from './Components/pages/AboutUs'

function App() {
  const [dataMenu, setDataMenu] = useState([]);
  
  async function getData() {
    const url = "http://localhost:3000/menu";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      setDataMenu(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    // isinya
    getData();
  }, []);

  return (
    <>
      <Navbar/>
      <AboutUs/>
      

    </>
  )
}

export default App
