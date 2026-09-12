import Navbar from "./Components/Navbar";
import CoffeeCard from "./Components/CoffeeCard";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <section className="container text-center py-5">
        <h2 className="fw-bold text-body-emphasis">Welcome to BrewSpace</h2>
        <h3>Coffee. Work. Conversations.</h3>
        <p className="text-body-secondary">
          Your neighborhood space for great coffee and better conversations.
        </p>
        <button type="button" className="btn btn-outline-info  px-4 my-4 me-sm-3 fw-bold">Explore Menu</button>
      </section>

      <section>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <CoffeeCard />
            </div>

            <div className="col-md-4">
              <CoffeeCard />
            </div>
            <div className="col-md-4">
              <CoffeeCard />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default App;
