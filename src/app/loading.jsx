import React from "react";


const Loading = () => {
 

  return (
    <React.Fragment>
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col gap-[41px]">
          <p className="text-[50px] text-secondary-100 font-Robot font-bold leading-[22px]">
            MEGA.news
          </p>
          <progress className="progress w-56"></progress>
          <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              class="bg-secondary-100 h-2.5 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Loading;