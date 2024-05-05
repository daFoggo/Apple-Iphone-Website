import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import * as Sentry from "@sentry/react";


const App = () => {

  return (
    <main className="bg-black">
      <NavBar></NavBar>
      <Hero></Hero>
      <Highlights></Highlights>
      <Model></Model>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <Footer></Footer>
    </main>
  )
}

export default Sentry.withProfiler(App);