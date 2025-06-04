import DoctorItem from "./DoctorItem";

function DoctorsContainer({ doctors, to }) {
  // console;
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
      {doctors.map((doctor) => (
        <DoctorItem
          to={to}
          key={doctor.id}
          srcImage={
            doctor.doc_img ? `${process.env.API_URL}${doctor.doc_img}` : ""
          }
          doctorName={`${doctor.doc_first_name} ${doctor.doc_last_name}`}
          id={doctor.user}
        />
      ))}
    </div>
  );
}

export default DoctorsContainer;
