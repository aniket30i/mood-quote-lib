export const quoteMe = async () => {
  try {
    const res = await fetch(`https://dummyjson.com/quotes/1`);
    const data = await res.json();
    return data["quote"];
  } catch (err) {
    throw new Error(err);
  }
};
