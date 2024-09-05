import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Physics() {
  return (
    <main className="w-full h-full">
      <Navbar />
      <div className="w-full md:h-[600px] h-full bg-white">
        <div className="w-full h-full container flex flex-col md:flex-row mx-auto py-10 justify-between md:px-10 px-2">
          <div className="w-full h-full flex items-center justify-center gap-3">
            <div className="w-fit h-full flex items-center justify-center p-3 rounded-md relative">
              <Image
                src="/labs/physics_01.png"
                alt="Virtual Physics Lab"
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
                VIRTUAL PHYSICS LAB
                {/* <Image
                    src="/icons/little child vr user.png"
                    alt="Little Child VR User"
                    width={80}
                    height={80}
                    className="absolute bottom-1 right-4 md:hidden block"
                  /> */}
              </h3>
              <p className="text-xl font-bold">General Physics I</p>
              <p className="md:text-lg text-md md:text-left text-center">
                Join the immersive journey through the world of Physics,
                mastering foundational concepts like forces, energy, and wave
                dynamics through cutting-edge virtual simulations.
              </p>
              <p className="md:text-lg text-md md:text-left text-center">
                Discover the physics universe and unravel the mysteries of
                motion, energy, and gravitation! In this course, you'll explore
                fundamental physics concepts comprehensively, from the basics of
                scalars and vectors to the complexities of gravitational fields
                and satellite orbits. Our virtual simulations provide a unique,
                interactive learning environment where you can apply theoretical
                knowledge to practical scenarios, enhancing your understanding
                and retention of crucial physics principles.
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
                <li>
                  Differentiate between scalar and vector quantities and apply
                  scalar and vector products
                </li>
                <li>
                  Explain gravitational fields, and gravitational potential, and
                  apply Newton's law of gravitation
                </li>
                <li>
                  Explain gravitational fields, and gravitational potential, and
                  apply Newton's law of gravitation
                </li>
                <li>
                  Describe satellite orbits and apply Kepler's laws of planetary
                  motion
                </li>
                <li>
                  Analyze static equilibrium and calculate stress, strain, and
                  Young's modulus
                </li>
                <li>
                  Understand the principles of simple harmonic motion and the
                  characteristics of progressive and sound waves
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
                src="/labs/physics_02.png"
                alt="Virtual Physics Lab"
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
