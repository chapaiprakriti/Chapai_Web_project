import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

const fallbackImage = "https://via.placeholder.com/300x200?text=No+Image";

export default function SellerProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full text-white border border-gray-700">
      {/* Product Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={product.image_url || fallbackImage}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
        />
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-1 truncate">{product.name}</h2>
        <p className="text-gray-300 text-sm mb-2 line-clamp-2">{product.description}</p>
        <p className="text-orange-400 text-lg font-semibold mb-4">${product.price}</p>

        {/* Action Buttons */}
        <div className="mt-auto flex justify-between items-center gap-2">
          <button
            onClick={() => onEdit && onEdit(product)}
            className="flex items-center gap-1 px-4 py-2 text-sm bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition"
          >
            <Pencil size={16} />
            Edit
          </button>
          <button
            onClick={() => onDelete && onDelete(product.id)}
            className="flex items-center gap-1 px-4 py-2 text-sm bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition"
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
