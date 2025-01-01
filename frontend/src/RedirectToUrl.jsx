import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function RedirectToUrl() {
    const { url } = useParams();
    console.log(url);

    useEffect(() => {
        const redirect = async () => {
            try {
                const response = await axios.post('http://localhost:3000/api/links/redirect', { shortenedUrl: url }, { headers: { 'Content-Type': 'application/json' } });
                const result = response.data;
                console.log('Respuesta del backend:', result); // Verifica la respuesta del backend
                if (result.input_url) {
                    window.location.replace(result.input_url); // Reemplaza el historial del navegador
                }
            } catch (error) {
                console.error('Error al redireccionar:', error);
            }
        };
        redirect();
    }, [url]);

    return (
        <div>
            Redirigiendo...
        </div>
    );
}
