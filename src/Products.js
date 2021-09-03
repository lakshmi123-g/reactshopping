import React, { useState } from 'react';

const GROCERY = 'grocery';
const SOAPS = 'soaps';
const DETERGENTS = 'detergents';
const PASTE = 'paste';

export default function Products({ setCart, cart }) {
    const [products] = useState([
        {
            category: GROCERY,
            name: 'wheat',
            cost: 100,
            image:
                'https://www.foodbusinessnews.net/ext/resources/2021/2/OrganicWheat_Lead.jpg?1613050685',
        },
        {
            category: GROCERY,
            name: 'oats',
            cost: 200,
            image:
                'https://ak.picdn.net/shutterstock/videos/1035539096/thumb/12.jpg',
        },
        {
            category: GROCERY,
            name: 'corn',
            cost: 50,
            image:
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/is-corn-grain-1544222258.jpg?crop=1xw:0.75xh;center,top&resize=1200:*",
        },
        {
            category: GROCERY,
            name: 'rice',
            cost: 100,
            image:
                'https://img.etimg.com/thumb/width-640,height-480,imgsize-263761,resizemode-1,msid-74742498/news/economy/agriculture/rice-export-from-india-to-ride-rabi-harvest-global-price/rice-agencies.jpg',
        },
        {
            category: GROCERY,
            name: 'dal',
            cost: 80,
            image:
                'https://www.sagarpulses.com/images/pc2.jpg',
        },
        {
            category: SOAPS,
            name: 'lifebouy',
            cost: 45,
            image:
                'https://5.imimg.com/data5/YG/BQ/LC/SELLER-5099161/lifebuoy-bath-soap-500x500.jpg',
        },
        {
            category: SOAPS,
            name: 'rexona',
            cost: 40,
            image:
                'https://rukminim1.flixcart.com/image/416/416/kb89ea80/soap/g/f/9/4-400-coconut-olive-oil-soap-set-rexona-original-imafsmjbehsd48my.jpeg?q=70',
        },
        {
            category: SOAPS,
            name: 'santoor',
            cost: 30,
            image:
                'https://5.imimg.com/data5/KU/MA/EA/SELLER-4312448/50-gm-santoor-sandal-soap-500x500.jpg',
        },
        {
            category: SOAPS,
            name: 'lux',
            cost: 50,
            image:
                'https://dgrocerz.shop/wp-content/uploads/2021/03/lux-soap.png',
        },
        {
            category: DETERGENTS,
            name: 'Rin',
            cost: 50,
            image:
                'https://jstclick.com/image/cache/1234/dove/surf%20excel-800x800.jpg',
        },
        {
            category: DETERGENTS,
            name: 'XXX',
            cost: 50,
            image:
                'https://www.bharathiconsumercare.com/wp-content/uploads/2017/03/xxx-detergent-cakes-pack-50rs2.jpg',
        },
        {
            category: DETERGENTS,
            name: 'Oorvasi',
            cost: 50,
            image:
                'http://www.freedomcart.com/image/cache/electrons%20freedomcart/freedomcart-oorvasi-premium-soap-700x700.JPG',
        },
        {
            category: PASTE,
            name: 'Dabur Red',
            cost: 50,
            image:
                'https://img1.exportersindia.com/product_images/bc-full/2018/8/5846220/dabur-red-toothpaste-1535100492-4226983.jpeg',
        },

        {
            category: PASTE,
            name: 'Colgate',
            cost: 50,
            image:
                'https://images-na.ssl-images-amazon.com/images/I/61hohDKfApL._SL1000_.jpg',
        },
        {
            category: PASTE,
            name: 'Pepsodent',
            cost: 50,
            image:
                'https://img1.exportersindia.com/product_images/bc-full/2020/4/4545741/pepsodent-toothpaste-1586758866-5368935.jpeg',
        },
        {
            category: PASTE,
            name: 'Close Up',
            cost: 50,
            image:
                'https://image1.jdomni.in/product/21062020/19/5F/A8/4AC539C86CE5665396F34ED43A_1592732232261.jpeg?fit=around|1024:768',
        },
    ]);

    const addToCart = (product) => {
        let newCart = [...cart];
        let itemInCart = newCart.find(
            (item) => product.name === item.name
        );
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
                ...product,
                quantity: 1,
            };
            newCart.push(itemInCart);
        }
        setCart(newCart);
    };

    const [category, setCategory] = useState(GROCERY);

    const getProductsInCategory = () => {
        return products.filter(
            (product) => product.category === category
        );
    };

    return (
        <>
            <h1>Products</h1>
            Select a category
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value={GROCERY}>{GROCERY}</option>
                <option value={SOAPS}>{SOAPS}</option>
                <option value={DETERGENTS}>{DETERGENTS}</option>
                <option value={PASTE}>{PASTE}</option>
            </select>
            <div className="products">
                {getProductsInCategory().map((product, idx) => (
                    <div className="product" key={idx}>
                        <img src={product.image} alt={product.name} />

                        <h3>{product.name}</h3>
                        <h4>${product.cost}</h4>
                        <button onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}
