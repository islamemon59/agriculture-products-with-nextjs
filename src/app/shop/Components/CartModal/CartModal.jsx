import ModalData from "./ModalData/ModalData";

const CartModal = async ({ isOpen, setIsCartModalOpen }) => {
  if (!isOpen) return null;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/cart`, {
    cache: "no-store", // ensures fresh data
  });
  const cartData = await res.json();

  return (
    <ModalData
      cartData={cartData}
      setIsCartModalOpen={setIsCartModalOpen}
    />
  );
};

export default CartModal;
