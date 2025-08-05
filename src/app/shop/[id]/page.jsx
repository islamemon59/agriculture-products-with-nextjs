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
import { useParams, useRouter } from "next/navigation";
import SingleProduct from "../Components/SingleProduct/SingleProduct";
import Loader from "@/app/Components/Loader/Loader";

const ProductDetails = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Helper function to safely parse a price, handling both strings and numbers.
  const safeParsePrice = (price) => {
    if (typeof price === "string") {
      // Remove any non-numeric characters except for the decimal point and a leading minus sign.
      return parseFloat(price.replace(/[^0-9.-]+/g, ""));
    }
    return parseFloat(price);
  };

  // Helper function to calculate discounted price consistently.
  const calculateDiscountedPrice = (price, discount) => {
    const priceValue = safeParsePrice(price);
    // If the price is not a valid number or discount is not defined, return the original price value.
    if (isNaN(priceValue) || discount === undefined) {
      return priceValue;
    }
    // Calculate and return the final discounted price as a number.
    const finalPrice = priceValue * (1 - discount / 100);
    return finalPrice;
  };

  useEffect(() => {
    if (!id) return;
    const fetchSingleProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/shop/${id}`);
        const data = await res.json();
        router.refresh();
        setProduct(data);
        setMainImage(data.image);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        // You might want to handle this error by showing a toast or redirecting.
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
    // Ensure product is available before proceeding.
    if (!product) {
        toast.error("Product data not loaded.");
        return;
    }

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
      // Calculate the total price as a number, then format it for the cart data.
      const productPrice = calculateDiscountedPrice(
        product.price,
        product.discount
      );
      // Ensure productPrice is a valid number before multiplying.
      if (isNaN(productPrice)) {
          toast.error("Invalid product price. Cannot add to cart.");
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
        const cartRes = await fetch("http://localhost:3000/api/shop", {
          method: "POST",
          body: JSON.stringify(cartData),
        });

        const data = await cartRes.json();
        router.refresh();

        if (data.insertedId) {
          toast.success(`${quantity} x ${product.name} added to cart!`, {
            icon: <FaCheckCircle className="text-green-500" />,
          });
        } else {
          toast.error("Failed to add to cart");
        }
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong");
      }
    } else {
      toast("Operation cancelled.", {
        icon: "👋",
      });
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
    ></SingleProduct>
  );
};

export default ProductDetails;
