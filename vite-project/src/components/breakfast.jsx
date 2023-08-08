import * as React from 'react';
import LogOut from '../images/cerrar-sesion.png';
import { ProductsData } from './ProductsData';
import DynamicDiv from './DynamicDiv';
import { useState } from 'react';
import AddProduct from './AddProduct';


function Breakfast() {
    const [clientName, setClientName] = useState("");
    const [selectedProduct, setSelectedProducts] = useState([]);
    const handleSelected = (selected) => {
        const product = { qty: 1, product: selected }
        // Función para agregar un nuevo producto al estado o aumentar qty si ya existe

        // Verificar si el producto ya existe en el estado
        const index = selectedProduct.findIndex(item => item.product.id === product.product.id);

        if (index !== -1) {
            // Si el producto ya existe, aumentar qty
            const newState = [...selectedProduct];
            newState[index].qty += 1;
            setSelectedProducts(newState);
        } else {
            // Si el producto no existe, agregarlo al estado
            setSelectedProducts([...selectedProduct, product]);
        }

    };

    console.log("handleSelectedbreakfast", selectedProduct)

    const handleSend = () => {
        console.log("enviando orden");
        const order = {
            userId: localStorage.getItem("workers"),
            client: clientName,
            products: selectedProduct,
            status: "pending",
            dateEntry: new Date()
        }
        console.log(order);
    }

    const handleChange = (event) => {
        setClientName(event.target.value)

    }

    return (
        <div className="h-screen flex flex-col">
            {/* ESTE ES EL HEADER Y NO AFECTA LOS DIV DE ABAJO - NO TOCAR LA LINEA <HEADER CLASSNAME=''> PARA NO ROMPER */}
            <header className="flex flex-row justify-between">
                <nav className='flex flex-row pt-0 mb-6 ml-8'>
                    <div className='flex justify-center items-center text-align p-4 mr-12 border-4 border-amber-400 w-60 h-20 rounded-br-3xl rounded-bl-3xl border-t-0 bg-amber-400 text-white text-2xl text-red-600 font-bold'>
                        <button >BREAKFAST</button>
                    </div>
                    <div className='flex justify-center items-center text-align p-4 mr-12 border-4 border-amber-400 w-60 h-20 rounded-br-3xl rounded-bl-3xl border-t-0 bg-white text-2xl text-red-600 font-bold'>
                        <button >LUNCH</button>
                    </div>
                    <div className='flex justify-center items-center text-align p-4 mr-12 border-4 border-amber-400 w-60 h-20 rounded-br-3xl rounded-bl-3xl border-t-0 bg-white text-2xl text-red-600 font-bold'>
                        <button >DONE</button>
                    </div>
                </nav>
                <nav className='flex flex-row pt-0 mb-6 items-end'>
                    <div className='flex justify-center items-center mr-12 w-20 h-20 rounded-br-full rounded-bl-full bg-white'>
                        <button>
                            <img src={LogOut} alt='LogOut' className='w-12 h-12' />
                        </button>
                    </div>
                </nav>
            </header>

            {/* ESTE ES EL LADO IZQUIERDO - NO TOCAR LA LINEA <DIV CLASSNAME='FLEX FLEX-COL FLEX-1'> <DIV CLASSNAME='FLEX FLEX-1' PARA NO ROMPER */}

            <div className="flex flex-1">
                <div className="flex-1 p-8">
                    {/* CONTENIDO DIVISION DE LADO IZQUIERDO */}
                    <div className='flex-1 items-center justify-center bg-white  rounded-3xl'>
                        <div className='relative flex flex-col p-8 justify-center items-center'>
                            <div className='relative justify-center items-center'>
                                <ProductsData handleSelected={handleSelected} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ESTE ES EL LADO IZQUIERDO - NO TOCAR LA LINEA <DIV CLASSNAME='bg-green-500 flex-1 p-4'> PARA NO ROMPER */}

                <div className="flex-1 p-8">
                    {/* CONTENIDO DIVISION DERECHA */}
                    <div className='flex-1 items-center justify-center bg-white  rounded-3xl'>
                        <div className='relative flex flex-col p-8'>
                            <div className='relative'>
                                <div className='relative flex flex-col p-8'>
                                    <div className='relative border-amber-400 border-2 rounded-xl'>
                                        <input className='w-full h-18 flex justify-center items-center z-10  border-2 border-amber-400 rounded-xl p-4 text-black' placeholder='Client Name' type='text' onChange={handleChange} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        {selectedProduct.map((item, index) => {
                            console.log(item)
                            //Aqui tenemos que crear cada uno de los productos de la orden
                        })}
                        <div className=''>
                            {selectedProduct && <DynamicDiv />}
                            <AddProduct />

                        </div>

                        <div className='grid grid-cols-2 gap-3  items-center justify-center'>
                            <div className='relative flex flex-col p-8 items-center justify-center'>
                                <div className='relative w-full'>
                                    <button
                                        className='w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] easy-in-out py-3 rounded-xl bg-orange-500 border-orange-400 border-2 text-white text-lg font-bold'
                                        type='submit'
                                        onClick={handleSend}>SEND</button>
                                </div>

                            </div>
                            <div className='relative flex flex-col p-8 items-center justify-center'>
                                <div className='relative w-full'>
                                    <div
                                        className='w-full min-h-50 items-center justify-center py-3 rounded-xl bg-amber-400 border-amber-400  border-2 text-white text-lg text-center font-bold'>
                                        Total $000
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Breakfast;