import { Description } from "@/components/description/Description";
import { UserForm } from "@/components/form/UserForm";
import { Landing } from "@/components/landing/Landing";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-blue-50 text-black">
      <Landing/>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between bg-blue-50 sm:items-start mb-12">
        <Description />
        <section className="mb-12">
          <p className="mb-12">The fields that have a '*' symbol are required, the rest is optional but if you are able to fill them all that would be pretty helpful</p>
          <UserForm />

        </section>
      </main>
      <footer className="bg-blue-100 py-8 w-full flex justify-center">
        CAG unnoficial 2026
      </footer>
    </div>
  );
}
