import cardo from '../assets/images/menu_card.png';
import cards from '../assets/images/menu_card1.png';
import cardt from '../assets/images/menu_card2.png';
import cardf from '../assets/images/menu_card3.png';
import model1 from '../assets/images/Rectangle1.png';
import model2 from '../assets/images/Rectangle2.png';
import model3 from '../assets/images/Rectangle3.png';
import model4 from '../assets/images/Rectangle4.png';

function Body() {
    let clothes = [
        {
            image: model1,
            name: 'Cotton-Blend-Jacket',
            price: '$48.00'
        },
        {
            image: model2,
            name: 'Multi Pocket Jacket',
            price: '$59.00'
        },
        {
            image: model3,
            name: 'Velvet Blazer',
            price: '$48.00'
        },
        {
            image: model4,
            name: 'Cotton-Blend-Jacket',
            price: '$16.00'
        },
    ]

    return (
        <div>
            <div className="block1">
                <div className="cards">
                    <img src={cardo} alt="" />
                    <img src={cards} alt="" />
                    <img src={cardt} alt="" />
                    <img src={cardf} alt="" />
                </div>
                <div className="text">
                    <h1>eCommerce Ready</h1>
                    <p>Style your products and shop pages, add a cart widget to your header, <br />
                        and convert clicks into sales.</p>
                </div>
            </div>
            <div className="block2">
                <div className="block2__info">
                    <div className="block2__smallText">The Chloe Collection</div>
                    <h1 className='block2__heading'>The Project Jacket</h1>
                    <button className='block2__btn'>PURCHASE THEME</button>
                </div>
            </div>
            <div className="block3 container">
                <div className="block3__heading">
                    <h1 className="block3__heading-text">Highly Customizable</h1>
                    <p className="block3__heading-parag">Style your products and shop pages, add a cart widget to your header,<br />
                        and convert clicks into sales.</p>
                </div>
                <div className="block3__cards">
                    {
                        clothes.map((item, i) => (
                            <div key={i} className="bock3__cards-card">
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <small>{item.price}</small>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Body