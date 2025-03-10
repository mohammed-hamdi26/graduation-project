import Image from "next/image";
import NavBar from "../_components/NavBar";
import NavProfileItem from "../_components/NavProfileItem";
import { getUser } from "../_lib/data-service";
import vectorImage1 from "../../public/Vector1.svg";
import vectorImage2 from "../../public/Vector2.svg";
export default async function layout({ children }) {
  const user = await getUser();
  return (
    <div className="h-full flex-1 grid grid-cols-[auto_1fr] ">
      <NavBar user={user}>
        <NavProfileItem />
      </NavBar>
      <div className="bg-background h-full p-8  overflow-x-hidden flex-1 relative ">
        {children}
      </div>
    </div>
  );
}
