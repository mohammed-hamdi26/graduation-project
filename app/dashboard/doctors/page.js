import DoctorItem from "@/app/_components/DoctorItem";
import DoctorsContainer from "@/app/_components/DoctorsContainer";
import Spinner from "@/app/_components/Spinner";
import { getDoctors } from "@/app/_lib/data-service";
import docImage1 from "@/public/mohammed2.png";
import docImage2 from "@/public/omar.png";
import docImage3 from "@/public/Rectangle 20-3.png";
import docImage4 from "@/public/youssef.png";

import { Suspense } from "react";

export default async function page() {
  const doctors = await getDoctors();

  return (
    <div className="space-y-8">
      <h2 className="text-second-main text-2xl capitalize">
        <span className="text-4xl font-bold">Doctors</span>{" "}
      </h2>

      <Suspense fallback={<Spinner />}>
        <DoctorsContainer doctors={doctors} />
      </Suspense>
    </div>
  );
}
