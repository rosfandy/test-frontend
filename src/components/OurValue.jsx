import { useEffect } from "react";
import { FaBalanceScale, FaLandmark, FaLightbulb } from "react-icons/fa";
export default function OurValue() {
  return (
    <div className="our-value flex flex-col w-full items-center py-20">
      <div data-aos="fade-up" className="uppercase font-bold text-3xl">
        Our Values
      </div>
      <div className="flex lg:flex-row min-[320px]:flex-col min-[320px]:mx-4 md:mx-40 lg:mx-0 min-[1440px]:px-32 lg:px-4 py-8">
        <div data-aos="fade-up" className="flex">
          <div className="bg-[#EC7A71] border-red-700 border-[2px] gap-y-3 py-8 items-center flex flex-col">
            <FaLightbulb className="text-[24px] text-white" />
            <div className="uppercase font-bold text-white">innovative</div>
            <div className="md:px-8 min-[320px]:px-4 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              pariatur harum doloremque iusto ipsa dolorem commodi quisquam
              error autem ipsam. Nesciunt adipisci optio aut eum debitis
              explicabo saepe atque voluptatum.
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className=" lg:flex flex-col items-center justify-center min-[320px]:mt-[-1.5vh] min-[320px]:w-full lg:w-auto min-[320px]:text-center"
        >
          <div class="w-11  overflow-hidden inline-block lg:rotate-0 min-[320px]:rotate-90">
            <div class=" h-16 bg-red-700 rotate-45 transform origin-top-left"></div>
          </div>
        </div>

        <div data-aos="fade-up" className="flex">
          <div className="bg-[#699971] border-green-700 border-[2px] gap-y-3 py-8 items-center flex flex-col">
            <FaLandmark className="text-[24px] text-white" />
            <div className="uppercase font-bold text-white">Loyalty</div>
            <div className="md:px-8 min-[320px]:px-4 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              dolorem sed commodi laudantium ullam neque soluta id ad corporis
              tempore. Veritatis iste nihil sequi nulla architecto eum placeat
              itaque ratione.
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className=" lg:flex flex-col items-center justify-center min-[320px]:mt-[-1.5vh] min-[320px]:w-full lg:w-auto min-[320px]:text-center"
        >
          <div class="w-11  overflow-hidden inline-block lg:rotate-0 min-[320px]:rotate-90 ">
            <div class=" h-16  bg-green-700 rotate-45 transform origin-top-left"></div>
          </div>
        </div>

        <div data-aos="fade-up" className="flex">
          <div className="bg-[#5596C4] border-blue-500 border-[2px] gap-y-3 py-8 items-center flex flex-col">
            <FaBalanceScale className="text-[24px] text-white" />
            <div className="uppercase font-bold text-white">Respect</div>
            <div className="md:px-8 min-[320px]:px-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique nam doloremque quaerat sit animi labore fuga sunt
              consequuntur excepturi in, atque adipisci facere recusandae neque
              iste cum modi deserunt eos.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center"></div>
        </div>
      </div>
    </div>
  );
}
