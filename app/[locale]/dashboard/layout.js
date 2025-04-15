import NavBar from "../../_components/NavBar";
import NavProfileItem from "../../_components/NavProfileItem";
import TopNavBar from "../../_components/TopNavBar";
import { getUser } from "../../_lib/data-service";
export default async function layout({ children }) {
  const user = await getUser();
  return (
    <div className="h-full flex-1 grid grid-cols-[auto_1fr] ">
      <NavBar user={user}>
        <NavProfileItem />
      </NavBar>
      <div className="bg-background h-full p-8 pt-24  overflow-x-hidden flex-1 relative grid grid-rows-[auto_1fr]  ">
        <TopNavBar />
        {children}
      </div>
    </div>
  );
}
