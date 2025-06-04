import FormSignUp from "../../_components/FormSignUp";
import WelcomePageBackground from "../../_components/WelcomePageBackground";

export default function page() {
  return (
    <div className="flex  px-4 sm:px-0 sm:justify-center sm:items-center h-full sm:overflow-hidden relative">
      <div className="-z-10 absolute top-0 left-0 w-full h-full bg-transparent backdrop-blur-lg"></div>
      <WelcomePageBackground />
      <FormSignUp />
    </div>
  );
}
