import mongoose from 'mongoose';

const produtoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    quantidade: {
        type: Number,
        default: 0
    }
});

const Produto = mongoose.model('Produto', produtoSchema);

export default Produto;
