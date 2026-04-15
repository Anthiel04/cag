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
            <div className="bg-gray-200 opacity-75 absolute top-28 p-4 rounded-xl">
                <img src="/logo.svg" alt="logo-CAG" className="" />
            </div>
            <section className="absolute self-center bottom-32 flex flex-col items-center gap-6 text-center sm:items-start text-white sm:text-left">
                <h1 className="lg:text-7xl sm:text-3xl md:text-5xl font-semibold leading-15 tracking-tight text-center">
                    Community Registration – CAG Members
                </h1>
                <article>
                    <p className="max-w-7xl lg:text-2xl sm:text-sm md:text-xl leading-8">
                        A simple and unofficial form to collect member information for organizational purposes.
                    </p>
                </article>
                <div className='flex gap-4 m-auto'>
                    <a href="#form" className='m-auto'>
                        <Button className='md:w-60 md:h-20 sm:w-10 sm:h-8 text-2xl shadow-sm hover:scale-105 transition-all duration-75'>Register</Button>
                    </a>
                    <a href="https://en.godfootsteps.org/" className='m-auto'>
                        <Button className='md:w-60 md:h-20 bg-gray-200 text-black sm:w-10 sm:h-8 text-2xl shadow-sm hover:scale-105 hover:bg-gray-100 transition-all duration-75'>Official Website</Button>
                    </a>
                </div>
            </section>
        </div>

    )
}
