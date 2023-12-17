import { useNavigate } from "react-router-dom";
import { MutableRefObject, useRef } from "react";
import SignHook from "./hooks/Sign.hook";

const Sign = (props: { meta: boolean }) => {
  const navigate = useNavigate();
  const emailRef = useRef() as any;
  const passRef = useRef() as any;
  const { signUpHandaler, signInHandaler, error } = SignHook();

  const navigationHandaler = () => {
    emailRef.current.value = "";
    passRef.current.value = "";
    !props.meta ? navigate("/sign-up") : navigate("/sign-in");
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg w-1/4 pt-16 pb-16 pr-14 pl-14">
        <div className="flex flex-row">
          <img src="/icons/icons8-stack-100.png" width={35} alt="None" />
          <p className="text-3xl font-bold ml-2 text-gray-500">Stack</p>
        </div>
        <p className="text-xl font-bold mt-5 text-gray-600">
          {props.meta ? "Sign Up" : "Sign In"} to join with Stack
        </p>

        <p className="mt-10 text-sm mb-1">Email</p>
        <div
          className={`w-full rounded-xl border-4 ${
            error.email ? "border-red-100" : "border-[#e7dff1]"
          }`}
        >
          <input
            ref={emailRef}
            className="w-full p-2.5 pl-4 outline-none rounded-lg border-[1px] border-purple-400"
          ></input>
        </div>
        <p className="text-orange-600 text-sm">
          {error.email ? "This field is required" : ""}
        </p>

        <p className="mt-10 text-sm mb-1">Password</p>
        <div
          className={`w-full rounded-xl border-4 ${
            error.pass ? "border-red-100" : "border-[#e7dff1]"
          }`}
        >
          <input
            ref={passRef}
            type="password"
            className="w-full p-2.5 pl-4 outline-none rounded-lg border-[1px] border-purple-400"
          ></input>
        </div>
        <p className="text-orange-600 text-sm">
          {error.pass ? "This field is required" : ""}
        </p>

        <button
          onClick={
            props.meta
              ? () =>
                  signUpHandaler(emailRef.current.value, passRef.current.value)
              : () =>
                  signInHandaler(emailRef.current.value, passRef.current.value)
          }
          className="w-full h-12 bg-[#6941c6] text-white text-lg font-bold rounded-lg mt-7"
        >
          {props.meta ? "Sign Up" : "Sign In"}
        </button>

        <p className="mt-7 text-gray-400">
          Already have an account?{" "}
          <button className="text-blue-500" onClick={navigationHandaler}>
            {props.meta ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Sign;
