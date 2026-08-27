import About from "@/components/About"
import Navbar from "@/components/Navbar"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Portfolio from "@/components/Portfolio"
import Education from "@/components/Education"
import Certificates from "@/components/Certificates"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main>
      <Navbar />
      <About />
      <Experience />
      <Skills />
      {/* <Portfolio /> */}
      <Education />
      <Certificates />
      <Contact />
    </main>
  )
}