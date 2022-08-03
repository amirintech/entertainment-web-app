// Components
import { Link } from "react-router-dom";
import Input from "../Input/Input";

// Styles
import "./From.css";

export default function From({ title }) {
  return (
    <div className="form-container">
      <form className="form">
        <h1 className="font-lg form__title">{title}</h1>
        {/* <Input type="email" placeholder="Email address" />
        <Input type="password" placeholder="Password" />
        <button className="btn btn--block">Login to your account</button>
        <footer className="form__footer">
          <p className="form__footer-text">
            Don’t have an account?
            <Link to="sign-up" className="text-accent form__footer-link">
              Sign Up
            </Link>
          </p>
        </footer> */}
      </form>
    </div>
  );
}
