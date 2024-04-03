import Explore from "./pages/Explore";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import BlogDetails from './pages/BlogDetails'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div id='contents'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/explore'>
              <Explore />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
