import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Hero = ({
  image1 = images.image1,
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
  text4 = texts.text4,
  text5 = texts.text5,
  text6 = texts.text6,
  text7 = texts.text7,
  text8 = texts.text8,
  text9 = texts.text9,
  text10 = texts.text10,
}) => {
  return (
    <div className="wrapper-div-124 px-4  md:px-2 relative m-auto p-[0px] box-border">
      <div className=" max-w-[1242px] w-full  box-border min-h-[717px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col md:flex-row justify-center items-center gap-[50px] p-[40px_0px_40px__0px]  ">
        {/* Frame 701 */}
        <div className=" w-full   box-border min-h-[545px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[63px] p-[0px_0px_0px__0px]  ">
          <div className=" w-full box-border opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-end items-start gap-[25px] p-[0px_0px_0px__0px]  ">
            <div className=" w-full box-border opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
              <span className="elevate-your-sp-127-0 text-[30px] md:text-[42px] ">{text1}</span>
            </div>
            <div className="  w-full box-border opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
              <span className="discover-the-be-128-0 ">{text2}</span>
            </div>
            <div className=" w-full box-border opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-start items-end gap-[64px] p-[0px_0px_0px__0px]  ">
              <div className=" max-w-[131px] w-full box-border  opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[10px_0px_10px__0px] rounded-tl-[9px] rounded-tr-[9px] rounded-br-[9px] rounded-bl-[9px] bg-[#3c3228ff]  ">
                <div className=" max-w-[89px] w-full box-border min-h-[28px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                  <span className="shop-now-131-0 ">{text3}</span>
                </div>
              </div>
              <div className=" w-full box-border min-h-[28px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="watch-demo-132-0 ">{text4}</span>
              </div>
            </div>
          </div>
          <div className=" flex-col  md:flex-row w-full box-border opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-start items-center gap-[15px] md:gap-[30px] p-[0px_0px_0px__0px]  ">
            <div className=" max-w-[124px] w-full box-border opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[-20px] p-[0px_0px_0px__0px]  ">
              <div className=" max-w-[95px] w-full box-border opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px]   ">
                <div className=" max-w-[75px] w-full box-border min-h-[33px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                  <span className="c-2500-136-0 ">{text5}</span>
                </div>
              </div>
              <div className=" max-w-[124px] w-full box-border min-h-[44px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px]   ">
                <div className=" max-w-[104px]  w-full box-border min-h-[24px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                  <span className="unique-styles-138-0 ">{text6}</span>
                </div>
              </div>
            </div>
            <div className=" max-w-[124px] w-full box-border min-h-[77px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[-20px] p-[0px_0px_0px__0px]  ">
              <div className=" max-w-[96px] w-full box-border min-h-[33px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px]   ">
                <div className=" max-w-[76px] w-full box-border min-h-[33px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                  <span className="c-3000-141-0 ">{text7}</span>
                </div>
              </div>
              <div className=" max-w-[163px] w-full box-border min-h-[44px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[10px_0px_10px__0px]  ">
                <div className=" max-w-[141px] w-full box-border min-h-[24px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                  <span className="happy-customers-143-0 ">{text8}</span>
                </div>
              </div>
            </div>
            <div className=" max-w-[124px] w-full box-border min-h-[77px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[-20px] p-[0px_0px_0px__0px]  ">
              <div className=" max-w-[70px] w-full box-border min-h-[33px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px]  ">
                <div className=" max-w-[50px] w-full box-border min-h-[33px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                  <span className="c-100-146-0 ">{text9}</span>
                </div>
              </div>
              <div className=" max-w-[143px] w-full box-border min-h-[44px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[10px_0px_10px__0px]  ">
                <div className=" max-w-[128px] w-full box-border min-h-[24px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                  <span className="certified-outle-148-0 ">{text10}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[499px] md:w-[899px]  max-w-[100%] min-h-[637px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden rounded-tl-[29px] rounded-tr-[29px] rounded-br-[29px] rounded-bl-[29px]  ">
          <img
            src={`${image1}`}
            className="absolute  bg-transparent bg-center bg-no-repeat w-full h-full bg-cover nodeBg-149 "
            alt="Rectangle 11 Image"
          />{" "}
        </div>
      </div>
    </div>
  );
};
export default Hero;
