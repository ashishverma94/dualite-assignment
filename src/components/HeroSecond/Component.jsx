import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const HeroSecond = ({
  image1 = images.image1,
  image2 = images.image2,
  image3 = images.image3,
}) => {
  return (
    <div className="wrapper-div-152 relative m-auto p-[0px] box-border">
      <div className=" max-w-[1242px] w-full box-border min-h-[666px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-center items-center gap-[10px] p-[0px_0px_0px__0px]  ">
        <div className=" w-[616px] max-w-[100%] min-h-[666px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden rounded-tl-[29px] rounded-tr-[29px] rounded-br-[29px] rounded-bl-[29px]  ">
          <img
            src={`${image1}`}
            className="absolute  bg-transparent bg-center bg-no-repeat w-full h-full bg-cover nodeBg-153 "
            alt="Rectangle 31 Image"
          />{" "}
        </div>
        {/* Frame 731 */}
        <section className=" max-w-[616px] w-full box-border min-h-[660px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-center items-start gap-[19px] p-[0px_0px_0px__0px]  ">
          <div className=" w-[616px] max-w-[100%] min-h-[320.5px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden rounded-tl-[29px] rounded-tr-[29px] rounded-br-[29px] rounded-bl-[29px]  ">
            <img
              src={`${image2}`}
              className="absolute  bg-transparent bg-center bg-no-repeat w-full h-full bg-cover nodeBg-155 "
              alt="Rectangle 181 Image"
            />{" "}
          </div>
          <div className=" w-[616px] max-w-[100%] min-h-[320.5px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden rounded-tl-[29px] rounded-tr-[29px] rounded-br-[29px] rounded-bl-[29px]  ">
            <img
              src={`${image3}`}
              className="absolute  bg-transparent bg-center bg-no-repeat w-full h-full bg-cover nodeBg-156 "
              alt="img 11 Image"
            />{" "}
          </div>
        </section>
      </div>
    </div>
  );
};
export default HeroSecond;
