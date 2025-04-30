import React from "react";
import { NavLink } from "react-router-dom";
import { Input,BtnSubmit} from "./index";

const Login = () => {
    return (
        <>
        <main className="bg-gray-200 min-w-screen min-h-screen" >
          <section  className="lg:w-full md:w-full sm:w-full justify-center lg:flex md:flex sm:flex-1/2  lg:pt-20 md:pt-10 gap-4 p-4" >
            <article className=" pt-20 lg:w-lg sm:w-full" >
              <h1 className="font-bold text-6xl  pb-2 text-blue-500 ">facebook</h1>
              <p className="text-2xl  font-bold " >Facebook helps you connect and share with the people in your life.</p>
            </article>
            {/* */}
            <div className="lg:w-md sm:w-full  justify-center mt-10" >
              <form className=" grid bg-white pb-7 p-4 rounded shadow-2xl  " action="#!">
                <ul>
                <Input type='email' placeholder='Email address or phone number'   />
                <Input type='password' placeholder='Password'   />
                <BtnSubmit className="bg-green text-white p-3 w-full" type='submit' btnText='Login' />
                <span><NavLink><li className="mt-4 mb-4 text-center text-md" >Forgot password?</li></NavLink></span>
                </ul>
                <hr className="mb-8 text-gray-500  "/>
                <div className="flex justify-center" >
                  <NavLink><li className="bg-green-500 list-none px-4 py-3 text-center text-lg font-bold text-white rounded" >Create new account</li></NavLink>
                </div>
              </form>
              {/*  */}
              <div>
                <p className=" text-center mt-8"><span className="font-bold" ><NavLink>Create a Page</NavLink></span> for a celebrity, brand or business.</p>
              </div>

            </div>
          </section>
        </main>
    </>
  );
};

export default Login;
