function CheckoutItem({ product }) {
  return (
    <div className="flex justify-between items-center shadow-sm p-3">
      <div className="flex items-center gap-5">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-20 h-20 bg-[#EBEBEA] rounded-md p-1"
        />
        <div className="flex flex-col">
          <p>{product.name}</p>
          <div className="flex gap-1">
            <p>${product.newPrice}</p>
            <p className="line-through text-[#999]">${product.price}</p>
          </div>
        </div>
      </div>
      <p className="text-xl font-semibold">x{product.quantity}</p>
    </div>
  );
}

export default CheckoutItem;
