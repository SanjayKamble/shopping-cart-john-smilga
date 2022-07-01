import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartContainer from "./components/CartContainer";
import { Navbar } from "./components/Navbar";
import { calculateTotal } from './features/cart/cartSlice';
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems,dispatch ]);

  return <main>
    <Navbar />
    <CartContainer />
  </main>
}
export default App;
