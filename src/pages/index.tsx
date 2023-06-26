import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import OurVideos from "@/components/ourVideos";
import Payment from "@/components/payment";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <OurVideos />
      <Payment />
      <Footer />
    </>
  );
};

export default LandingPage;
