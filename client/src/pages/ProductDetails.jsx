import React, { useEffect, useState } from "react";
import { useShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";
import { toast } from "react-hot-toast";

const ProductDetails = () => {
  const { currency, products, addToCart } = useShopContext();
  const { id } = useParams();

  const product = products.find((item) => item._id === id);

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [selectSize, setSelectedSize] = useState("");

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  // set main image + related products
  useEffect(() => {
    if (product) {
      setMainImage(product.image[0]);

      const related = products.filter(
        (item) =>
          item.subCategory === product.subCategory && item._id !== product._id,
      );

      setRelatedProducts(related);
    }
  }, [product, products]);

  if (!product) return <p className="text-center">Loading...</p>;

  return (
    <div className="px-4 md:px-10 py-8">
      {/*  PRODUCT SECTION  */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* IMAGE SECTION */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3">
            {product.image.slice(0, 4).map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                onClick={() => setMainImage(img)}
                className="w-20 h-20 object-cover border cursor-pointer hover:border-black"
              />
            ))}
          </div>

          {/* Main Image */}
          {mainImage && (
            <div>
              <img
                src={mainImage}
                alt=""
                className="w-[280px] sm:w-[350px] md:w-[420px] object-cover"
              />
            </div>
          )}
        </div>

        {/* PRODUCT INFO */}
        <div className="flex-1 space-y-4">
          <p className="text-2xl font-semibold">{product.name}</p>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_dull_icon} alt="" />
            <span className="text-sm text-gray-500">(122)</span>
          </div>

          <p className="text-xl font-bold">
            {currency}
            {product.price}
          </p>

          <p className="text-gray-600">{product.description}</p>

          {/* Sizes */}
          <div>
            <p className="font-medium mb-2">Select Size</p>
            <div className="flex gap-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeClick(size)}
                  className={`cursor-pointer border px-4 py-1 
      hover:bg-black hover:text-white
      ${selectSize === size ? "bg-black text-white" : "bg-white text-black"}
    `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              if (!selectSize) {
                toast.error("Please select a size");
                return;
              }

              addToCart(product, selectSize);
              toast.success("Added to cart 🛒");
            }}
            className="cursor-pointer bg-black text-white px-6 py-2 mt-4"
          >
            Add To Cart
          </button>

          <div className="text-sm text-gray-600 space-y-1 mt-4">
            <p>✔ 100% Original product</p>
            <p>✔ Cash on delivery available</p>
            <p>✔ Easy return within 7 days</p>
          </div>
        </div>
      </div>

      {/* ================= DESCRIPTION ================= */}
      <div className="mt-12">
        <div className="flex gap-6 border-b pb-2">
          <p className="font-semibold border-b-2 border-black">Description</p>
          <p className="text-gray-500">Reviews (122)</p>
        </div>

        <div className="mt-4 text-gray-600 space-y-4">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet.
          </p>
          <p>
            Each product usually has its own dedicated page with relevant
            information like images, prices, and variations.
          </p>
        </div>
      </div>

      {/*  RELATED PRODUCTS  */}
      <div className="mt-16">
        <Title text1="Related" text2="Products" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
          {relatedProducts.slice(0, 5).map((item) => (
            <ProductCard
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
