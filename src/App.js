import './App.css';
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Store  from './pages/Store'
import SingleProduct  from './pages/SingleProduct'
import Cart  from './pages/Cart'
import WhichList  from './pages/WhichList'
import Login from "./pages/Login"
import Signin from './pages/Signin'
import Nav from './components/Nav'
import Footer from './components/Footer'
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="bg-[#f4edf7]">
    <Nav />
    <Routes>

      <Route index element={  <Home />   }/>
      <Route path ={'/blog'}  element={  <Blog />   }/>
      <Route path ={'/store'}  element={  <Store />   }/>
      <Route path ={'/contact'}  element={  <Contact />   }/>
      <Route path ='/singleproduct/:id'  element={  <SingleProduct />   }/>
      <Route path ={'/cart'}  element={  <Cart />   }/>
      <Route path ={'/whichlist'}  element={  <WhichList />   }/>
      <Route path={'/login'} element={ <Login />} />
      <Route path={'/signin'} element={ <Signin />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
