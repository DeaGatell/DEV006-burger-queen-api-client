/* eslint-disable no-unused-vars */
import * as React from 'react';
import Americano from '../images/americano.png';
import Latte from '../images/latte.png';
import HamCheese from '../images/ham_cheese.png';
import FreshJuice from '../images/fresh-juice.png';
import AddGreen from '../images/anadir-verde.png';
import LogOut from '../images/cerrar-sesion.png';
import DynamicDiv from './contadores';

function Breakfast() {

    return (

        <div className="h-screen flex flex-col">

            {/* ESTE ES EL HEADER Y NO AFECTA LOS DIV DE ABAJO - NO TOCAR LA LINEA <HEADER CLASSNAME=''> PARA NO ROMPER */}
            <header className="flex flex-row justify-between">
                <nav className='flex flex-row pt-0 mb-6 ml-8'>
                    <div className='flex justify-center items-center text-align p-4 mr-12 border-4 border-red-600 w-60 h-20 rounded-br-3xl rounded-bl-3xl border-t-0 bg-white text-2xl text-red-600 font-bold'>
                        <button >BREAKFAST</button>
                    </div>
                    <div className='flex justify-center items-center text-align p-4 mr-12 border-4 border-red-600 w-60 h-20 rounded-br-3xl rounded-bl-3xl border-t-0 bg-white text-2xl text-red-600 font-bold'>
                        <button >LUNCH</button>
                    </div>
                    <div className='flex justify-center items-center text-align p-4 mr-12 border-4 border-red-600 w-60 h-20 rounded-br-3xl rounded-bl-3xl border-t-0 bg-white text-2xl text-red-600 font-bold'>
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
                    <div className='flex-1 grid grid-cols-2 gap-3  items-center justify-center bg-white  rounded-3xl'>

                        <div className='relative flex flex-col p-8'>

                            <div className='relative'>
                                <img src={Americano} alt='Americano' className='rounded-xl' />
                                <button className='absolute top-[-10px] right-[-12px] w-18 h-18 flex justify-center items-center z-10'>
                                    <img src={AddGreen} alt='Add Icon Green' className='w-18 h-18 border-4 rounded-full cursor-pointer' />
                                </button>
                            </div>

                            <div className='relative'>
                                <p className='font-medium text-base text-center'>{ }</p>
                            </div>
                        </div>



                        <div className='relative flex flex-col p-8'>
                            <div className='relative'>
                                <img src={Latte} alt='Latte' className='rounded-xl' />
                                <div className='absolute top-[-10px] right-[-12px] w-18 h-18 flex justify-center items-center z-10'>
                                    <img src={AddGreen} alt='Add Icon Green' className='w-18 h-18 border-4 rounded-full cursor-pointer' />
                                </div>
                            </div>

                            <div className='relative'>
                                <p className='font-medium text-base text-center'>Latte</p>
                            </div>
                        </div>

                        <div className='relative flex flex-col p-8'>
                            <div className='relative'>
                                <img src={HamCheese} alt='HamChesse' className='rounded-xl' />
                                <div className='absolute top-[-10px] right-[-12px] w-18 h-18 flex justify-center items-center z-10'>
                                    <img src={AddGreen} alt='Add Icon Green' className='w-18 h-18 border-4 rounded-full cursor-pointer' />
                                </div>
                            </div>

                            <div className='relative'>
                                <p className='font-medium text-base text-center'>Ham & Cheese Sandwich</p>
                            </div>
                        </div>

                        <div className='relative flex flex-col p-8'>
                            <div className='relative'>
                                <img src={FreshJuice} alt='FreshJuice' className='rounded-xl' />
                                <div className='absolute top-[-10px] right-[-12px] w-18 h-18 flex justify-center items-center z-10'>
                                    <img src={AddGreen} alt='Add Icon Green' className='w-18 h-18 border-4 rounded-full cursor-pointer' />
                                </div>
                            </div>

                            <div className='relative'>
                                <p className='font-medium text-base text-center'>Fresh Juice</p>
                            </div>
                        </div>


                    </div>

                </div>

                {/* ESTE ES EL LADO IZQUIERDO - NO TOCAR LA LINEA <DIV CLASSNAME='bg-green-500 flex-1 p-4'> PARA NO ROMPER */}

                <div className="flex-1 p-8">
                    {/* CONTENIDO DIVISION DERECHA */}
                    <div className='flex-1  items-center justify-center bg-white  rounded-3xl'>
                        <div className='relative flex flex-col p-8'>
                            <div className='relative'>

                                <input className='w-full h-18 flex justify-center items-center z-10' placeholder='Client Name' type='text' />

                            </div>




                        </div>
                        <div className=''>
                            Contador Dinámico con React
                            <DynamicDiv />
                        </div>
                        <div className='grid grid-cols-2 gap-3  items-center justify-center'>
                            <div className='relative flex flex-col p-8 items-center justify-center'>
                                <div className='relative w-full'>
                                    <button
                                        className='w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] easy-in-out py-3 rounded-xl bg-orange-500 border-orange-400 border-2 text-white text-lg font-bold'
                                        type='submit'>SEND</button>
                                </div>

                            </div>
                            <div className='relative flex flex-col p-8 items-center justify-center'>
                                <div className='relative w-full'>
                                    <div
                                        className='w-full min-h-50 items-center justify-center py-3 rounded-xl bg-amber-400 border-amber-400  border-2 text-white text-lg text-center font-bold'>
                                        $000
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