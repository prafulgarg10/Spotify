import Artist from './file/Artist';
import Song from './file/Song';
import AddSong from './AddSong';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from './file/User';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<User/>}/> 
        <Route path="/home" element={<div><Song/> <Artist/></div>}/>
        <Route path="/AddSong" element={<AddSong />}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
