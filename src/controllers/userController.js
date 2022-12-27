import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;

      return res.json({ id, nome, email });
    } catch (err) {
      res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'nome', 'email'],
      });
      return res.json(users);
    } catch (err) {
      return res.json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'email'],
      });

      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const newUser = await user.update(req.body);
      const { id, nome, email } = newUser;

      return res.json({ id, nome, email });
    } catch (err) {
      console.log(err);
      return res.json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }
}

export default new UserController();
