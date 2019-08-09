const { Schema, model } = require('mongoose');

const PessoaSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    required: true,
    },
    idade: Number
}, {
    timestamps: true
});

module.exports = model('Pessoa', PessoaSchema);