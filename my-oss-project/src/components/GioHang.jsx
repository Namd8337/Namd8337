import React from 'react';
import { X, Trash2 } from 'lucide-react';

const GioHang = ({ items, onClose, onRemove }) => {
  const total = items.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/\D/g, ''));
    return sum + price;
  }, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white">
          <h2 className="text-2xl font-bold text-gray-800">Giỏ hàng của bạn</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Giỏ hàng của bạn còn trống</p>
              <button
                onClick={onClose}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Tiếp tục mua sắm
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <p className="text-blue-600 font-semibold">{item.price}</p>
                  </div>
                  <button
                    onClick={() => onRemove(index)}
                    className="text-red-600 hover:text-red-800 transition p-2"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}

              <div className="border-t pt-4 mt-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-600">Tổng tiền:</p>
                  <p className="text-3xl font-bold text-blue-600">{total.toLocaleString('vi-VN')}đ</p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={onClose}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition font-semibold"
                  >
                    Tiếp tục mua
                  </button>
                  <button className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold">
                    Thanh toán
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GioHang;
