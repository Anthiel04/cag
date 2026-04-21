import { CAGNumbers } from "@/components/CAGNumbers/CAGNumbers";
import { Description } from "@/components/description/Description";
import { UserForm } from "@/components/form/UserForm";
import { Landing } from "@/components/landing/Landing";
import { Representants } from "@/components/representants/Representants";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-blue-50 text-black">
      <Landing />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between bg-blue-50 sm:items-start mb-12 px-4">
            <Representants/>
            <section className="">
            <CAGNumbers />
            </section>
            <Description />
        <section className="w-full mb-12">
          <UserForm />
        </section>
      </main>
      <footer className="bg-blue-100 py-8 w-full flex justify-center shadow-3xl ring-4 ring-blue-900">
        CAG Community Register 2026 (Non Official)
      </footer>
    </div>
  );
}
