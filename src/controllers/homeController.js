import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Richard',
      sobrenome: 'Ferreira',
      email: 'richard@email.com',
      idade: 18,
      peso: 50,
      altura: 1.6,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
