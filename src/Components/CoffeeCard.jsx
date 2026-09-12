const CoffeeCard = () => {
  return (
    <div className="card h-100 shadow-sm">
      <img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXgscfmAgVZdy6_OveIpriTuCUZfCEEs0CaKy5Ixl4Q&s=10' alt="" className="card-img-top coffee-img object-fit-cover" />
      <h2 className="card-title">Cappuccino</h2>
      <p className="card-text">Creamy espresso with steamed milk</p>
      <p className="card-text fw-bold">Rs. 550</p> 
    </div>
  );
};

export default CoffeeCard;

