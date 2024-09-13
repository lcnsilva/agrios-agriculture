import mongoose from 'mongoose';

const vendaSchema = new mongoose.Schema({
    data: {
        type: Date,
        default: Date.now
    },
    produtos: [
        {
            produto: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Produto',
                required: true
            },
            quantidade: {
                type: Number,
                required: true,
                min: 1
            }
        }
    ],
    valorTotal: {
        type: Number,
        required: true
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    }
});

const Venda = mongoose.model('Venda', vendaSchema);

export default Venda;