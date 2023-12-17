import UserInfo from "./UserInfo";

interface Props {
  data: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
  };
}

const UserTable = (props: Props) => {
  return (
    <div className="flex flex-row justify-between p-6 border border-b border-slate-100">
      <UserInfo data={props.data} />

      <div className="flex flex-col w-[40%]">
        <p>Some dummy Content</p>
        <p className="text-slate-500">Brings all your news into one place</p>
      </div>

      <div className="flex flex-row w-[20%] justify-between">
        <p className="text-xs font-bold text-green-600 self-center bg-green-50 rounded-xl p-1 pl-2 pr-2">
          Customer
        </p>
        <button className="ml-auto">
          <img
            src="/icons/icons8-delete-24.png"
            className="h-6 self-center"
            alt="None"
          />
        </button>

        <button className="ml-7">
          <img
            src="/icons/icons8-write-96.png"
            className="h-6 self-center"
            alt="None"
          />
        </button>
      </div>
    </div>
  );
};

export default UserTable;
