import "./App.css";
import Navbar from './components/header';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home'
import RecentWork from './pages/recentWork'
import Documentaries from './pages/documentaries'
import ShowReel from './pages/showreel'

function App() {
  return(
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact component={Home} />
      <Route path='/recentwork' component={RecentWork} />
      <Route path='/showreel' component={ShowReel} />
      <Route path='/documentaries' component={Documentaries} />
    </Routes>
  </Router>
  )
 
}

export default App;
