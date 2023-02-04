export default function CartIcon(props){
    return (
      <>
      <div className="cart-icon">
      <i className="fa-solid fa-cart-shopping"></i></div>
      <div>Cart= {props.cartItems}
      </div>
      </>
    );
  }