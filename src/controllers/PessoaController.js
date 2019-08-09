const Pessoa = require('../models/Pessoa');

module.exports = {
    async store(req, res) {
        const { nome, email, idade } = req.body;

        const pessoaExists = await Pessoa.findOne({
            nome
        });

        if(pessoaExists){
            return res.json(pessoaExists);
        }

        const pessoa = await  Pessoa.create({
            nome,
            email,
            idade
        });

        return res.json(pessoa);
    }
};