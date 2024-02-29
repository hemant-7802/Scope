import React from 'react'
import SignUp from '../signup/SignUp'
import img from "../../assets/register.jpg"
import { Image } from '@nextui-org/react'
export default function Registeration() {
    return (
        <div className='p-6 my-7' id='contactus'>
            <h1 className='text-center text-4xl sm:text-5xl mb-14'>Register With Us</h1>
            <div className='flex justify-center gap-8 p-4 h-[650px]'>
                <div className='hidden sm:flex'>
                    <Image src={img} alt='Registeration' className='h-full object-cover brightness-[75%]'/>
                </div>
                <div className='w-[400px] min-w-[300px]'>
                    <SignUp />
                </div>
            </div>
        </div>
    )
}