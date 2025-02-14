import React from "react";
import loginPage from "../../../assets/logo/login.avif";
import SocialLink from "../../Shared/SocialLink/SocialLink";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{
        background: "var(--Gray-White, #FFF)",
        padding: "100px",
      }}
    >
      <div className="max-w-screen-xl mx-auto h-[600px] ">
        <h1 className="text-4xl p-4 font-bold text-center text-blue-700">
          Please Login Now!!
        </h1>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <img
                className="w-[600px] h-[600px] mr-40"
                src={loginPage}
                alt=""
              />
            </div>
            <div className="card w-10/12 ">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Write Email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Write Password"
                    className="input input-bordered w-full"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="py-2 px-4 bg-blue-700 text-white rounded-md">
                    Login
                  </button>
                </div>
                <p className="text-center">
                  New here?
                  <Link className=" text-red-600 ml-1" to="/register">
                    Create a New Account
                  </Link>
                </p>
                <div className="divider">OR</div>
              </form>

              <SocialLink></SocialLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
