import { Footer, Navbar } from '../components';
import { About, Challenge, Contact, Faq, Hero, Process, Solutions, SupportPlans, UseCases, WhyTaiForge } from '../sections';

const firstParam = (value) => (Array.isArray(value) ? value[0] : value);

const Page = ({ searchParams }) => (
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
      <div className="relative">
        <div className="gradient-03 z-0" />
        <SupportPlans />
        <Contact initialIntent={firstParam(searchParams?.intent) || ''} />
      </div>
    </main>
    <Footer />
  </div>
);

export default Page;
