import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SliderComponent from "@/components/home/SliderComponent";
import Banner from "@/components/home/Banner";
import ProductDisplay from "@/components/home/ProductDisplay";
import { ImageCollection } from "@/constants/images";
import ListofProperty from "@/components/ListofProperty/ListofProperty";
export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <main
          style={{
            marginTop: 100,
            backgroundColor: "rgb(41, 36, 36)",
            padding: 10,
          }}>
          <Banner />
          <SliderComponent />
          <ProductDisplay />

          <ListofProperty />
        </main>
        <Footer />
      </div>
    </>
  );
}
