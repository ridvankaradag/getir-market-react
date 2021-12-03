import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import {
  getFiltersSuccess,
  hasError,
  startLoading,
} from "../../features/filter";
import { getMetadata } from "../../utils/services";
import Sorting from "./Sorting";
import Brands from "./Brands";
import Tags from "./Tags";

const FilterContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async function init() {
      dispatch(startLoading());
      const { error, data } = await getMetadata();
      if (error) {
        dispatch(hasError(data));
      } else {
        dispatch(getFiltersSuccess(data));
      }
    })();
  }, [dispatch]);
  return (
    <>
      <Sorting />
      <Brands />
      <Tags />
    </>
  );
};

export default FilterContainer;
