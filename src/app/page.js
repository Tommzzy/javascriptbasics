import Landing from "@/components/Landing";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full text-midnight min-h-screen bg-black">
      <Nav />
      <Landing />
    </section>
  );
}