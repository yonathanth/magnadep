import Link from "next/link";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Partners from "./components/partners";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Team from "./components/Team";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <Link href="/partners">
        <Partners />
      </Link>
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
