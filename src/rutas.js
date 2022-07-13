import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Pagina1} from './pages/pagina1'
import { Pagina2} from './pages/pagina2'
import { Login } from './pages/login';
export function Rutas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="home" element={ <Pagina1 /> } />
                    <Route path="pagina2" element={ <Pagina2 /> } />
                    <Route path="" element={ <Login /> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}