import Header from '@/components/site/header'
import Hero from '@/components/site/hero'
import Mission from '@/components/site/mission'
import Technical from '@/components/site/technical'
import Roadmap from '@/components/site/roadmap'
import Risk from '@/components/site/risk'
import Investment from '@/components/site/investment'
import Contact from '@/components/site/contact'
import Footer from '@/components/site/footer'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Mission />
      <Technical />
      <Roadmap />
      <Risk />
      <Investment />
      <Contact />
      <Footer />
    </main>
  )
}
