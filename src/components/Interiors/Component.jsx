import React, { useEffect, useRef } from "react";
import "./css/style.css";

import images from "./data/images";


const Interior = ({}) => {
  return (
    <div className="wrapper-div-159 relative m-auto p-[0px] box-border">
      <div className=" grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center  w-full box-border min-h-[813px] opacity-[1] z-[1]  rotate-[0deg]   justify-center items-center gap-[19px] p-[0px_0px_0px__0px]  ">
        {/* product 11 */}
        {images.map((item, key) => (
          <section className=" w-[305px] min-h-[403px] opacity-[1] z-[0]  rotate-[0deg]    ">
            <div className=" w-[305px] min-h-[403px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]     absolute ">
              <div className=" w-[285px] min-h-[383px] top-[10px] left-[10px] opacity-[1] z-[0]  rotate-[0deg]   rounded-tl-[9px] rounded-tr-[9px] rounded-br-[9px] rounded-bl-[9px] bg-[#f7f7f7ff] box-border border-l-[0.20000000298023224px] border-l-[#b8b8b8ff] border-r-[0.20000000298023224px] border-r-[#b8b8b8ff] border-t-[0.20000000298023224px] border-t-[#b8b8b8ff] border-b-[0.20000000298023224px] border-b-[#b8b8b8ff]   absolute "></div>
            </div>
            <div className=" w-[278px] min-h-[331px] top-[36px] left-[13px] opacity-[1] z-[1]  rotate-[0deg]     absolute ">
              <div className=" w-[198px] min-h-[47px] top-[-17px] left-[40px] opacity-[1] z-[0]  rotate-[0deg]     absolute ">
                <div className=" max-w-[178px] w-full box-border min-h-[27px] top-[12px] left-[10px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]   absolute ">
                  <span className="walnut-grace-ch-165-0 ">{item.heading}</span>
                </div>
              </div>
              <div className=" w-[278px] min-h-[278px] top-[44px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]     absolute ">
                <div className=" w-[258px] max-w-[100%] min-h-[258px] top-[10px] left-[10px] opacity-[1] z-[0]  rotate-[0deg]  scale-x-[-1]   overflow-hidden   absolute ">
                  <img
                    src={`${item.image}`}
                    className="absolute  bg-transparent bg-center bg-no-repeat w-full h-full bg-cover nodeBg-167 "
                    alt="furniture 1 11 Image"
                  />{" "}
                </div>
              </div>
              <div className=" max-w-[233px] w-full box-border min-h-[27px] top-[309px] left-[23px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-between items-center content-space-between p-[0px_0px_0px__0px]   absolute ">
                <div className=" max-w-[49px] w-full box-border min-h-[27px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                  <span className="chair-169-0 ">{item.name}</span>
                </div>
                <div className=" max-w-[45px] w-full box-border min-h-[27px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
                  <span className="c-3500-170-0 ">{item.price}</span>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
export default Interior;
