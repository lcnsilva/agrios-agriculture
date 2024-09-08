import "./Banner.css"
import imgBanner from "../../assets/bannerPrincipal.png"
const Banner = () => {
    return(
        <div className="banner">
            <img src={imgBanner} alt="" />
            <div className="bannerInfo">
                <h2>Agriculture <br /><strong>& Organic Market</strong></h2>                
                <button>Show Now</button>
            </div>    
        </div>
    )
}

export default Banner;