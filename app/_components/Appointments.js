import AppointmentItem from "./AppointmentItem";

function Appointments() {
  return (
    <div
      className="space-y-4 w-80 
   h-full"
    >
      <AppointmentItem day={10} nameDoctor={"Dr Cameron"} dayOfWeak={"Mon"} />
      <AppointmentItem day={10} nameDoctor={"Dr Cameron"} dayOfWeak={"Mon"} />
      <AppointmentItem day={10} nameDoctor={"Dr Cameron"} dayOfWeak={"Mon"} />
    </div>
  );
}

export default Appointments;
