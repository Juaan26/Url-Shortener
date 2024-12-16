import { useEffect, useState } from 'react';
import './StarField.css'

export function StarField() {

    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateStars = () => {
            const starsArray = [];
            for (let i = 0; i < 200; i++) { // Puedes ajustar el número de estrellas aquí
                starsArray.push({
                    id: i,
                    left: Math.random() * 100,
                    top: Math.random() * 100,
                    animationDuration: Math.random() * 5 + 3 // Duración aleatoria entre 3 y 8 segundos
                });
            }
            setStars(starsArray);
        };

        generateStars();
    }, []);

    return (
        <div className="star-field">
            { stars.map(star => (
                <div
                    key={ star.id }
                    className="star"
                    style={ {
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        animationDuration: `${star.animationDuration}s`
                    } }
                ></div>
            )) }
        </div>
    );
}