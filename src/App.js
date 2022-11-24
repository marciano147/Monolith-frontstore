import './App.scss';
import './components/shop-items-container/shop-items-container.component.jsx'
import ShopItemsContainer from './components/shop-items-container/shop-items-container.component.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './components/product-page/product-page.component';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShopItemsContainer/>} />
        <Route path="/products/:id" element={<ProductPage/>} />
      </Routes>
    </div>
  );
}

export default App;
