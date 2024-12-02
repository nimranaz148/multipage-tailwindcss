import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { testimonialData } from "@/constant/testimonialcard";

import React from 'react'

function Testimonial() {
  return (
    <>
     <>
      <section className="
      w-full 
      px-[24px] xsm:px-[64px] 
      py-[112px]
      ">
        <h1 className="my_h1 mb-[24px]">Customer testimonials</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        {/* Cards div */}
        <div className="mt-[80px] w-full flex gap-[32px] flex-row overflow-x-auto">
          
           {/* Card */}
          {testimonialData.map((item,index)=>{return (
            <div className="shrink-0 grow-0 p-[32px] w-[362px] border-[1px] border-black" key={index}>
            <div className="flex gap-1 mb-[24px]">
              <FaStar size={20}/>
              <FaStar size={20}/>
              <FaStar size={20}/>
              <FaStar size={20}/>
              <FaStar size={20}/>
            </div>

            <p className="mb-[24px]">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>

            <div className="flex gap-[20px]">
              <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
                <Image src={item.src} alt="team3" width={56} height={56}></Image>
              </div>

              <div className="h-full flex flex-col justify-start">
                <p>{item.name}</p>
                <p>{item.title}</p>
              </div>
            </div>
          </div>
          )})}
        
        </div>
      </section>
    </>
      
    </>
  )
}

export default Testimonial


























      



