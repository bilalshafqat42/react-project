// import logo from './logo.svg';
import './App.css';

function KFCCard({burgerFamly}){
  return(
    <div className="row">
    <div className="col">
          <div className="card" style={{width: '24rem'}}>
            <img src={burgerFamly.image} class="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{burgerFamly.title}</h5>
              <p className="card-text">{burgerFamly.description}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>
          </div>
  )
}

let burgerFamlies = [{
  id: 101,
  image: 'zingerBurger.jpg',
  title: 'Zinger Burger',
  description: 'best zinger burgers ever back in town'
},
{
  id: 102,
  image: 'pattyBurger.jpg',
  title: 'Patty Burger',
  description: 'best patty burgers ever back in town'
},
{
  id: 103,
  image: 'shamiBurger.jpg',
  title: 'Shami Burger',
  description: 'best shami burgers ever back in town'
},
]

function App() {
 
  return (
    burgerFamlies.map(burgerFamly => <KFCCard burgerFamly={burgerFamly}/>)
  );
}

export default App;
