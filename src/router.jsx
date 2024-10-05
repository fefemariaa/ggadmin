import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicioadm from './pages/inicio';



export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicioadm />} />
            </Routes>
        </BrowserRouter>
    );
}