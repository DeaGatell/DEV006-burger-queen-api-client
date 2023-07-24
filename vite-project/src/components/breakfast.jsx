/* eslint-disable no-unused-vars */
import * as React from 'react';
import Americano from '../images/americano.png';
import Latte from '../images/latte.png';
import HamCheese from '../images/ham_cheese.png';
import FreshJuice from '../images/fresh juice.png';
import AddGreen from '../images/anadir verde.png';

function Breakfast() {

    return (
        <div className='lg:flex h-full w-1/2 items-center justify-center bg-white'>
            <div>
                <img src={Americano} alt='Americano' className='rounded-xl'/>
                <img src={AddGreen} alt='Add Icon Green' className='rounded-xl'/>
            </div>
            <p>Americano</p>
            <div>
                <img src={Latte} alt='Latte' className='rounded-xl'/>
                <img src={AddGreen} alt='Add Icon Green' className='rounded-xl'/>
            </div>
            <p>Latte</p>
            <div>
                <img src={HamCheese} alt='Ham Cheese Sandwich' className='rounded-xl'/>
                <img src={AddGreen} alt='Add Icon Green' className='rounded-xl'/>
            </div>
            <p>Ham & Cheese Sandwich</p>
            <div>
                <img src={FreshJuice} alt='Fresh Juice' className='rounded-xl'/>
                <img src={AddGreen} alt='Add Icon Green' className='rounded-xl'/>
            </div>
            <p>Fresh Juice</p>
        </div>
    )
}

export default Breakfast;