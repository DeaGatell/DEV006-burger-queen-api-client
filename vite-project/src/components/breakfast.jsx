/* eslint-disable no-unused-vars */
import * as React from 'react';
import Americano from '../images/americano.png';
import Latte from '../images/latte.png';
import HamCheese from '../images/ham_cheese.png';
import FreshJuice from '../images/fresh-juice.png';
import AddGreen from '../images/anadir-verde.png';
import LogOut from '../images/cerrar-sesion.png';

function Breakfast() {

    return (
        <div>
            <header className='flex flex-row justify-between'>
                <nav className='flex flex-row pt-0 mb-6 ml-8'>
                    {/* NOS QUEDAMOS AQUI */}
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


            <div className='h-full w-1/2 grid grid-cols-2 gap-3 fixed top-100 right-100 items-center justify-center bg-white ml-8 rounded-4xl'>
                <div className='relative flex flex-col p-8 ml-4'>
                    <div className='relative'>
                        <img src={Americano} alt='Americano' className='rounded-xl' />
                        <div className='absolute top-[-10px] right-[-12px] w-18 h-18 flex justify-center items-center z-10'>
                            <img src={AddGreen} alt='Add Icon Green' className='w-18 h-18 border-4 rounded-full cursor-pointer' />
                        </div>
                    </div>

                    <div className='relative'>
                        <p className='ml-2 font-medium text-base text-center'>Americano</p>
                    </div>
                </div>

                <div className='relative flex flex-col p-8 ml-4'>
                    <div className='relative'>
                        <img src={Latte} alt='Latte' className='rounded-xl' />
                        <div className='absolute top-[-10px] right-[-12px] w-18 h-18 flex justify-center items-center z-10'>
                            <img src={AddGreen} alt='Add Icon Green' className='w-18 h-18 border-4 rounded-full cursor-pointer' />
                        </div>
                    </div>

                    <div className='relative'>
                        <p className='ml-2 font-medium text-base text-center'>Latte</p>
                    </div>
                </div>

                <div className='relative flex flex-col p-8 ml-4'>
                    <div className='relative'>
                        <img src={HamCheese} alt='HamChesse' className='rounded-xl' />
                        <div className='absolute top-[-10px] right-[-12px] w-18 h-18 flex justify-center items-center z-10'>
                            <img src={AddGreen} alt='Add Icon Green' className='w-18 h-18 border-4 rounded-full cursor-pointer' />
                        </div>
                    </div>

                    <div className='relative'>
                        <p className='ml-2 font-medium text-base text-center'>Ham & Cheese Sandwich</p>
                    </div>
                </div>

                <div className='relative flex flex-col p-8 ml-4'>
                    <div className='relative'>
                        <img src={FreshJuice} alt='FreshJuice' className='rounded-xl' />
                        <div className='absolute top-[-10px] right-[-12px] w-18 h-18 flex justify-center items-center z-10'>
                            <img src={AddGreen} alt='Add Icon Green' className='w-18 h-18 border-4 rounded-full cursor-pointer' />
                        </div>
                    </div>

                    <div className='relative'>
                        <p className='ml-2 font-medium text-base text-center'>Fresh Juice</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Breakfast;