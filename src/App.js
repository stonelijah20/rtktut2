import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import Modal from './components/Modal'
import Posts from "./components/Posts";
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { calculateTotal } from "./features/cartSlice";


function App() {
   const {cartItems} = useSelector((store) => store.cart)
   const {isOpen} = useSelector((store) => store.modal)
   const dispatch = useDispatch()

   useEffect(() => {
     dispatch(calculateTotal())
   }, [cartItems])


  return <main>
    {isOpen && 
      <Modal/>
    }
    <Navbar/>
    <CartContainer/>
    <Posts/>
  </main>;
}
export default App;
