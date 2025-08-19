import React from "react";

function Instagram() {
  return (
    <>
     <div className="flex justify-center">
        <div className="bg-white border-2 border-gray-400 rounded-2xl p-6">
            <h1 className="text-xl font-bold text-gray-700 flex justify-center">
                Vision Talk's Instagram Details
            </h1>

            <h2 className="text-xl flex justify-center font-semibold">
                Our Account : vision@talk
            </h2>

            <h3 className="text-lg flex justify-center font-semibold">
                Second Account : abhaykr.218
            </h3>

            <p className="flex justify-center text-gray-600 mt-2 text-sm"><b>
                Due to Instagram or Meta Policy I am not able to fetch all the data like
                profile picture, my followers, etc.
            </b></p>
        </div>
     </div>
    </>
  );
}

export default Instagram;
