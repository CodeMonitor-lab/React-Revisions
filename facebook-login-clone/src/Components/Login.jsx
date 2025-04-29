import React from "react";
import { NavLink } from "react-router-dom";
import { Input, Button } from "./index";

const Login = () => {
    return (
        <>
        <main className="min-h-screen p-3 bg-gray-100 flex flex-col items-center justify-center">
      <section className="flex flex-col md:flex-row w-full max-w-6xl gap-10 justify-center items-center">
        <article className="md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl font-bold text-blue-600">facebook</h1>
          <p className="text-2xl mt-4 mb-6 font-semibold">
            Facebook helps you connect and share with the people in your life.
          </p>
        </article>
       <form
          className="bg-white shadow-md rounded p-5 w-full max-w-md"
          action="#!"
        >
          <div className="space-y-4">
            <Input
              type="email"
              name="email"
              placeholder="Email address or Phone number"
              autoComplete="off"
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="new-password"
            />

            <button
              className="bg-blue-600 rounded text-2xl w-full text-center font-bold p-2 text-white"
              type="submit"
            >
              Log in
            </button>

            <NavLink
              to="/forgot-password"
              className="block text-center text-blue-500 mt-3"
            >
              Forgotten password?
            </NavLink>

            <hr className="my-4" />

            <div className="flex justify-center">
              <NavLink to="/signup">
                <li className="rounded text-white bg-green-500 list-none px-6 py-3 text-center text-xl font-bold">
                  Create new account
                </li>
              </NavLink>
            </div>
          </div>
        </form>
      </section>
    </main>
    </>
  );
};

export default Login;
