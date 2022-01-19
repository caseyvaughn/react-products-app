
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
        
    </div>
  );
}

export default App;
