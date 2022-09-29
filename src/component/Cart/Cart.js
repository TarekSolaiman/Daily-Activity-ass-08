import './Cart.css'

const Cart = ({carts}) => {
    console.log(carts);
    return (
        <div className='cart-container'>
            {
                carts.map(cart=><MakeCart cart={cart} key={cart.id}></MakeCart>)
            }
        </div>
    );
};

const MakeCart=(props)=>{
    const {name,img,schedule,time,activitys}=props.cart
    console.log(img);
    return(
        <div className='cart'>
            <img src={img} alt="ok" />
            <h3>{name}</h3>
            <p>{activitys}</p>
            <p>Which time : {schedule}</p>
            <p>Time : {time}</p>
            <button>Add Now</button>
        </div>
    )
}

export default Cart;