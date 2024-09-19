import iconDolar from 'src/assets/iconDolar_card.svg';
import './card.css';
import PropTypes from 'prop-types';

function Card({ produto }) {
    
    return (
        <div className='card'>
            <img src={produto.img} alt={produto.nome} className='img-produto'/>
            <span className='nome-produto'>{produto.nome}</span>
            <span className='valor-produto'>${produto.preco.toFixed(2)}</span>
            <img src={iconDolar} alt="Icone de Dolar" />
        </div>
    )
}

Card.propTypes ={
    produto : PropTypes.shape({
        img : PropTypes.string.isRequired,
        nome : PropTypes.string.isRequired,
        preco : PropTypes.number.isRequired
    })    
}

export default Card