import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Chemistry() {
  return (
    <main className="w-full h-full">
      <Navbar />
      <div className="w-full md:h-[600px] h-full bg-white">
        <div className="w-full h-full container flex flex-col md:flex-row mx-auto py-10 justify-between md:px-10 px-2">
          <div className="w-full h-full flex items-center justify-center gap-3">
            <div className="w-fit h-full flex items-center justify-center p-3 rounded-md relative">
              <Image
                src="/labs/chem lab.png"
                alt="Virtual Chemistry Lab"
                width={500}
                height={500}
                className="object-contain h-full w-full"
              />
            </div>
          </div>
          <div className="md:w-[65%] w-full h-fit flex flex-col justify-between md:items-start items-center gap-5">
            <div className="space-y-3">
              <h3 className="md:text-5xl text-3xl font-bold relative md:text-left text-center">
                {/* <Image
                  src="/icons/little child vr user.png"
                  alt="Little Child VR User"
                  width={100}
                  height={100}
                  className="absolute -top-2 right-5 md:block hidden"
                /> */}
                Virtual Chemistry <br className="md:hidden block" /> Lab{" "}
                <span className="bg-blue-500 text-white px-5 py-1 rounded-full inline-flex items-center gap-x-2 mx-2 shadow-md">
                  <FaArrowRightLong
                    className="inline-block text-white"
                    size={40}
                  />{" "}
                </span>
                {/* <Image
                    src="/icons/little child vr user.png"
                    alt="Little Child VR User"
                    width={80}
                    height={80}
                    className="absolute bottom-1 right-4 md:hidden block"
                  /> */}
              </h3>
              <p className="md:text-lg text-md md:text-left text-center">
                Examine the essentials of chemistry with General Chemistry I,
                covering atomic structure, chemical bonds, stoichiometry, gas
                laws, and more through interactive virtual labs.
              </p>
              <p className="md:text-lg text-md md:text-left text-center">
                General Chemistry I serves as an introductory survey of the
                fundamental concepts in chemistry, providing a foundational
                understanding for students. It covers a broad range of topics
                designed to introduce the principles and methodologies that
                underpin the discipline  You can begin a comprehensive
                exploration of the basic principles that form the backbone of
                the chemical sciences. Through a series of engaging virtual lab
                simulations, learners will gain hands-on experience with atomic
                structure, chemical bonding, stoichiometry, gas laws, solution
                chemistry, and calorimetry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:h-[600px] h-full bg-[#F5F8FE]">
        <div
          className="w-full h-full container flex flex-col-reverse
         md:flex-row mx-auto py-10 justify-between md:px-10 px-2"
        >
          <div className="md:w-[65%] w-full h-fit flex flex-col justify-between md:items-start items-center gap-5">
            <div className="space-y-3">
              <h3 className="md:text-5xl text-3xl font-bold relative md:text-left text-center">
                Learning Objectives
                {/* <Image
                    src="/icons/little child vr user.png"
                    alt="Little Child VR User"
                    width={80}
                    height={80}
                    className="absolute bottom-1 right-4 md:hidden block"
                  /> */}
              </h3>
              <ul className="list-disc list-inside md:text-lg text-md">
                <li>Explain the structure of atoms and the periodic table</li>
                <li>
                  {" "}
                  Distinguish between ionic and covalent bonds and predict
                  compound properties
                </li>
                <li>
                  {" "}
                  Apply stoichiometry to balance chemical equations and perform
                  mass-to-mole conversions
                </li>
                <li>
                  Describe the properties of gases and the laws that govern them
                </li>
                <li>
                  Prepare solutions of specific concentrations and understand
                  solution chemistry fundamentals
                </li>
                <li>
                  {" "}
                  Use calorimetry to measure the enthalpy changes in chemical
                  reactions
                </li>
              </ul>
              <button className="text-blue-500 hover:underline rounded-md">
                Book A Free Demo
              </button>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center gap-3">
            <div className="w-fit h-full flex items-center justify-center p-3 rounded-md relative">
              <Image
                src="/labs/beaker with chem.png"
                alt="Virtual Biology Lab"
                width={500}
                height={500}
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
