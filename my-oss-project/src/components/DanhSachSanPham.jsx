import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

const DanhSachSanPham = ({ products, onAddToCart, onViewDetail, onOpenCart, cart }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">Danh sách sản phẩm</h3>
          <p className="text-gray-500 text-sm mt-1">Tổng {products.length} sản phẩm có sẵn</p>
        </div>
        <button
          onClick={onOpenCart}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition flex items-center gap-2"
        >
          <ShoppingCart size={18} />
          Giỏ hàng ({cart.length})
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
              <ShoppingCart size={64} className="text-blue-600 opacity-50" />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>
              <p className="text-sm text-gray-600 mt-2">{product.desc}</p>
              <p className="text-2xl font-bold text-blue-600 mt-3">{product.price}</p>
              
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => onViewDetail(product)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition text-sm font-medium"
                >
                  Xem chi tiết
                </button>
                <button
                  onClick={() => onAddToCart(product)}
                  className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-sm font-medium flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={16} />
                  Thêm
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DanhSachSanPham;
