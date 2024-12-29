import DoctorItem from "./DoctorItem";

function DoctorsContainer({ doctors, to }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4">
      {doctors.map((doctor) => (
        <DoctorItem
          to={to}
          key={doctor.id}
          srcImage={`${process.env.API_URL}${doctor.img}`}
          doctorName={`${doctor.doc_last_name} ${doctor.doc_last_name}`}
          id={doctor.user}
        />
      ))}
    </div>
  );
}

export default DoctorsContainer;
