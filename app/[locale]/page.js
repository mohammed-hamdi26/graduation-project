import WelcomeInfo from "../_components/WelcomeInfo";
import WelcomePageBackground from "../_components/WelcomePageBackground";

export default function Home() {
  return (
    <div className="relative  flex justify-center items-center h-full text-white ">
      <div className="-z-10 absolute top-0 left-0 w-full h-full bg-black bg-opacity-65"></div>
      <WelcomePageBackground />
      <WelcomeInfo />
    </div>
  );
}
