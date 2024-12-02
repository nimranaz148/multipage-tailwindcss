import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import ServicesCard from "./ServicesCard";

function Services() {
  return (
    <>
      <section className="w-full h-[1742px] pt-[112px]">
        <div className="w-[768px flex-col justify-center items-center]">
          <h1 className="font-bold text-[56px] leading[67px] text-center">
            Courses
          </h1>
          <p className="font-normal text-[18px] leading-[27px] text-center pt-[24px]">
            Your Ultimate Guide to learning
          </p>
        </div>

        <div className="w-full h-[90px] flex justify-between items-center pl-[408px]">
          <ul className="w-[400px] h-[90px] flex gap-[24px] justify-between items-center">
            <Link
              href={"#!"}
              className="font-bold underline underline-offset-[8px]"
            >
              <li>Popular</li>
            </Link>
            <Link href={"#!"}>
              <li>Recommended</li>
            </Link>
            <Link href={"#!"}>
              <li>Best Price</li>
            </Link>
          </ul>
        </div>

        <div className="w-full flex mt-[104px] flex-wrap">
          <div className="flex flex-wrap gap-9">
            <ServicesCard />
          </div>

          <div className="flex justify-center items-center pt-[64px] pl-[550px]">
            <Button className="bg-white border-[1px] border-[black] text-black hover:bg-transparent">
              View All Courses
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
