import Navbar from "./Components/Navbar";
import CoffeeCard from "./Components/CoffeeCard";
import Footer from "./Components/Footer";

const App = () =>{
  return (
    <>
    <Navbar />
    <h2>Welcome to BrewSpace</h2>
    <h3>Coffee. Work. Conversations.</h3>
    <p>Your neighborhood space for great coffee
    and better conversations.</p>
    <CoffeeCard />
    <CoffeeCard />
    <CoffeeCard />
    <Footer />

    </>
  )
}


export default App;