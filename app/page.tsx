import Navbar from "@/components/Navbar"
import About from "@/components/sections/About"
import Divisi from "@/components/sections/Divisi"
import Footer from "@/components/sections/Footer"
import Hero from "@/components/sections/Hero"
import HistoryLeaders from "@/components/sections/HistoryLeaders"
import Prestasi from "@/components/sections/Prestasi"
import VisiMisi from "@/components/sections/VisiMisi"

export default function Home() {
 return (
  <main className="min-h-screen">
   <Navbar />
   <Hero />
   <About />
   <VisiMisi />
   <Divisi />
   <Prestasi />
   <HistoryLeaders />
   <Footer />
  </main>
 )
}
