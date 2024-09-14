import Produto from "../models/Produto";

class ProdutoController {
    static cadastrarProduto = async (req, res) => {
        const { nome, preco, quantidade } = req.body;

        try {
            await Produto.create({
                nome,
                preco,
                quantidade
            });
            res.status(200).json("Produto cadastrado com sucesso!");
        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            res.status(500).json({ message: 'Erro ao cadastrar produto' });
        }
    }

    static listarProdutos = async (req, res) => {
        try {
            const resultProdutos = await Produto.find({ativo : true});
            res.status(200).json(resultProdutos);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            res.status(404).json({ message: 'Erro ao buscar produtos' });
        }
    }

    static listarProdutoPorId = async (req, res) => {
        const { idProduto } = req.params;

        try {
            const resultProduto = await Produto.findById(idProduto);

            res.json(resultProduto);
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
            res.status(404).json({ message: 'Erro ao buscar produto' });
        }
    }

    static atualizarProduto = async (req, res) => {
        const { idProduto } = req.params;
        const { nome, preco, quantidade } = req.body;

        try {
            const dadosProduto = { nome, preco, quantidade };

            const resultProduto = await Produto.findByIdAndUpdate(idProduto, dadosProduto, { new: true });
            res.status(200).json(resultProduto);
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
            res.status(404).json({ message: 'Erro ao atualizar produto' });
        }
    }

    static deletarProdutoPorId = async (req, res) => {
        const { idProduto } = req.params;

        try {
            const produtoDeletado = await Produto.findByIdAndUpdate(idProduto, {$set:{ativo : false}});

            res.status(200).json({
                message: "Produto deletado com sucesso!",
                produto: produtoDeletado
            });

        } catch (error) {
            console.error('Erro ao deletar produto:', error);
            res.status(404).json({ message: 'Erro ao deletar produto' });
        }
    }
}

export default ProdutoController;