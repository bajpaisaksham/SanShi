import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img 
        className="rounded-lg" 
        alt="res-logo" 
        src={CDN_URL+ cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg" >{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};


export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
    <div>
      <label className="absolute bg-black text-white " >
        Promoted
        <RestaurantCard {...props}/>
      </label>
    </div>
    )
  }
}

export default RestaurantCard;