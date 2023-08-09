import { CartPayment } from './Components/CartPayment';
import { CitySelection } from './Components/CitySelection';
import { EmptyCart } from './Components/EmptyCart';
import { Login } from './Components/Login';
import { ShoppingBag } from './Components/ShoppingBag';

function App() {
  return (
    <div className="App">
      <Login />
      <CitySelection />
      <EmptyCart />
      <ShoppingBag />
      <CartPayment />
    </div>
  );
}

export default App;
