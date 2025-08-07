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

  // Parse price safely
  const safeParsePrice = (price) => {
    if (typeof price === "string") {
      return parseFloat(price.replace(/[^0-9.-]+/g, ""));
    }
    return parseFloat(price);
  };

  const calculateDiscountedPrice = (price, discount) => {
    const priceValue = safeParsePrice(price);
    if (isNaN(priceValue) || discount === undefined) {
      return priceValue;
    }
    return priceValue * (1 - discount / 100);
  };

  useEffect(() => {
    if (!id) return;

    const fetchSingleProduct = async () => {
      try {
        const res = await fetch(`/api/shop/${id}`);
        const data = await res.json();
        setProduct(data);
        setMainImage(data.image);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        toast.error("Error loading product");
      }
    };

    fetchSingleProduct();
  }, [id]);

  const renderStars = (rating = 0) => {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    for (let i = 0; i < full; i++) {
      stars.push(<FaStar key={`f-${i}`} className="text-yellow-500 text-lg" />);
    }
    if (half) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500 text-lg" />);
    }
    for (let i = 0; i < empty; i++) {
      stars.push(<FaRegStar key={`e-${i}`} className="text-yellow-500 text-lg" />);
    }

    return stars;
  };

  const handleAddToCart = async () => {
    if (!product) {
      toast.error("Product data not loaded.");
      return;
    }

    const confirm = await Swal.fire({
      title: "Add to Cart?",
      text: `${quantity} x ${product.name} will be added to your cart.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, add it!",
    });

    if (!confirm.isConfirmed) {
      toast("Operation cancelled.", { icon: "👋" });
      return;
    }

    const productPrice = calculateDiscountedPrice(product.price, product.discount);
    if (isNaN(productPrice)) {
      toast.error("Invalid product price.");
      return;
    }

    const totalPrice = (productPrice * quantity).toFixed(0);

    const cartData = {
      product_id: product._id,
      product_price: parseInt(totalPrice),
      product_image: product.image,
      product_name: product.name,
      product_quantity: quantity,
    };

    try {
      const res = await fetch("/api/shop", {
        method: "POST",
        body: JSON.stringify(cartData),
      });

      const data = await res.json();

      if (data.insertedId) {
        toast.success(`${quantity} x ${product.name} added to cart!`, {
          icon: <FaCheckCircle className="text-green-500" />,
        });

      } else {
        toast.error("Failed to add to cart.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }
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
    />
  );
};

export default ProductDetails;
