import AppointmentBox from "./AppointmentBox";

function AppointmentContainer() {
  return (
    <div className="grid grid-cols-3 gap-4 justify-center">
      <AppointmentBox>12:00 am</AppointmentBox>
      <AppointmentBox>12:00 am</AppointmentBox>
      <AppointmentBox>12:00 am</AppointmentBox>
      <AppointmentBox>12:00 am</AppointmentBox>
      <AppointmentBox>12:00 am</AppointmentBox>
      <AppointmentBox>12:00 am</AppointmentBox>
      <AppointmentBox>12:00 am</AppointmentBox>
    </div>
  );
}

export default AppointmentContainer;
