import { Footer, Navbar } from '../components';
import { About, Challenge, Faq, Hero, Process, Solutions, UseCases, WhyTaiForge } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden" id="top">
    <Navbar />
    <main>
      <Hero />
      <div className="relative">
        <Challenge />
        <div className="gradient-03 z-0" />
        <Solutions />
      </div>
      <UseCases />
      <div className="relative">
        <Process />
        <div className="gradient-04 z-0" />
        <WhyTaiForge />
      </div>
      <About />
      <div className="relative">
        <div className="gradient-04 z-0" />
        <Faq />
      </div>
    </main>
    <Footer />
  </div>
);

export default Page;
