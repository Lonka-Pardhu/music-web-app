import './App.css';
import Navbar from './components/Navbar/navbar'
import Search from './components/Search/search'
import Songs from './components/Songs/songsList'
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