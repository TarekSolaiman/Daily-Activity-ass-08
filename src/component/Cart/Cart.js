import './Cart.css'

const Cart = ({carts,addWorkTime}) => {
    return (
        <div className='cart-container'>
            {
                carts.map(cart=><MakeCart cart={cart} key={cart.id} addWorkTime={addWorkTime}></MakeCart>)
            }
        </div>
    );
};

const MakeCart=(props)=>{
    const {cart,addWorkTime}=props
    const {name,img,schedule,time,activitys}=cart
    return(
        <div className='cart'>
            <img src={img} alt="ok" />
            <h3>{name}</h3>
            <p>{activitys}</p>
            <p>Which time : {schedule}</p>
            <p>Time : {time}</p>
            <button onClick={()=>addWorkTime(time)}>Add Now</button>
        </div>
    )
}

export default Cart;