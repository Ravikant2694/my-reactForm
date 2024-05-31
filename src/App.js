// react hook form(Project-1)

import React, { useState,useEffect } from "react";
import { useForm} from "react-hook-form";


const App = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [data, setData] = useState("")
  // console.log("watch", watch());
  const onSubmit = handleSubmit((data) => console.warn(data));

  console.log("errors", errors);


console.log(data,"dta");

  return (
    <div className="">
      <p>SIGN UP</p>
      <form onSubmit={onSubmit}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'start', background: '#181f2d99', color: '#d1d5db', padding: 30, borderRadius: 4 }}>
            <div style={{ fontSize: '14px' }}>
              First name<span style={{ color: 'red' }}>*</span>
              <input style={{ display: 'block', margin: 0, width: 220, padding: 8, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="First Name" {...register("firstName", { required: "First name is requiredvhgh" })} />
              {errors?.firstName && <p style={{ color: 'red', margin: 0, fontSize: 14, fontWeight: 400 }}>{errors.firstName.message}</p>}
            </div>
            <div style={{ fontSize: '14px' }}>
              Last name:
              <input style={{ display: 'block', margin: 0, width: 220, padding: 8, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="Last Name" {...register("lastName", { required: "last name is required" })} />
              {errors?.lastName && <p style={{ color: 'red', margin: 0, fontSize: 14, fontWeight: 400 }}>{errors.lastName.message}</p>}
              </div>
            <div style={{ fontSize: '14px' }}>
              Phone number<span style={{ color: 'red' }}>*</span>:
              <input style={{ display: 'block', margin: 0, width: 220, padding: 8, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="Phone Number" {...register("phoneNumber")} />
            </div>
            <div style={{ fontSize: '14px' }}>
              Email<span style={{ color: 'red' }}>*</span>:
              <input style={{ display: 'block', margin: 0, width: 220, padding: 8, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="Email" {...register("email")} />
            </div>
            <div style={{ fontSize: '14px' }}>
              password<span style={{ color: 'red' }}>*</span>:
              <input style={{ display: 'block', margin: 0, width: 220, padding: 8, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="Password" {...register("password")} />
            </div>
            <div style={{ fontSize: '14px' }}>
              conform password<span style={{ color: 'red' }}>*</span>:
              <input style={{ display: 'block', margin: 0, width: 220, padding: 8, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="Confirm Password" {...register("confirmPassword")} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button style={{ color: 'white', background: 'green', padding: '6px 16px', border: 'none', borderRadius: 4, cursor: 'pointer' }} type="submit">Sign up</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;









