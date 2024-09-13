import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefone: {
        type: String,
        required: true
    },
    endereco: {
        rua: { type: String, required: true },
        cidade: { type: String, required: true },
        estado: { type: String, required: true },
        cep: { type: String, required: true }
    },
    dataDeCadastro: {
        type: Date,
        default: Date.now
    },
    vendas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Venda'
    }]
});

const Cliente = mongoose.model('Cliente', clienteSchema);

export default Cliente;