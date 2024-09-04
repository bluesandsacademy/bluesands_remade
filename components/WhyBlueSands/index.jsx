import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const answers = [
  "Interactive VR & AR STEM Learning.",
  "Improved Student Engagement & Performance.",
  "Teacher-Friendly Tools & Support.",
  "Flexible Access via Tablet or PC.",
];

export default function WhyBlueSands() {
  return (
    <div className="w-full py-10 h-full bg-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-center gap-5">
        <div className="md:w-6/12 w-full">
          <div className="md:w-[70%] w-full h-full p-3 relative bg-[#F5F8FE]">
            <Image
              src="/icons/star.png"
              alt="Star Icon"
              width={150}
              height={150}
              className="absolute md:-top-5 md:-left-5 -top-3 left-5 md:w-[150px] w-[100px]"
            />
            <Image
              src="/stock/man sitting with laptop.png"
              alt="man sitting with laptop"
              width={500}
              height={500}
              className="mx-auto md:block hidden"
            />
            <Image
              src="/stock/man using vr.png"
              alt="man using vr"
              width={300}
              height={300}
              className="mx-auto md:hidden block"
            />
          </div>
        </div>
        <div className="md:w-6/12 w-full space-y-5 p-2">
          <h3 className="md:text-7xl text-4xl font-normal relative text-center md:text-left">
            Why Blue <br className="md:block hidden" /> Sands STEM Labs?
            <Image
              src="/icons/little vr user 2.png"
              alt="Little VR User"
              width={150}
              height={150}
              className="absolute -top-8 left-[20rem] md:block hidden"
            />
          </h3>
          <p className="text-md text-center md:text-left">
            Blue Sands STEM Labs is committed to transforming STEM education
            through innovative and engaging virtual experiences. Here’s what
            sets us apart:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {answers.map((answer, index) => (
              <div key={index} className="flex gap-5 items-center">
                <span className="bg-blue-200/30 rounded-full p-2">
                  <FaCheck className="text-blue-500 text-sm" />
                </span>
                <p className="text-md">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
