const UserTableFooter = (props: { pageHandaler: any; page: number }) => {
  return (
    <div className="flex flex-row justify-between p-6 pt-4 pb-4">
      <button
        onClick={() => props.pageHandaler("previous")}
        className="flex flex-row bg-transparent border border-1 border-slate-300 h-10 pl-3 pr-3 rounded-xl text-black items-center text-sm"
      >
        Previous
      </button>
      <p className="self-center">Page {props.page} of 2</p>
      <button
        onClick={() => props.pageHandaler("next")}
        className="flex flex-row bg-transparent border border-1 border-slate-300 h-10 pl-3 pr-3 rounded-xl text-black items-center text-sm"
      >
        Next
      </button>
    </div>
  );
};

export default UserTableFooter;
