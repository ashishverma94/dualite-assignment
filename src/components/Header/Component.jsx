import React, { useEffect, useRef } from "react";
import "./css/style.css";

import texts from "./data/texts";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Header = ({
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
  text4 = texts.text4,
  text5 = texts.text5,
  text6 = texts.text6,
  text7 = texts.text7,
}) => {
  return (
    <div className="wrapper-div-14 flex gap-2  w-full flex-col md:flex-row justify-center items-center p-[0px] box-border">
      {/* Frame 151 */}

      <section className=" text-center w-full max-w-[192px] box-border min-h-[47px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[363px] p-[0px_0px_0px__0px]  ">
        <div className=" max-w-[180px] w-full box-border min-h-[47px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[19.41px] p-[0px_0px_0px__0px]  ">
          <div className=" max-w-[180px] w-full box-border min-h-[47px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]  ">
            <span className="urban-nest-17-0 ">{text1}</span>
          </div>
        </div>
      </section>
      {/* Frame 641 */}
      <section className=" w-full box-border min-h-[23px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap md:flex-nowrap  justify-center gap-2 items-center md:gap-[30px] p-[0px_0px_0px__0px]  ">
        <div className=" max-w-[78px] w-full box-border min-h-[23px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
          <span className="furniture-19-0 ">{text2}</span>
        </div>
        <div className=" max-w-[74px] w-full box-border min-h-[23px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
          <span className="outdoor-110-0 ">{text3}</span>
        </div>
        <div className=" max-w-[81px] w-full box-border min-h-[23px] opacity-[1] z-[2]  rotate-[0deg]   text-left leading-[0px]  ">
          <span className="lightning-111-0 ">{text4}</span>
        </div>
        <div className=" max-w-[68px] w-full box-border min-h-[23px] opacity-[1] z-[3]  rotate-[0deg]   text-left leading-[0px]  ">
          <span className="dinning-112-0 ">{text5}</span>
        </div>
        <div className=" max-w-[98px] w-full box-border min-h-[23px] opacity-[1] z-[4]  rotate-[0deg]   text-left leading-[0px]  ">
          <span className="bathrooms-113-0 ">{text6}</span>
        </div>
        <div className=" max-w-[145px] w-full box-border min-h-[23px] opacity-[1] z-[5]  rotate-[0deg]   text-left leading-[0px]  ">
          <span className="mirrors--decors-114-0 ">{text7}</span>
        </div>
      </section>
      {/* Frame 651 */}
      <section className=" max-w-[222.03px] w-full box-border min-h-[24.03px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[42px] p-[0px_0px_0px__0px]  ">
        <div className=" w-[24.03px] min-h-[24.03px] opacity-[1] z-[0]  rotate-[0deg]  ">
          <div className=" w-[24.03px] max-w-[100%] min-h-[24.03px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
            <div className="nodeBg-117 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
          </div>
        </div>
        <div className=" w-[24px] min-h-[24px] opacity-[1] z-[1]  rotate-[0deg]  ">
          <div className=" w-[24px] max-w-[100%] min-h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
            <div className="nodeBg-119 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
          </div>
        </div>
        <div className=" w-[24px] max-w-[100%] min-h-[24px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden  ">
          <div className="nodeBg-120 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
        </div>
        <div className=" w-[24px] min-h-[24px] opacity-[1] z-[3]  rotate-[0deg]   overflow-hidden  ">
          <div className=" w-[12px] max-w-[100%] min-h-[12px] top-[0px] left-[6px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
            <div className="nodeBg-122 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
          </div>
          <div className=" w-[18px] max-w-[100%] min-h-[10px] top-[14px] left-[3px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden   absolute ">
            <div className="nodeBg-123 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Header;
