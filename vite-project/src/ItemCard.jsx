function ItemCard() {
  const description =
    "A classic, high-intensity cardio tool that improves agility, burns calories, and builds lower-body strength.";

  const amount = "KES 2,000";

  return (
    <div className="item-card">
      <div className="item-image">
        <img
          src="https://m.media-amazon.com/images/I/71wm42EtoNL._AC_UL320_.jpg"
          alt="Jump Rope"
        />
      </div>

      <p className="item-description">
        {description}
      </p>

      <h2 className="item-price">{amount}</h2>

      <button className="cart-btn">
        Add to Cart
      </button>
    </div>
  );
}

export default ItemCard;