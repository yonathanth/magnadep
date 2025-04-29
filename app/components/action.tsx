import React from "react";
import CustomButton from "./CustomButton";

const action = () => {
  return (
    <div className="mt-8 text-center">
      <p className="text-sm md:text-lg text-black mb-6 max-w-80 sm:max-w-xl lg:max-w-5xl  mx-auto">
        Ready to elevate your event or ensure top-notch medical support? Contact
        us today!
      </p>
      <CustomButton href={"/event"} name={"Book an Event"} />
    </div>
  );
};

export default action;
