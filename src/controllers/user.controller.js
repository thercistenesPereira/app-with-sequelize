const userService = require('../services/user.services');

const error500mensage = 'Ocorreu um erro';

const getAll = async (_req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500mensage });
  }
};

const getById = async(req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(id);

    if(!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500mensage });
  }
};

const getByIdAndEmail = async(req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;

    const user = await userService.getByIdAndEmail(id, email);

    if(!user) return res.status(200).json({ message: 'Usuário não encontrado' });

    res.status(200).json(user);    
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500mensage });
  }
};

const createUser = async(req, res) => {
  try {
    const { fullName, email, phoneNum } = req.body;

    const newUser = await userService.createUser(fullName, email, phoneNum);

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500mensage });
  }
}

const updateUser = async(req, res) => {
  try {
    const { id } = req.params;
    const { fullName, email } = req.body;

    const updatedUser = await userService.updateUser(id, fullName, email);

    if(!updatedUser) return res.status(404).json({ message: 'Usuário não encontrado' });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500mensage });
  }
}

const deleteUser = async(req, res) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);

    return res.status(204).end({message: 'Usuário deletado'});

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error500mensage });
  }
}

module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser,
};