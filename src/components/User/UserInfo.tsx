import { useState } from "react";

interface Props {
  data: {
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
    checked?: boolean;
  };
}

const UserInfo = (props: Props) => {
  const [checked, setChecked] = useState(false);

  const checkHandaler = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex flex-row w-[40%]">
      {checked && (
        <button onClick={checkHandaler} className="rounded-md ">
          <img
            src="/icons/icons8-tick-24.png"
            className="h-6 border-2 bg-purple-50 border-violet-700 rounded-md p-[2px]"
            alt="none"
          />
        </button>
      )}
      {!checked && (
        <button
          onClick={checkHandaler}
          className="h-6 w-6 border-2 border-slate-200 rounded-md p-[2px] self-center"
        ></button>
      )}
      <img
        src={props.data.avatar}
        className="h-12 w-12 rounded-full self-center ml-4"
        alt="None"
      />
      <div className="flex flex-col ml-4">
        <p className="font-bold">
          {props.data.first_name} {props.data.last_name}
        </p>
        <p className="text-slate-500">{props.data.email}</p>
      </div>
    </div>
  );
};

export default UserInfo;
