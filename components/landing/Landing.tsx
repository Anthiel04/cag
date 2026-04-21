import Image from 'next/image'
import { Button } from '../ui/button'

export const Landing = () => {
    return (
        <div className="relative flex justify-center w-full">

            <Image
                className="object-center object-cover w-full h-screen mb-12"
                src="/bg.png"
                alt="Background"
                width={1920}
                height={1080}
                priority
            />
            <div className="bg-gray-200 opacity-75 absolute top-28 p-4 mx-6 rounded-xl">
                <img src="/logo.svg" alt="logo-CAG" className="" />
            </div>
            <section className="absolute self-center bottom-32 flex flex-col mx-12 items-center gap-6 text-center sm:items-start text-white sm:text-left px-2">
                <h1 className="text-2xl leading-tight tracking-tight lg:text-7xl sm:text-3xl md:text-6xl font-semibold  text-center">
                    Community Registration – CAG Members
                </h1>
                <article>
                    <p className="text-md max-w-7xl lg:text-2xl sm:text-xl md:text-2xl leading-tight tracking-tight">
                        A simple and unofficial form to collect member information for organizational purposes.
                    </p>
                </article>
                <div className='flex gap-4 m-auto'>
                    <a href="#cagform" className='m-auto flex-1'>
                        <Button className='md:w-60 md:h-20 text-2xl shadow-sm hover:scale-105 transition-all duration-75'>Register</Button>
                    </a>
                    <a target="_blank" href="https://en.godfootsteps.org/" className='m-auto flex-1'>
                        <Button className='md:w-60 md:h-20 bg-gray-200 text-black text-2xl shadow-sm hover:scale-105 hover:bg-gray-100 transition-all duration-75'>CAG</Button>
                    </a>
                </div>
            </section>
        </div>

    )
}
