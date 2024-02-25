import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../config";
const useItemCard = (id) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    getItemCardInfo();
  }, []);

  async function getItemCardInfo() {
    try {
      const data = await fetch(FETCH_MENU_URL + id);
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await data.json();
      // console.log(
      //   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      //   ?.card?.itemCards
      // );
      setCard(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
      );
    } catch (error) {
      console.error("Error fetching restaurant data:", error.message);
      // You can add additional error handling here
    }
    //setRestraunt(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories[1]?.itemCards[0]);
  }
  return card;
};

export default useItemCard;
