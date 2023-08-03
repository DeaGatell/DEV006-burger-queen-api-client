/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Foods } from '../Service/food';
import AddGreen from '../images/anadir-verde.png';
import DynamicDiv  from './counter';

function ProductsData() {
    const [productsData, setProductsData] = useState([]);
    const [showDynamicDiv, setShowDynamicDiv] = useState(false);

    useEffect(() => {
        Foods()
            .then(data => {
                setProductsData(data);
            })
            .catch(error => {
                console.error(error, 'AQUI ESTA EL ERROR*');
            });
    }, []);

    const handleShowDynamicDiv = () => {
        setShowDynamicDiv(true);
    };

    return (
        <div className='grid grid-cols-2 gap-3'>
            {productsData.map((product) => (
                <div
                    key={product.id}
                    //onClick={() => handleProductClick(product.price)}
                    className='bg-white border-lime-500 border-[3px] rounded-[50px] my-3 mx-5 font-judson text-2xl p-2 shadow-lg'
                >
                    <div className='flex items-center justify-center'>
                        <img
                            src={product.image}
                            alt='Latte'
                            className='w-12 h-12 rounded-xl' />
                    </div>
                    <p className='text-xl text-center text-black'>{product.name}</p>
                    <p className='text-xl text-center text-black'>$ {product.price}</p>
                    <button className='relative top-[-10px] right-[-12px] w-18 h-18 flex justify-center items-center z-10'onClick={handleShowDynamicDiv}>
                        <img src={AddGreen} alt='Add Icon Green' className='w-18 h-18 border-4 rounded-full cursor-pointer' />
                    </button>
                </div>
            ))}
            {showDynamicDiv && <DynamicDiv />}
        </div>
    );
}

export { ProductsData };

//onClick={handleIncrement}


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