import Image from "next/image";

export default function ProvidingYourChild() {
  return (
    <div className="w-full py-10 h-full bg-white mx-auto">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center gap-5">
        <div className="md:w-6/12 w-full space-y-5 p-2 flex items-center flex-col justify-center">
          <h3 className="md:text-5xl text-4xl font-semibold relative text-center md:text-left">
            Give your child a head start with Blue Sands STEM Labs&apos; VR Learning.
          </h3>
          <p className="text-xl text-center md:text-left">
            Our immersive experiences improve knowledge retention by up to 75%
            and boost engagement and exam performance by 20%, all while
            following curriculum standards.
          </p>
        </div>
        <div className="md:w-6/12 w-full">
          <div className="md:w-[70%] w-full ml-auto h-full p-3 relative bg-[#F5F8FE]">
            <Image
              src="/stock/parent with child.png"
              alt="man sitting with laptop"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
