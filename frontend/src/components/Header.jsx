import './Header.css'
import { StarField } from './StarField.jsx';

export function Header() {
    return (
        <nav className='header'>
            <p className='header-p'>ACORTADOR DE URLS</p>
            <StarField />
        </nav>


    )
}
