import React from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard.js";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText , setSearchText] = useState("");
  
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );


  
      const text = await response.text();
      // console.log(text); // Log the raw response to see what's being returned
  
      // If it's JSON, then parse it
      const json = JSON.parse(text);
      // console.log(json);


      //rendering live data through swiggy(API fetching)
      //Optional Chaining
      setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
  
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) {
    return (
      <div>
        <h1>
          Looks like you're Offline!!
        </h1>
        <h2>
          Please check your Internet Connection
        </h2>
      </div>
    );
  };

  const {loggedInUser,setUserName} = useContext(UserContext);


  // Conditional Rendering
  // if(listOfRestaurants.length === 0) {
  //   return < Shimmer/>
  // }

  return listOfRestaurants.length === 0 ? ( < Shimmer/> ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4" >
          <input type="text" className="border border-solid border-black py-0.9 rounded-md" value={searchText} onChange={(e) => {
            setSearchText(e.target.value)
          }} />
          <button className="px-2 py-1 bg-green-100 m-1 rounded-lg"
          onClick={() => {
            //filter the restaurants and update the UI
            // searchText
            const filteredRestaurant = listOfRestaurants.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()) );

            setFilteredRestaurant(filteredRestaurant);
          }}>Search</button>
        </div>
        <div className="m-4 p-4 items-center" >
        <button
          className="bg-gray-100 px-4 py-1 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
        <div className="m-3 p-5  flex-items-centre">
          <label className="px-2">Username :</label>
          <input className="border border-black p-1" value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
           {restaurant.info.promoted ? (<RestaurantCardPromoted resData={restaurant} />) : (
            <RestaurantCard  resData={restaurant} />
           )}
          </Link>
        ))}
      </div>

      {/* <RestaurantCard resData={resList[0]}/>
      <RestaurantCard resData={resList[1]}/>
      <RestaurantCard resData={resList[2]}/>
      <RestaurantCard resData={resList[3]}/>
      <RestaurantCard resData={resList[4]}/>
      <RestaurantCard resData={resList[5]}/>
      <RestaurantCard resData={resList[6]}/>
      <RestaurantCard resData={resList[7]}/>
      <RestaurantCard resData={resList[8]}/>
      <RestaurantCard resData={resList[9]}/>
      <RestaurantCard resData={resList[10]}/>
      <RestaurantCard resData={resList[11]}/>
      <RestaurantCard resData={resList[12]}/>
      <RestaurantCard resData={resList[13]}/> */}

    </div>
  );
};

export default Body;