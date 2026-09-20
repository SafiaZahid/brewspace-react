const CoffeeCard = ({title, desc, price, img}) => {
  
  return (
    <div className="card h-100 shadow-sm">
      <img className="card-img-top coffee-img object-fit-cover" src={img} alt={title}/>
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{desc}</p>
      <p className="card-text fw-bold">Rs. {price}</p> 
    </div>
  );
};

export default CoffeeCard;

