import "./GridProdutos.css"
import produtos from "src/json/produtos.json"
import Card from "src/components/Card/card"

const BannerGrid = () => {
    return (
        <div className="container">
            {produtos.map((produto) => (
                <Card produto={produto} key={produto.nome} />
            ))}
        </div>
    )
}

export default BannerGrid;