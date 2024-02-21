import facebook from '../assets/images/icons/facebook.svg';
import twitter from '../assets/images/icons/twitter.svg';
import vimeo from '../assets/images/icons/vimeo.svg';
import pinterest from '../assets/images/icons/pinterest.svg';
import youtube from '../assets/images/icons/youtube.svg';
import visa from '../assets/images/icons/visa.svg';
import paypal from '../assets/images/icons/paypal.svg';
import discover from '../assets/images/icons/discover.svg';
import mastercard from '../assets/images/icons/mastercard.svg';

function Footer() {
    return (
        <div className='footer'>
            <div className="columns container">
                <div className="columns__services">
                    <h3 className="columns__heading">Customer Services</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>Shipping</li>
                        <li>Click & Collect</li>
                        <li>Returns</li>
                        <li>FAQ’s</li>
                    </ul>
                </div>
                <div className="columns__assistance">
                <h3 className="columns__heading">Customer Assistance</h3>
                    <ul>
                        <li>Track My Orders</li>
                        <li>Online Returns</li>
                        <li>Shipping Rates</li>
                        <li>Returns & Exchanges</li>
                        <li>International Shipping</li>
                    </ul>
                </div>
                <div>
                    <h3 className='columns__heading'>Follow Grayson</h3>
                    <div className='columns__media'>
                        <div><img src={facebook} alt="icon" /> <span>Facebook</span></div>
                        <div><img src={twitter} alt="icon" /> <span>Twitter</span></div>
                        <div><img src={vimeo} alt="icon" /> <span>Vimeo</span></div>
                        <div><img src={pinterest} alt="icon" /> <span>Pinterest</span></div>
                        <div><img src={youtube} alt="icon" /> <span>YouTube</span></div>
                    </div>
                </div>
                <div className="columns__join">
                    <h3 className="columns__heading">Join The Club</h3>
                    <div className="search">
                        <input type="text" className='search__inp' placeholder='E-mail Address*' />
                        <button className='search__btn columns__btn'>JOIN</button>
                    </div>
                    <p className='columns__parag'>Sign me up to receive emails on new <br /> product arrivals, special offers and <br /> exclusive events.</p>

                    <div className="columns__paymants">
                        <img src={visa} alt="" />
                        <img src={paypal} alt="" />
                        <img src={discover} alt="" />
                        <img src={mastercard} alt="" />
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Footer