import { useState,useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
      const json = await data.json();

      // console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;