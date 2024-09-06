import iconDolar from './img_Card_Agriculture/iconDolar_card.svg';
import imgProduto from './img_Card_Agriculture/cebola_img_agriculture.svg'
import './card.css';

function Card(){
    return(
        <div className='card'>
            <div className='img-produto'>
                <img src={imgProduto} alt="Imagem do produto" />
            </div>
            <div className='info-produto'>
                <div className='nome-produto'>Onions</div>
                <div className='valor-produto'>$20.00</div>
            </div>
            <div className='icon-dolar'>
                <img src={iconDolar} alt="Icone de Dolar" />
            </div>
        </div>
    )
}

export default Card