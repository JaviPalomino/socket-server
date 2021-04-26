import {Router, Request, Response} from 'express';

// Llamo al router
const router = Router();

// construyo el primer metodo un get
router.get('/mensajes', (req: Request, res: Response) => {

    res.json({
        ok: true,
        mensaje: 'Se proceso toco correctamente',
    });


});


// construyo el primer metodo un post
router.post('/mensajes', (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;

    res.json({
        ok: true,
        mensaje: 'Listo un POST con argumentos',
        cuerpo,
        de
    });


});


// construyo el primer metodo un post
router.post('/mensajes/:id', (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id     = req.params.id;
    res.json({
        ok: true,
        mensaje: 'Listo un POST con argumentos',
        cuerpo,
        de,
        id
    });


});

export default router


