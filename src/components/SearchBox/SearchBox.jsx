import { useDispatch, useSelector } from "react-redux";

import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

import css from "./SearchBox.module.css";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { TextField } from "@mui/material";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleClearInput = () => {
    dispatch(changeFilter(""));
  };

  const value = useSelector(selectNameFilter);

  return (
    <div className={css.container}>
      <div className={css.inputWrapper}>
        <TextField
          fullWidth
          name="name"
          label="Search"
          value={value}
          onChange={(evt) => {
            dispatch(changeFilter(evt.target.value));
          }}
        />
        {value.length > 0 && (
          <button
            className={css.closeBtn}
            type="button"
            onClick={handleClearInput}
          >
            <AiOutlineCloseCircle size={18} />
          </button>
        )}
      </div>
    </div>
  );
}