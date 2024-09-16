import iconDolar from '../../assets/iconDolar_card.svg';
import imgProduto from '../../assets/produtos/onion.png';
import './card.css';

function Card() {
    return (
        <div className='card'>
            <div className='img-produto'>
                <img src={imgProduto} alt="Imagem do produto" />
            </div>
            <div className='info-produto'>
                <span className='nome-produto'>Onions</span>
                <span className='valor-produto'>$20.00</span>
            </div>
            <div className='icon-dolar'>
                <img src={iconDolar} alt="Icone de Dolar" />
            </div>
        </div>
    )
}

export default Card