import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <div
      data-aos="fade-up"
      className="footer bg-[#333333] items-center text-center text-white w-full flex flex-col gap-y-4 py-12"
    >
      <div className="">Copyright © 2016. PT Company</div>
      <div className="flex flex-row justify-center gap-x-2 text-[24px]">
        <FaFacebookSquare />
        <FaTwitter />
      </div>
    </div>
  );
}
