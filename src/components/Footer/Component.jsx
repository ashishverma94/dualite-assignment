import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Footer = ({ text1 = texts.text1, text2 = texts.text2 }) => {
  return (
    <div className="wrapper-div-1138 mt-[40px] relative m-auto p-[0px] box-border">
      <div className=" max-w-[1242px] w-full box-border min-h-[282px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-center items-center gap-[67px] p-[0px_0px_0px__0px] bg-[#f0f0f0ff]  ">
        {/* Frame 501 */}
        <section className=" max-w-[248px] w-full box-border min-h-[115px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[25px] p-[0px_0px_0px__0px]  ">
          <div className=" max-w-[191px] w-full box-border min-h-[24px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
            <span className="urban-nest-1140-0 ">{text1}</span>
          </div>
          <div className=" max-w-[248px] w-full box-border min-h-[66px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
            <span className="transform-your--1141-0 ">{text2}</span>
          </div>
        </section>
        {/* Social1 */}
        <section className=" w-[148px] min-h-[28px] opacity-[1] z-[1]  rotate-[0deg]  ">
          <div className=" w-[28px] min-h-[28px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
            <div className=" w-[28px] min-h-[28px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   rounded-full bg-[#ffffffff] box-border border-l-[1px] border-l-[#00000033] border-r-[1px] border-r-[#00000033] border-t-[1px] border-t-[#00000033] border-b-[1px] border-b-[#00000033]   absolute "></div>
            <div className=" w-[11.17px] min-h-[9.03px] top-[9.94px] left-[9.03px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
              <div className=" w-[11.17px] min-h-[9.03px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                <div className=" w-[11.17px] max-w-[100%] min-h-[9.03px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-1147 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[28px] min-h-[28px] top-[0px] left-[40px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
            <div className=" w-[28px] min-h-[28px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   rounded-full bg-[#000000ff]   absolute "></div>
            <div className=" w-[6.32px] min-h-[12.17px] top-[8.13px] left-[10.84px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
              <div className=" w-[6.32px] min-h-[12.17px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                <div className=" w-[6.32px] max-w-[100%] min-h-[12.17px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-1152 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[28px] min-h-[28px] top-[0px] left-[80px] opacity-[1] z-[2]  rotate-[0deg]   absolute ">
            <div className=" w-[28px] min-h-[28px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   rounded-full bg-[#ffffffff] box-border border-l-[1px] border-l-[#00000033] border-r-[1px] border-r-[#00000033] border-t-[1px] border-t-[#00000033] border-b-[1px] border-b-[#00000033]   absolute "></div>
            <div className=" w-[13.55px] min-h-[13.55px] top-[7.23px] left-[7.23px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
              <div className=" w-[13.55px] min-h-[13.55px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                <div className=" w-[13.55px] max-w-[100%] min-h-[13.55px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-1157 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
                <div className=" w-[6.96px] max-w-[100%] min-h-[6.96px] top-[3.3px] left-[3.3px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-1158 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
                <div className=" w-[1.63px] max-w-[100%] min-h-[1.63px] top-[2.35px] left-[9.58px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-1159 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[28px] min-h-[28px] top-[0px] left-[120px] opacity-[1] z-[3]  rotate-[0deg]   absolute ">
            <div className=" w-[28px] min-h-[28px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   rounded-full bg-[#ffffffff] box-border border-l-[1px] border-l-[#00000033] border-r-[1px] border-r-[#00000033] border-t-[1px] border-t-[#00000033] border-b-[1px] border-b-[#00000033]   absolute "></div>
            <div className=" w-[12.96px] min-h-[12.65px] top-[7.23px] left-[8.13px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
              <div className=" w-[12.96px] min-h-[12.65px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                <div className=" w-[12.96px] max-w-[100%] min-h-[12.65px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-1164 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Footer;
