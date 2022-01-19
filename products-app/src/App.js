
import './App.css';
import { Routes, Route } from "react-router-dom"
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<h3>Product Detail</h3>} />
      </Routes>
        
    </div>
  );
}

export default App;
