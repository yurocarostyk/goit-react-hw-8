import { BeatLoader } from "react-spinners";

import css from "./Loader.module.css";

export default function Loader() {
  return (
    <>
      <BeatLoader size={22} className={css.loader} />
    </>
  );
}