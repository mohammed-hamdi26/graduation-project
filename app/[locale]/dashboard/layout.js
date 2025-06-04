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
      <div className="bg-background h-full px-8  py-16  overflow-x-hidden flex-1 relative grid   ">
        <TopNavBar />
        {children}
      </div>
    </div>
  );
}
