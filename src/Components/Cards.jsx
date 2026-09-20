import CoffeeCard from "./CoffeeCard";

function Cards() {
  let coffees = [
    {
      id:1,
      title: "Mocha",
      desc: "Chocolate, espresso, and steamed milk",
      price: 650,
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRo32WU4IAwoU-pPyjrPc-u2A7JWMRoNQnE5HSNjQMjg&s=10'
    },
    {
      id:2,
      title: "Latte",
      desc: "Smooth espresso with plenty of steamed milk and a thin layer of foam",
      price: 600,
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqYj9XWPmoOMGHCnVr9O8_-4rZkyIID3ONj-gdKuQDzQ&s=10'
    },
    {
      id:3,
      title: "Espresso",
      desc: "A concentrated shot of pure, rich coffee bold in flavor",
      price: 450,
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_tBlmG-pDDzFL8v5f8XUKxRhVE6p_28pibRQ0iCRpg&s=10'
    },
    {
 id:4,
      title: "Cappuccino",
      desc: "Equal parts espresso, steamed milk, and thick milk foam",
      price: 600,
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFr_PV04CjX5LDfQM50BUYphSbuqshPIXbfWSy7Zzq2g&s'
    },
    {
 id:5,
      title: "Americano",
      desc: "Espresso shots diluted with hot water for a smooth, rich brew",
      price: 500,
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmkkXsrVqRu40WBZ62zmAwcmm_LGw8fjF5EKbOlhG3JQ&s=10'
    },
    {
       id:6,
      title: "Macchiato",
      desc: "A bold shot of espresso marked with a dollop of frothy milk",
      price: 550,
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbfCHErUJRHMfwk2tagDgp9WNBlIeyc_id4QLvPoqgHg&s=10'
    },
    {
      id: 7,
      title: "Latte Macchiato",
      desc: "A beautifully layered drink of steamed milk stained with a rich shot of espresso and topped with foam",
      price: 580,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fN_Vif8TIO-6Xph86wLbKU0B48nKnz05NAHV6-2H47ALFX-dudcSHaSc&s=10'
    },
    {
      id: 8,
      title: "Flat White",
      desc: "Rich espresso combined with velvety microfoam poured evenly for a smooth texture",
      price: 620,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4cmKUcm92giKiB8hsh2ZCeCX2PibEDTQNw0FT_MqpNw&s=10'
    },
    {
      id: 9,
      title: "Affogato",
      desc: "A scoop of vanilla ice cream drowned in a hot, rich shot of espresso",
      price: 700,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1s7h6WRSh6CARAlWuOKTvp6u2VM_nrlGpMSS58aBqUg&s=10'
    
    }
  ];

  return (
    <div className="container">
      <div className="row g-4">
        {coffees.map((coffee) => (
            <div className="col-md-4" key={coffee.id}>
            <CoffeeCard
            title={coffee.title}
            desc={coffee.desc}
            price={coffee.price}
            img= {coffee.img}
            />
          </div>
          )
         
          
        )}
      </div>
    </div>
  );
}

export default Cards;
