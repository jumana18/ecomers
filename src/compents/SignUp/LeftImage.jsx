import React from "react";
import Card from "../../assets/75f394c0a1c7dc5b68a42239311e510f54d8cd59.jpg";

const SignCard = () => {
  return (
    <div className="flex justify-center items-center bg-white p-4 lg:p-10 w-full">
      <img
        src={Card}
        alt="Sign up illustration"
        className="
          w-full
          max-w-[800px]
          h-auto
          object-contain
          sm:max-w-[500px]
          md:max-w-[650px]
          lg:max-w-[800px]
        "
      />
    </div>
  );
};

export default SignCard;
