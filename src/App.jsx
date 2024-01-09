import './App.css';
import Navbar from './components/navbar'
import Search from './components/search'
import Songs from './components/songsList'
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-comp-wrap">
        <Search />
        <Songs className="songs-wrapper" />
      </div>
    </div>
  );
}

export default App;
