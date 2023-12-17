import { useState } from "react";
import { useGetUsersQuery } from "../Store/User.api";
import Header from "./Header";
import UserTable from "./User/UserTable";
import UserTableHeader from "./User/UserTableTitle";
import UserTableFooter from "./User/UserTableFooter";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

const User = () => {
  const [page, setPage] = useState<number>(1);
  const { data } = useGetUsersQuery(page);

  const pageHandaler = (string: string) => {
    if (
      (page === 1 && string === "previous") ||
      (page === 2 && string !== "previous")
    ) {
      return;
    }

    string === "previous" ? setPage(page - 1) : setPage(page + 1);
  };

  return (
    <>
      <Header />
      <div className="pl-40 pr-40 pt-10 pb-10">
        <UserTableHeader />

        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl flex flex-col mt-9">
          <div className="flex flex-row justify-between bg-slate-50 p-6 pt-2 pb-2">
            <div className="flex flex-row w-[40%]">
              {/* {checked && (
                <button onClick={checkHandaler} className="rounded-md ">
                  <img
                    src="/icons/icons8-tick-24.png"
                    className="h-6 border-2 bg-purple-50 border-violet-700 rounded-md p-[2px]"
                    alt="none"
                  />
                </button>
              )} */}
              {true && (
                <button className="h-6 w-6 border-2 border-slate-200 rounded-md p-[2px] self-center"></button>
              )}
              <p className="text-sm text-slate-500 ml-4 self-center">
                User Info
              </p>
              <img
                src="/icons/icons8-arrow-down-100.png"
                className="h-5 ml-2 self-center"
                alt="none"
              />
            </div>
            <p className="w-[40%] text-sm text-slate-500">About</p>
            <p className="w-[20%] text-sm text-slate-500">Status</p>
          </div>

          {data?.data?.map((each: User) => {
            return <UserTable key={each.id} data={each} />;
          })}

          <UserTableFooter pageHandaler={pageHandaler} page={page} />
        </div>
      </div>
    </>
  );
};

export default User;
