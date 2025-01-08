import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { StarField } from './components/StarField';
import { Header } from './components/Header'

export default function App() {

    const [inputUrl, setInputUrl] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const isValidUrl = (url) => {
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocolo 
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // dominio
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // o dirección IP (v4) 
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // puerto y ruta 
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // cadena de consulta 
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragmento
        return !!pattern.test(url);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        if (!isValidUrl(inputUrl)) {
            setError('La URL no es valida o no está estructurada correctamente');
            console.log("no es valida");
            return;
        }

        try {
            const response = await axios.post('http://apiu.wandev.top/api/links/crear',
                { input_url: inputUrl },
                { headers: { 'Content-Type': 'application/json' } }
            );
            const result = response.data;
            console.log('Respuesta del backend:', result); // Verifica la respuesta del backend
            if (result.shortened_url) {
                const code = result.shortened_url;
                navigate(`/shortened-url/${code}`);
            }
        } catch (error) {
            setError('Error al crear la URL acortada');
            console.error('Error al crear la URL acortada:', error);
        }
    };

    return (
        <div className=' page'>
            <Header />
            < div className='url-container' >
                <div className='url-subcontainer'>
                    <StarField />
                    <h2 className='url-subcontainer-h2'>PEGA LA URL QUE QUIERAS ACORTAR</h2>
                    <form className='url-inputs' onSubmit={ handleSubmit }>
                        <input
                            type="text"
                            className='input-text'
                            placeholder='Introduce el enlace'
                            value={ inputUrl }
                            onChange={ (e) => setInputUrl(e.target.value) }
                        />
                        <button type="submit" className='btn-submit'>
                            <img className="url-svg" src="public/rockets2.svg" alt="imagen de un cohete para enviar el enlace" />
                        </button>
                    </form>
                    { error && <p className='text-error'>{ error }</p> }
                    <p className='text'>La estructura del enlace debe ser: https://tuenlace.com/xx/xx</p>
                </div>
            </div >
        </div>
    );
}
