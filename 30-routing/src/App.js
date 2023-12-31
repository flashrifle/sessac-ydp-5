import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import ProductDetailPage from './pages/ProductDetailPage';
import PhotoPage from './pages/PhotoPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/photos" element={<PhotoPage />} />
                    <Route
                        path="/products/:productId"
                        element={<ProductDetailPage />}
                    />
                    {/* 404 페이지는 가장 밑에 작성해야한다 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
