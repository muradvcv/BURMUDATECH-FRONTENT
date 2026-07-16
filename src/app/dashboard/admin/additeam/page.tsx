'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Formbg from '@/app/assets/formbg.png';
import { BiImageAdd } from 'react-icons/bi';
import { addProduct } from '@/lib/actions/product';
import { authClient } from '@/lib/auth-client';

interface ProductFormData {
  title: string;
  price: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
}

const AddItem = () => {
  const { data: session } = authClient.useSession();
  const [formData, setFormData] = useState<ProductFormData>({
    title: '',
    price: '',
    category: '',
    shortDescription: '',
    fullDescription: '',
    imageUrl: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!session?.user) return;

    const product = {
      ...formData,
      userId: session.user.id,
      userEmail: session.user.email,
    };

    const res = await addProduct(product);

    if (res.success) {
      alert("✅ Product added successfully!");

      // Form Clear
      setFormData({
        title: "",
        price: "",
        category: "",
        shortDescription: "",
        fullDescription: "",
        imageUrl: "",
      });
    } else {
     alert("❌ Failed to add product!");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center sm:p-6 lg:p-8 overflow-hidden rounded-2xl">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src={Formbg}
          alt="Bermuda Shop Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Main Form Container */}
      <div className="relative z-10 w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-orange-100 overflow-hidden">

        {/* Header Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 py-4 px-6">
          <h2 className="text-xl font-bold text-white uppercase tracking-wide text-center">
            CREATE NEW VIBRANT PRODUCT
          </h2>
        </div>

        {/* Form Element */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">

          {/* Drag & Drop Image / URL Section */}
          <div className="bg-orange-50/60 border-2 border-dashed border-orange-300 rounded-xl p-5 text-center flex flex-col items-center justify-center transition-colors hover:bg-orange-50">
            <BiImageAdd className='text-2xl' />
            <p className="text-sm font-medium text-orange-950">
              Drag & Drop Image or Enter Image URL.
            </p>
            <p className="text-xs text-orange-700/80 mt-1">
              Recommended size: 800x600px (Max 5MB).
            </p>

            {/* Input field for Image URL */}
            <input
              type="url"
              required
              placeholder="Or paste direct image URL here..."
              className="mt-3 block w-full px-3 py-1.5 bg-white border border-orange-200 rounded-lg text-xs focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none placeholder-gray-400"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
            />
          </div>

          {/* Row 1: Product Title & Price */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Product Title
              </label>
              <input
                type="text"
                required
                placeholder="Citrus Crush Mixer"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none text-gray-900"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Price ($) or Priority
              </label>
              <input
                type="text"
                required
                placeholder="0.00"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none text-gray-900"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </div>
          </div>

          {/* Row 2: Category & Short Description */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Category
              </label>
              <select
                required
                className="w-full px-3 py-2 border border-gray-300 bg-white rounded-lg text-sm focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none text-gray-900"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                <option value="">Select Category</option>
                <option value="food">Food</option>
                <option value="Electronics">Electronics</option>
                <option value="cloth">cloth</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Short Description
              </label>
              <input
                type="text"
                required
                placeholder="Brief summary..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none text-gray-900"
                value={formData.shortDescription}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              />
            </div>
          </div>

          {/* Row 3: Full Description */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Full Description
            </label>
            <textarea
              rows={4}
              required
              placeholder="Write detailed specifications here..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none text-gray-900 resize-none"
              value={formData.fullDescription}
              onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end space-x-3 pt-2">
            <button
              type="button"
              className="px-5 py-2 border border-orange-700/40 text-orange-800 font-medium rounded-lg text-sm bg-white hover:bg-orange-50/50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-orange-700 text-white font-medium rounded-lg text-sm hover:bg-orange-800 transition-colors shadow-md shadow-orange-700/20"
            >
              + Add Product
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddItem;