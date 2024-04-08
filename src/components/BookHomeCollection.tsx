import React from "react";
import BookHomeCollectionCard from "./BookHomeCollectionCard";

export default function BookHomeCollection() {
  return (
    <>
      <div className="p-12  bg-green-600 flex flex-col items-center justify-center">
        <h3 className="text-white font-bold text-3xl text-center">Book Home Collection</h3>
        <div className="grid lg:grid-cols-3  lg:gap-7 gap-16  p-7 pt-20">
          <BookHomeCollectionCard
            logo="https://aarogyapathcare.in/images/bg-image/icons8-convenient-64.png"
            title="Convenient & Time Saving
                "
            description="Complete eye exams are not just for updating prescription.

                "
          />
          <BookHomeCollectionCard
            logo="https://aarogyapathcare.in/images/bg-image/icons8-home-50.png"
            title="Free Home Collection & Cancellation
                "
            description="Eye conditions range from mild to severe. While some are chronic & others.

                "
          />
          <BookHomeCollectionCard
            logo="https://aarogyapathcare.in/images/bg-image/icons8-reports-58.png"
            title="Online Access To Reports
            "
            description="We diagnose ocular diseases such as Macular Degeneration

            "
          />
        </div>
      </div>
    </>
  );
}
