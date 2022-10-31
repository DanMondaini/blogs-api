const { Category } = require('../models');

const getAll = async (_req, res) => res.status(200).json(await Category.findAll());

module.exports = {
    getAll,
};