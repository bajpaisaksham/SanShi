import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const {resId} = useParams();

  const dummy ="Dummy Data";
  
  const resInfo =useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  // Safely extract the name, cuisines, and cost for two message
  const {name,cuisines,avgRating,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

  // Safely extract itemCards
  const {itemCards} =
    resInfo?.cards
      ?.find((card) => card.groupedCard?.cardGroupMap?.REGULAR?.cards)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
        (card) => card.card?.card?.itemCards
      )?.card?.card?.itemCards || [];

  // console.log(itemCards)
      

  const categories = resInfo?.cards
    ?.find(card => card.groupedCard?.cardGroupMap?.REGULAR?.cards)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {/* categories Accordions */}
      {categories.map((category, index) => (
        <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index == showIndex ? true : false}
        setShowIndex={() => setShowIndex(index)}
        dummy={dummy}/>
      ))}
    </div>
  );
};

export default RestaurantMenu;
