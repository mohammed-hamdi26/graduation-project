import { getDoctorAvailability } from "../_lib/data-service";

async function DoctorSelectedAvailabilities({ docID }) {
  const availabilities = await getDoctorAvailability(docID);
  console.log(availabilities);

  return (
    <div
      className={
        "bg-gradient-to-r from-second-main to-second-main bg-opacity-40  p-4 rounded-lg  h-fit overflow-hidden space-y-4 "
      }
    >
      <h3 className="text-xl text-white font-bold capitalize ">
        Selected Times
      </h3>
      {availabilities ? (
        <div className="grid grid-cols-3 gap-4">
          {availabilities.map((availability) => (
            <div
              key={availability.id}
              className="bg-white p-2 py-3 rounded-lg flex flex-col items-center justify-center"
            >
              <p className="text-2xl text-second-main font-bold flex">
                {" "}
                {availability.start_time.split(":")[0]}:00 -{" "}
                {availability.end_time.split(":")[0]}:00
              </p>
              <p className="text-gray-500">{availability.date}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>no availabilities</div>
      )}
    </div>
  );
}

export default DoctorSelectedAvailabilities;
