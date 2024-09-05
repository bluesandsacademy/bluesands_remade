import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Biology() {
  return (
    <main className="w-full h-full md:px-10 px-4">
      <Navbar />
      <div className="w-full md:h-[600px] h-full bg-white">
        <div className="w-full h-full container flex flex-col md:flex-row mx-auto py-10 justify-between md:px-10 px-2">
          <div className="w-full h-full flex items-center justify-center gap-3">
            <div className="w-fit h-full flex items-center justify-center p-3 rounded-md relative">
              <Image
                src="/labs/biology _microscope.png"
                alt="Virtual Biology Lab"
                width={500}
                height={500}
                className="object-contain h-full w-full"
              />
            </div>
          </div>
          <div className="md:w-[65%] w-full h-fit flex flex-col justify-between md:items-start items-center gap-5">
            <div className="space-y-3">
              <h3 className="md:text-5xl text-3xl font-bold relative md:text-left text-center">
                <Image
                  src="/icons/little child vr user.png"
                  alt="Little Child VR User"
                  width={100}
                  height={100}
                  className="absolute -top-2 right-5 md:block hidden"
                />
                Virtual Biology Lab
                {/* <Image
                    src="/icons/little child vr user.png"
                    alt="Little Child VR User"
                    width={80}
                    height={80}
                    className="absolute bottom-1 right-4 md:hidden block"
                  /> */}
              </h3>
              <p className="md:text-lg text-md md:text-left text-center">
                Master the full spectrum of foundational biological concepts
                from the chemical and molecular basis of life to genetic
                engineering. Embark on an in-depth exploration into the building
                blocks of life. This course aims to equip students with an
                understanding of key biological concepts, from the chemical
                foundation of life to advanced topics in biotechnology and
                genomics. Through a series of interactive virtual simulations,
                students will analyze cellular structures, decipher metabolic
                pathways, and explore the mechanisms of gene expression and
                inheritance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:h-[600px] h-full bg-white">
        <div className="w-full h-full container flex flex-col-reverse
         md:flex-row mx-auto py-10 justify-between md:px-10 px-2">
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
                src="/labs/biology_learning_objectives.png"
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
