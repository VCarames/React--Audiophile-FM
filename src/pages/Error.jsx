import { Link, useRouteError } from "react-router-dom";
import Logo from "/assets/shared/desktop/logo.svg";

function Error() {
  const error = useRouteError();

  return (
    <section className="error">
      <div className="error__content">
        <Link
          className="error__logo-link button"
          to="/"
          aria-label="Audiophile - Home"
        >
          <img
            className="error__logo-link--img"
            src={Logo}
            alt="Audiophile Logo"
          />
        </Link>
        <h1 className="error__title">
          Whoops...!! <span>Something went wrong 😢</span>
        </h1>
        <p className="error__message">{error.data || error.message}</p>

        <Link className="button button--one" to="/">
          Return Home
        </Link>
      </div>
    </section>
  );
}

export default Error;
