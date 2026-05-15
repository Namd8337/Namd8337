const ProductCard = ({ product, onAddToCart, onViewDetail }) => {
  return (
    <div className="rounded-3xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 h-40 rounded-3xl bg-gradient-to-br from-slate-200 to-slate-300"></div>
      <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
      <p className="mt-2 text-sm text-slate-600">{product.desc}</p>
      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="text-xl font-semibold text-sky-600">{product.price}</p>
        <div className="flex gap-2">
          <button
            onClick={() => onViewDetail(product)}
            className="rounded-full bg-slate-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-700"
          >
            Chi tiết
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="rounded-full bg-sky-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-sky-700"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
