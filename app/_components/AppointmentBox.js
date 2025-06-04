import { getHours } from "date-fns";

function AppointmentBox({ appointment, onSelect, isSelected, t }) {
  return (
    <div
      onClick={onSelect}
      className={`bg-second-main  text-center px-2 py-3 rounded-lg text-white font-medium cursor-pointer transition-all hover:bg-opacity-90 ${
        isSelected ? "bg-opacity-100" : "bg-opacity-45"
      }`}
    >
      {getHours(appointment) === 0
        ? "12: 00 am"
        : getHours(appointment) > 12
        ? `${getHours(appointment) - 12} : 00 ${t("pm")}`
        : `${getHours(appointment)}:00 ${t("am")}`}{" "}
    </div>
  );
}

export default AppointmentBox;
