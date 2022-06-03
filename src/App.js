import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import MainFeed from './components/MainFeed';
import Character from './components/Character';
import Home from './components/Home';
import { Router, Route, Routes } from 'react-router-dom';

function App() {
  const [characters, setCharacters] = useState([])
  // const [page, setPage] = useState("/")

  useEffect(() => {
    fetch("http://localhost:9292/character")
    .then((r) => r.json())
    .then((data) => setCharacters(data))
  }, []);

  return (
    <div className="App">
       <Navbar />
         <Routes>
           <Route exact path="/" element={<Home />} />
           <Route path="/character" element={<MainFeed characters={characters} />} />
           <Route path="/character/:id" element={<Character />} />
         </Routes>
    </div>
  );
}

export default App;
