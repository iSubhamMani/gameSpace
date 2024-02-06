import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHasSearchCache } from "../../utils/redux/slices/search";

const GameDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHasSearchCache(true));
  }, []);

  return <div>GameDetails</div>;
};

export default GameDetails;
