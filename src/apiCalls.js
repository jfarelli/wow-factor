const fetchWows = async (pathAddress) => {
  try {
    const response = await fetch(
      `https://owen-wilson-wow-api.onrender.com/wows/${pathAddress}`
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("error", error);
  }
};

export default fetchWows;
