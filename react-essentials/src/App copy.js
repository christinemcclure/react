
import './App.css';
import restaurant from "./restaurant.jpg";



function Header(props) {
  // console.log(props) ;
  return (<header>
    <h1>{props.name}'s Kitchen</h1>
  </header>
  );
}

function Main(props){
  return (
    <section>
      <p>We serve {props.adjective} food:</p>
      <img src={restaurant} height={200} alt="napkin and silverware at a restaurant table" />
      {/* <img src="https://github.com/christinemcclure.png" height={200}/> */}
      <ul>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}



function Footer(props) { 
  return (
    <footer>
      <p>Copyright: { props.year}</p>
    </footer>
  );
}

const dishes = [
  "Gnocchi",
  "Skordalia",
  "Ribs",
  "Brownies",
  "Pie all day long!"
];

const DishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));


function App() {
  return (
    <div className="App">
      <Header name="Xtine"/>
      <Main adjective="amazing" dishes={DishObjects} />
      <Footer year={ new Date().getFullYear()}/>
    </div>
  );
}

export default App;
