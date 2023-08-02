/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Foods } from '../Service/food';

function ProductsData() {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        Foods()
            .then(data => {
                setProductsData(data);
            })
            .catch(error => {
                console.error(error, 'AQUI ESTA EL ERROR*');
            });
    }, []);

    return (
        <div className=''>
            {productsData.map((product) => (
                <div
                    key={product.id}
                    //onClick={() => handleProductClick(product.price)}
                    className='border-[#A1D2B5] border-[3px] rounded-[50px] w-[250px] h-[130px] justify-center my-3 mx-5 font-judson text-2xl p-2 shadow-lg'
                >
                    <img src={product.image} alt='Latte' className='rounded-xl' />
                    <p className=''>{product.name}</p>
                    <p className=''>$ {product.price}</p>
                </div>
            ))}
        </div>
    );
}

    // const handleProductClick = (price) => {
    //     setTotalPrice(totalPrice + price);
    // }

    // function FilterProducts() {
    //     //Filtrar productos según el valor de selectedItem
    //     let filteredProducts = [];

    //     if (selectedItem === 'desayuno') {
    //         filteredProducts = productsData.filter(product => product.type === 'Desayuno');
    //     } else if (selectedItem === 'almuerzo') {
    //         filteredProducts = productsData.filter(product => product.type === 'Almuerzo');
    //     }

    //     return filteredProducts.map(product => (
    //         <div className='' key={product.id}>
    //             <button 
    //             onClick={() => handleProductClick(product.price)}
    //             className='border-[#A1D2B5] border-[3px] rounded-[50px] w-[250px] h-[130px] justify-center my-3 mx-5 font-judson text-2xl p-2 shadow-lg'>
    //             <p className=''>{product.name}</p>
    //             <p className=''>$ {product.price}</p>
    //             </button>
    //         </div>
    //     ));
    // }

    //return (
    //<div>
    //<aside>
    //{FilterProducts()}
    //</aside>
    //<aside> Total: ${totalPrice} </aside>
    //</div>
    //);

//}

export { ProductsData } ;