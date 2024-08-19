import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  const [calldown, setCalldown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCalldown((prev) => prev - 1);

      if (calldown < 1) {
        navigate("/", { replace: true });
        clearInterval(intervalId);
        return;
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [calldown, navigate]);

  return (
    <main>
      <section>
        <h2 className={css.title}>Oops</h2>
        <img src={imgUrl} alt="123" className={css.img} />
        <p className={css.text}>
          You are being redirected to the
          <Link className="underline" to="/">
            Home page
          </Link>
          after {calldown} seconds
        </p>
      </section>
    </main>
  );
}