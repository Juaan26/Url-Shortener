import models from '../models/index.js';
import crypto from 'crypto';

const shorten = (input_url) => {
    const hash = crypto.createHash('md5').update(input_url + Date.now().toString()).digest('hex');
    return hash.substring(0, 8);
};

export default {
    create: async (req, res, next) => {
        console.log(req.body)
        try {
            if (req.body.input_url) {
                console.log("llega  adecir que recibe la url", req.body)
                console.log("url acortada=?", shorten(req.body.input_url))
                const shortenedUrl = shorten(req.body.input_url); // Utiliza shorten correctamente
                req.body.shortened_url = shortenedUrl
                console.log("create")

            }
            const reg = await models.Link.create(req.body); // Asegúrate de usar el modelo correcto
            res.status(200).json(reg);
        } catch (err) {
            console.log('error en el crear:', err);
            next(err);
        }
    },
    redirect: async (req, res, next) => {
        if (req.body.shortenedUrl) {
            try {
                const reg = await models.Link.findOne({
                    where: { shortened_url: req.body.shortenedUrl }, // Asegúrate de que la búsqueda es correcta
                    raw: true
                });
                if (reg) {
                    res.status(200).json(reg);
                } else {
                    res.status(404).json({ error: 'URL no encontrada' });
                }
            } catch (error) {
                next(error);
            }
        } else {
            res.status(400).json({ error: 'URL no proporcionada' });
        }
    }
};
