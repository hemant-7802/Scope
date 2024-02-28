import React from 'react'
import SignUp from '../signup/SignUp'
import img from "../../assets/scope_logo.png"
import { Image } from '@nextui-org/react'
export default function Registeration() {
    return (
        <div className='p-6 my-7'>
            <h1 className='text-center text-5xl mb-16'>Register With Us</h1>
            <div className='flex justify-center gap-6 p-4'>
                <div className='hidden sm:flex'>
                    <Image src={img} width={600} />
                </div>
                <div className='w-[500px] min-w-[300px]'>
                    <SignUp />
                </div>
            </div>
        </div>
    )
}