import { Router } from 'express';
import { serviceService } from '../services/services.service.js';


const router = Router();

// Handlebars no puede leer propiedades de documentos de Mongoose
// (bloquea el acceso al prototipo por seguridad). Los convertimos a
// objetos planos. Si el DAO es el de FileSystem, ya son planos.
const toPlain = (doc) => (doc?.toObject ? doc.toObject() : doc);


// GET /services  (opcional: /services?category=premium)
router.get('/', async (req, res) => {
    try {
        const { category } = req.query;
        const services = await serviceService.getServices({ category });
        console.log('Servicios obtenidos:', services);

        // renderiza la vista 'services' con los servicios obtenidos
        res.render('services', {
            title: 'Servicios',
            category,
            services: services.map(toPlain),
        });

    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los servicios' });
    }
})




// CHAT SOCKETS
router.get('/messages', (req, res) => {
    res.render('messages', {});
});

export default router;