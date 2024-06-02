// import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ShopCategory from './pages/ShopCategory';
import Shop from './pages/Shop.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Footer from './components/Footer/Footer.jsx';
import men_banner from './components/Assets/banner_mens.jpg'
import women_banner from './components/Assets/banner_women.jpg'
import kid_banner from './components/Assets/banner_kids.png'
import Signup from './pages/Signup.jsx';
import Profile from './pages/Profile.jsx';




function App() {
  
  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}></Route>
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product/>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;