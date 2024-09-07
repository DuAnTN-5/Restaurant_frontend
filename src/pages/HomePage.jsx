import Header from "../component/Header";
import Content from "../component/Content";
import Footer from "../component/Footer";
import HomeSection from "../component/HomeSection";
import BookingForm from "../component/BookingForm";

function HomePage() {
  return (
    <>
      <Header />
      <HomeSection />
      <BookingForm />
      <Content />
      <Footer />
    </>
  );
}

export default HomePage;
