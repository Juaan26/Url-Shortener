import { useParams } from 'react-router-dom';
import './ShortenedUrlPage.css';

export function ShortenedUrlPage() {
    const { url } = useParams();
    const fullUrl = `http://url.wandev.top/${url}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(fullUrl).then(() => {
            alert('URL copiada al portapapeles');
        });
    };

    return (
        <div className='Shortened-div'>
            <div className='Shortened-sub-div'>
                <p className='Shortened-tx'>{ fullUrl }</p>
                <button className='Shortened-btn' onClick={ handleCopy }>Copiar URL</button>
            </div>
        </div>
    );
}
