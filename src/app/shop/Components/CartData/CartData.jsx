export const fetchTotalCartData = async () => {
  const res = await fetch("/api/cart");
  const data = await res.json();
  return data
};
