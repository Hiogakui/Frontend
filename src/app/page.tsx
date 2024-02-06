"use client";
import Navbar from "../assets/components/indexComponents/navbarIndex.module"
import Footer from "../assets/components/indexComponents/footer.module"
import WelcomeCard from "../assets/components/indexComponents/welcomeCard.module"
import Cards from "../assets/components/indexComponents/cards.module"
import MiniCard from "@/assets/components/indexComponents/miniCard.module";
import '../assets/css/globals.css';

export default function Page() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <WelcomeCard/>
        <Cards/>
        <MiniCard/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}


