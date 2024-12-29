function AppointmentBox({ children }) {
  return (
    <div className="bg-second-main bg-opacity-45 text-center px-2 py-3 rounded-lg text-white font-medium cursor-pointer transition-all hover:bg-opacity-65">
      {children}
    </div>
  );
}

export default AppointmentBox;
