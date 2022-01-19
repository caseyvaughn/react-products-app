
import './App.css';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h3>Products</h3>} />
        <Route path="/products/:id" element={<h3>Product Detail</h3>} />
      </Routes>
        
    </div>
  );
}

export default App;
