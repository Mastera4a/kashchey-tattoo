import About from "@/components/About";
import Booking from "@/components/Booking";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Process />
      <Booking />
    </main>
  );
}