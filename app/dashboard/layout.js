import NavBar from "../_components/NavBar";

export default function layout({ children }) {
  return (
    <div className="h-full grid grid-cols-[25rem_1fr]">
      <NavBar />
      <div className="bg-background p-8">{children}</div>
    </div>
  );
}
