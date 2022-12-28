import multer from 'multer';

import Foto from '../models/Foto';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('foto');

class FotoController {
  async store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;

        const foto = await Foto.create({ aluno_id, originalname, filename });

        return res.json(foto);
      } catch (err) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

export default new FotoController();
