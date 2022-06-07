import Artist from './file/Artist';
import NavBar from './file/NavBar';
import Song from './file/Song';
import AddSong from './AddSong';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <NavBar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><Song/> <Artist/></div>}/>
        <Route path="/AddSong" element={<AddSong />}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
