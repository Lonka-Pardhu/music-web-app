import './App.css';
import Navbar from './components/navbar'
import Search from './components/search'
import Songs from './components/songsList'
// import AudioPlayer from './components/audioPlayer'
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-comp-wrap">
        <Search />
        <Songs />
      </div>
      {/* <AudioPlayer /> */}
    </div>
  );
}

export default App;
