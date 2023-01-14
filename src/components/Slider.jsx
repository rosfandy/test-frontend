import React, { useState, useEffect } from "react";
import HeroSlider, { Overlay, Slide, Nav } from "hero-slider";

const slider = [
  {
    url: "https://ik.imagekit.io/rosfandy/slider/slider-0",
    desc: "this is a place where technology & creativity fused into digital chemistry",
  },
  {
    url: "https://ik.imagekit.io/rosfandy/slider/slider-1",
    desc: "we don't have the best but we have the greatest team",
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(1);
  console.log("current: ", currentIndex);
  const newSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider w-full h-screen ">
      <HeroSlider
        data-aos="fade-up"
        height={"100vh"}
        className="w-[100%]"
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 50,
          onSliding: (nextSlide) => {
            newSlide(nextSlide);
            console.log("onSliding(nextSlide): ", nextSlide);
          },
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.log(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.log("onAfterSliding: ", nextSlide),
        }}
      >
        {slider.map((slideImage, index) => {
          return (
            <div className="" key={index}>
              <Slide
                background={{
                  backgroundImageSrc: slideImage.url,
                }}
              >
                <div
                  className="text-white md:text-[28px] text-[24px] md:left-[10%] min-[1440px]:w-[50%] md:w-[80%] min-[1440px]:top-[60%] min-[375px]:top-[55%] top-[50%] absolute  uppercase font-bold bg-black/50 md:py-8 px-12 duration-500"
                  data-aos="fade-up"
                >
                  {slider[index].desc}
                </div>
              </Slide>
            </div>
          );
        })}
      </HeroSlider>
      {/* Custom Indicator */}
      <div className="absolute z-[9999] top-[100%] w-full ">
        <div className="flex justify-center ">
          {slider.map((slide, slideIndex) => {
            return (
              <div className="">
                <div className="flex justify-center w-[6vh]">
                  <div
                    key={slideIndex}
                    className={
                      slideIndex === currentIndex - 1
                        ? "active bg-white indicator rounded-[50%] cursor-pointer w-4 h-4"
                        : "indicator bg-white/30 rounded-[50%] cursor-pointer w-4 h-4"
                    }
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
