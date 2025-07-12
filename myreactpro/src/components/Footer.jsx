import React from 'react'

export default function Footer() {
    return (
        <div className='bg-neutral-950 h-80 w-screen p-2'>
            <div className="md:flex justify-between md:space-x-2 m-2 text-white">
                <div className='border border-gray-500 md:w-[25%] md:h-32 mt-2 text-sm md:text-base '>The Shope for Brands and Quality</div>
                <div className='border border-gray-500 md:w-[25%]  mt-2 text-sm md:text-base '>Noida 
                    <div>
                        <p className='align-justify'>Salarpur, Sector-81 Noida Near Sector-81 Metro Station opposite side of Piller No. 173</p>
                       
                    </div>
                    <div>
                        
                        <a href="www.vishnugrocery.com">www.vishnugrocery.com</a>
                    </div>
                </div>
                <div className='border border-gray-500 md:w-[25%] md:h-32 mt-2 text-sm md:text-base '>PRODUCTS</div>
                <div className='border border-gray-500 md:w-[25%] md:h-32 mt-2 text-sm md:text-base '>CONTACT</div>
            </div>
        </div>
    )
}
