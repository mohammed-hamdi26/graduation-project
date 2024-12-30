import NavBar from "../_components/NavBar";
import NavProfileItem from "../_components/NavProfileItem";

export default function layout({ children }) {
  return (
    <div className="h-full flex-1 grid grid-cols-[auto_1fr] ">
      <NavBar>
        <NavProfileItem />
      </NavBar>
      <div className="bg-background h-full p-8  overflow-x-hidden ">
        {children}
      </div>
    </div>
  );
}
