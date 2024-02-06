import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHasCache } from "../../utils/redux/slices/feedResults";

const GameDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHasCache(true));
  }, []);

  return <div>GameDetails</div>;
};

export default GameDetails;
