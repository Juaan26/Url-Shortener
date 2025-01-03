import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import { ShortenedUrlPage } from './ShortenedUrlPage';
import RedirectToUrl from './RedirectToUrl'

export default function MainRoutes() {
    return (
        <Router future={ { v7_startTransition: true, v7_relativeSplatPath: true } } >
            <Routes>
                <Route path="/url-s" element={ <App /> } />
                <Route path="/url-s/shortened-url/:url" element={ <ShortenedUrlPage /> } />
                <Route path="/url-s/:url" element={ <RedirectToUrl /> } />
            </Routes>
        </Router>
    );
}
