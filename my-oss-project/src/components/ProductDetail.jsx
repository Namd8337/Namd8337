const ProductDetail = ({ product, onClose, onAddToCart }) => {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-slate-900">Chi tiết sản phẩm</h2>
        <button
          onClick={onClose}
          className="rounded-full bg-slate-200 p-2 text-slate-600 hover:bg-slate-300"
        >
          ✕
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="h-80 rounded-3xl bg-gradient-to-br from-slate-200 to-slate-300"></div>
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold text-slate-900">{product.name}</h3>
          <p className="text-xl font-semibold text-sky-600">{product.price}</p>
          <p className="text-slate-600 leading-6">{product.details}</p>
          <div className="flex gap-3">
            <button
              onClick={() => onAddToCart(product)}
              className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Thêm vào giỏ hàng
            </button>
            <button className="rounded-full bg-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;