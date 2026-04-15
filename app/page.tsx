import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-blue-50 text-black">
      <Image
        className="object-center object-fill w-full h-[85vh]"
        src="/bg.png"
        alt="Background"
        width={1920}
        height={1080}
        priority
      />
      <div className="bg-gray-200 opacity-75 absolute top-28 p-4 rounded-xl">
        <img src="/logo.svg" alt="logo-CAG" className="" />
      </div>
      <section className="absolute self-center flex flex-col items-center gap-6 text-center sm:items-start text-white sm:text-left mb-6">
        <h1 className="text-7xl font-semibold leading-15 tracking-tight text-center">
          Community Registration – CAG Members
        </h1>
        <article>
          <p className="max-w-md text-2xl leading-8">
            A simple and unofficial form to collect member information for organizational purposes.
          </p>
        </article>
      </section>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between bg-blue-50 sm:items-start">
        <p className="max-w-md text-lg leading-8 mb-6">
          This page is not officially affiliated with the CAG organization.
          It is created to help gather and organize member information in one place.
          Your information will be handled responsibly and used only for coordination purposes.
        </p>
        <section className="mb-6">
          <p>The fields that have a '*' symbol are required, the rest is optional but if you are able to fill them all that would be pretty helpful</p>
          <form action="submit" className="bg-blue-100 rounded-2xl w-full h-full py-2 px-4 flex justify-center">
            <div className="max-w-6xl md:max-w-3xl sm:max-w-xl">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' aria-label="name" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="birthday">Birthday</label>
                <input type="date" id='birthday' aria-label="birthday" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone">Phone</label>
                <input type="number" id='phone' aria-label="phone" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone">Address</label>
                <input type="location" id='phone' aria-label="phone" />
              </div><div className="flex flex-col gap-2">
                <label htmlFor="phone"></label>
                <input type="number" id='phone' aria-label="phone" />
              </div><div className="flex flex-col gap-2">
                <label htmlFor="phone"></label>
                <input type="number" id='phone' aria-label="phone" />
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
