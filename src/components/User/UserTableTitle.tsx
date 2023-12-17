const UserTableHeader = () => {
  return (
    <div className="flex flex-row w-full">
      <p className="text-2xl self-center">Users</p>
      <button className="flex flex-row bg-transparent border border-1 border-slate-300 h-10 pl-3 pr-3 ml-auto rounded-xl text-black items-center text-sm font-bold">
        <img
          src="/icons/icons8-import-64.png"
          className="h-6 self-center mr-2"
          alt="None"
        />{" "}
        Import
      </button>
      <button className="flex flex-row bg-violet-700 h-10 pl-3 pr-3 ml-5 rounded-xl text-white items-center text-sm font-bold">
        <img
          src="/icons/icons8-plus-90.png"
          className="h-4 self-center mr-2"
          alt="None"
        />{" "}
        Add User
      </button>
    </div>
  );
};

export default UserTableHeader;
