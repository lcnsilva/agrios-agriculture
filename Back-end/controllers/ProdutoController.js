import Produto from "../models/Produto";

class ProdutoController {
    static CadastrarProduto = async (req, res) => {
        const { nome, preco, quantidade } = req.body;

        if (!nome || !preco || !quantidade) {
            return res.status(400).json("dados incompletos!");
        }

        try {
            await Produto.create({
                nome,
                preco,
                quantidade
            });
            res.status(200).json("Produto cadastrado com sucesso!");
        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            return res.status(500).json({ message: 'Erro ao cadastrar produto' });
        }
    }

    static ListarTodosProdutos = async (req, res) => {
        try {
            const resultProdutos = await Produto.find();
            res.status(200).json(resultProdutos);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            return res.status(404).json({ message: 'Erro ao buscar produtos' });
        }
    }

    static ListarProdutoPorId = async (req, res) => {
        const { idProduto } = req.params;

        try {
            const resultProduto = await Produto.findById(idProduto);

            if (!resultProduto) {
                return res.status(404).json({ message: 'Produto não encontrado' });
            }
            res.json(resultProduto);
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
            return res.status(404).json({ message: 'Erro ao buscar produto' });
        }
    }

    static AtualizarProdutoPorId = async (req, res) => {
        const { idProduto } = req.params;
        const { nome, preco, quantidade } = req.body;

        if (!nome || !preco || !quantidade) {
            return res.status(400).json("dados incompletos!");
        }

        try {
            const dadosProduto = { nome, preco, quantidade };

            // o trecho que contém "new:true", força o mongoose a retornar os dados atualizados, pois por padrão ele retorna antes do update.
            const resultProduto = await Produto.findByIdAndUpdate(idProduto, dadosProduto, { new: true });
            res.status(200).json(resultProduto);
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
            return res.status(500).json({ message: 'Erro ao atualizar produto' });
        }
    }

    static DeletarProdutoPorId = async (req, res) => {
        const { idProduto } = req.params;

        try {
            const produtoDeletado = await Produto.findByIdAndDelete(idProduto);

            if (!produtoDeletado) {
                return res.status(404).json({ message: "Produto não encontrado" });
            }

            res.status(200).json({
                message: "Produto deletado com sucesso!",
                produto: produtoDeletado
            });

        } catch (error) {
            console.error('Erro ao deletar produto:', error);
            return res.status(500).json({ message: 'Erro ao deletar produto' });
        }
    }
}

module.exports = new ProdutoController();