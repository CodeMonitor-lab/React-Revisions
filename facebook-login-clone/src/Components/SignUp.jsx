import React from "react";
import { NavLink } from "react-router-dom";
import { Input,BtnSubmit,DateBirth} from "./index";

const SignUp = () => {
  return <>
      <main>
        <section>
          <div>
            <Input/>
            <Input/>
          </div>
          <div>
            <DateBirth/>
          </div>
        </section>
      </main>
  </>;
};

export default SignUp;
