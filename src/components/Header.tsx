import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row w-full h-20 bg-violet-700 pl-40 pr-40">
      <div className="flex flex-row w-32 justify-between">
        <img
          src="/icons/icons8-stack.png"
          className="h-12 self-center"
          alt="None"
        />
        <p className="self-center text-white text-center text-2xl font-bold">
          Stack
        </p>
      </div>

      <div className="flex flex-row w-1/3 justify-around ml-20">
        <button className="bg-transparent hover:bg-violet-500 h-9 pl-3 pr-3 self-center rounded-md text-slate-200 text-center text-lg font-bold">
          Home
        </button>
        <button
          onClick={() => navigate("/users")}
          className="bg-transparent hover:bg-violet-500 h-9 pl-3 pr-3 self-center rounded-md text-slate-200 text-center text-lg font-bold"
        >
          Users
        </button>
        <button className="bg-transparent hover:bg-violet-500 h-9 pl-3 pr-3 self-center rounded-md text-slate-200 text-center text-lg font-bold">
          Projects
        </button>
        <button className="bg-transparent hover:bg-violet-500 h-9 pl-3 pr-3 self-center rounded-md text-slate-200 text-center text-lg font-bold">
          Tasks
        </button>
        <button className="bg-transparent hover:bg-violet-500 h-9 pl-3 pr-3 self-center rounded-md text-slate-200 text-center text-lg font-bold">
          Reporting
        </button>
      </div>

      <div className="flex flex-row w-44 justify-between ml-auto">
        <img
          src="/icons/icons8-search-100.png"
          className="h-5 self-center"
          alt="None"
        />
        <img
          src="/icons/icons8-setting-100.png"
          className="h-5 self-center"
          alt="None"
        />
        <img
          src="/icons/icons8-bell-100.png"
          className="h-5 self-center"
          alt="None"
        />
        <img
          src="/icons/male-avatar-maker-2a7919.png"
          className="h-10 rounded-full self-center"
          alt="None"
        />
      </div>
    </div>
  );
};

export default Header;
