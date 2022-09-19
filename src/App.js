import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Posts from "./components/Post";
function App() {
  return (
    <>
      <div className="container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Posts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;