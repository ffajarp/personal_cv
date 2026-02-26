import About from "@/components/About"
import Navbar from "@/components/Navbar"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main>
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </main>
  )
}