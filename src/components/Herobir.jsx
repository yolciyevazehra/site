import React from 'react'
import { FaCarSide } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TfiMedall } from "react-icons/tfi";

function Herobir() {
    return (
        <section className="py-6 sm:py-12 dark:bg-gray-100 text-white">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-6xl font-bold text-black mb-[50px]">Why Shop With Us</h2>
                </div>
                <div className="grid ml-[250px] grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    <article className="flex flex-col bg-[#002c3e]">
                        <FaCarSide className='text-bold text-6xl text-center mt-[10px] ml-[120px]'/>
                        <div className="flex flex-col text-center flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Fast Delivery</h3>
                            <p className="flex-1 py-2 text-lg leading-snug">variations of passages of Lorem Ipsum available</p>
                        </div>
                    </article>
                    <article className="flex flex-col bg-[#002c3e]">
                        <FaRegCircleCheck className='text-bold text-5xl text-center mt-[10px] ml-[120px]'/>
                        <div className="flex flex-col text-center flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Free Shiping</h3>
                            <p className="flex-1 py-2 text-lg leading-snug">variations of passages of Lorem Ipsum available</p>
                        </div>
                    </article>
                    <article className="flex flex-col bg-[#002c3e]">
                        <TfiMedall className='text-bold text-6xl text-center mt-[10px] ml-[120px]'/>
                        <div className="flex flex-col text-center flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Best Quality</h3>
                            <p className="flex-1 py-2 text-lg  leading-snug">variations of passages of Lorem Ipsum available</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Herobir