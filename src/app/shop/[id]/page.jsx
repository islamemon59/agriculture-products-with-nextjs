"use client";
import { useEffect, useState } from "react";
import {
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaCheckCircle,
} from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";
import SingleProduct from "../Components/SingleProduct/SingleProduct";
import Loader from "@/app/Components/Loader/Loader";

const ProductDetails = () => {
  const params = useParams();
  const id = params?.id;

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!id) return;
    const fetchSingleProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/shop/${id}`);
        const data = await res.json();
        setProduct(data);
        setMainImage(data.image);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };
    fetchSingleProduct();
  }, [id]);

  const renderStars = (rating = 0) => {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    for (let i = 0; i < full; i++)
      stars.push(<FaStar key={`f-${i}`} className="text-yellow-500 text-lg" />);
    if (half)
      stars.push(
        <FaStarHalfAlt key="half" className="text-yellow-500 text-lg" />
      );
    for (let i = 0; i < empty; i++)
      stars.push(
        <FaRegStar key={`e-${i}`} className="text-yellow-500 text-lg" />
      );

    return stars;
  };

  const handleAddToCart = async () => {
    const result = await Swal.fire({
      title: "Add to Cart?",
      text: `${quantity} x ${product.name} will be added to your cart.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
    });

    if (result.isConfirmed) {
      toast.success(`${quantity} x ${product.name} added to cart!`, {
        icon: <FaCheckCircle className="text-green-500" />,
      });
      console.log(`Added ${quantity} of ${product.name} to cart.`);
    } else {
      toast("Operation cancelled.", {
        icon: "👋",
      });
    }
  };

  const calculateDiscountedPrice = (priceStr, discount) => {
    const priceValue = parseFloat(priceStr.replace(/[^0-9.-]+/g, ""));
    if (isNaN(priceValue) || discount === undefined) return priceStr;
    const finalPrice = priceValue * (1 - discount / 100);
    return `₹${finalPrice.toFixed(2)}`;
  };

  if (!product) return <Loader />;

  return (
    <SingleProduct
      product={product}
      quantity={quantity}
      mainImage={mainImage}
      setQuantity={setQuantity}
      setMainImage={setMainImage}
      handleAddToCart={handleAddToCart}
      renderStars={renderStars}
    ></SingleProduct>
  );
};

export default ProductDetails;
