"use client";
import toast from "react-hot-toast";
import ModalData from "./ModalData/ModalData";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/app/Components/Loader/Loader";

const CartModal = ({ isOpen, setIsCartModalOpen }) => {
  const router = useRouter()
  const [cartData, setCartData] = useState([]);
  
  
  useEffect(() => {
    const fetchCartItem = async () => {
      try {
        const res = await fetch("/api/cart");
        const data = await res.json();
        setCartData(data);
        if (!res.ok) throw new Error(data.error || "Something went wrong");
      } catch (err) {
        console.error("Fetch Error:", err.message);
      }
    };
    
    fetchCartItem();
  }, [cartData]);
  
  const handleBuyNow = () => {
    setIsCartModalOpen(false);
  };
  
  const handleDeleteItem = async (id) => {
    const res = await fetch(`/api/shop/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if(data.message){
      toast.success("Successfully Deleted")
      router.refresh()
    }
  };

  if (!isOpen) return null;

  return (
    <ModalData
      cartData={cartData}
      setIsCartModalOpen={setIsCartModalOpen}
      handleBuyNow={handleBuyNow}
      handleDeleteItem={handleDeleteItem}
    />
  );
};

export default CartModal;
