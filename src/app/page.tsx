import Header from "../app/components/header";
import Classic from "./components/classic/classic";
import Sweet from "./components/sweet";
import Discount from "./components/discount";
import Customer from "./components/customer";
import Footer from "./components/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Sweet />
      <Classic />
      <Discount />
      <Customer />
      <Footer />
    </div>
  )
}

export default Home