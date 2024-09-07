import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const ImageSection = ({
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
}) => {
  return (
    <div className="wrapper-div-1133 mt-[35px] relative m-auto p-[0px] box-border">
      <div className=" w-[1242px] max-w-[100%] box-border min-h-[589px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-start gap-[21px] p-[70px_149px_70px__149px] rounded-tl-[9px] rounded-tr-[9px] rounded-br-[9px] rounded-bl-[9px]  ">
        <div
          className="absolute  bg-transparent bg-center bg-no-repeat w-full h-full bg-cover nodeBg-1133 "
          id="id-bg-1133"
        >
          {" "}
        </div>
        <div className=" max-w-[944px] w-full box-border min-h-[106px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
          <span className="craft-your-idea-1134-0 ">{text1}</span>
        </div>
        <div className=" max-w-[944px] w-full box-border min-h-[50px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
          <span className="whether-its-a-s-1135-0 ">{text2}</span>
        </div>
        {/* Frame 631 */}
        <section className=" max-w-[137.37px] w-full box-border min-h-[38px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[5.39px] p-[5px_0px_5px__0px] rounded-tl-[2.69px] rounded-tr-[2.69px] rounded-br-[2.69px] rounded-bl-[2.69px] bg-[#3c3228ff]  ">
          <div className=" max-w-[101px] w-full box-border min-h-[13px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
            <span className="preorder-now-1137-0 ">{text3}</span>
          </div>
        </section>
      </div>
    </div>
  );
};
export default ImageSection;
