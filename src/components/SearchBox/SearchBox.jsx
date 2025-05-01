import { useSelector, useDispatch } from "react-redux";
import style from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const searchTerm = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleChange = (event) => dispatch(changeFilter(event.target.value));

  return (
    <div>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className={style.searchInput}
      />
    </div>
  );
};

export default SearchBox;
