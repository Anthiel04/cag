import Image from 'next/image'
import { Button } from '../ui/button'

export const Landing = () => {
    return (
        <>
            <Image
                className="object-center object-fill w-full h-screen mb-12"
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
                <h1 className="text-7xl font-semibold leading-15 tracking-tight text-center">
                    Community Registration – CAG Members
                </h1>
                <article>
                    <p className="max-w-7xl text-2xl leading-8">
                        A simple and unofficial form to collect member information for organizational purposes.
                    </p>
                </article>
                <a href="#form" className='m-auto'>
                    <Button className='w-60 h-20 text-2xl shadow-sm hover:scale-105 transition-all duration-75'>Register</Button>
                </a>
            </section>
        </>
    )
}
