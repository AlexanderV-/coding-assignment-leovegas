import { Route, Routes } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Starred from "./components/Starred";
import WatchLater from "./components/WatchLater";
import "./app.scss";
import VideoPlayerModal from "./components/VideoPlayerModal";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <VideoPlayerModal />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/watch-later" element={<WatchLater />} />
          <Route
            path="*"
            element={<h1 className="not-found">Page Not Found</h1>}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
