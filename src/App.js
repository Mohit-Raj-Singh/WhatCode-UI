import { CartPayment } from './Components/CartPayment';
import { CitySelection } from './Components/CitySelection';
import { EmptyCart } from './Components/EmptyCart';
import { Login } from './Components/Login';
import { ShoppingBag } from './Components/ShoppingBag';
import { AllRoutes } from './Pages/AllRoutes';

function App() {
  return (
    <div className="App">
      {/* <Login />
      <CitySelection />
      <EmptyCart />
      <ShoppingBag />
      <CartPayment /> */}
      <AllRoutes />
    </div>
  );
}

export default App;
