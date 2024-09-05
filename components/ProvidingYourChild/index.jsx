import Image from "next/image";

export default function ProvidingYourChild() {
  return (
    <div className="w-full py-10 h-full bg-white mx-auto">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center gap-5">
        <div className="md:w-6/12 w-full space-y-5 p-2 flex items-center flex-col justify-center">
          <h3 className="md:text-5xl text-4xl font-semibold relative text-center md:text-left">
            Providing the Educational Edge Your Child Requires for Success
          </h3>
          <p className="text-xl text-center md:text-left">
            Providing the educational edge your child needs, Blue Sands STEM
            Labs enhances teaching with immersive VR experiences that boost
            knowledge retention by up to 75%. Research shows that students
            retain up to 90% of what they experience compared to just 10% of
            what they read. 
          </p>
          <p className="text-xl text-center md:text-left">
            Blue Sands STEM Labs solution is designed to engage students,
            improve classroom interaction, and can even increase exam
            performance by up to 20%, offering curriculum-aligned lessons and
            the tools educators need to drive success.
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
