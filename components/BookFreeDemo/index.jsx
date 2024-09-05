import Image from "next/image";

export default function BookFreeDemo() {
  return (
    <div className="w-full h-full bg-white">
      <div className="w-full h-full container flex flex-col md:flex-row mx-auto py-10 justify-between md:px-10 px-2">
        <div className="w-full h-full flex items-center justify-center gap-3">
          <div className="w-fit h-full mr-auto flex items-center justify-center bg-[#F5F8FE] p-3 rounded-md relative">
            <Image
              src="/icons/star.png"
              alt="Star Icon"
              width={150}
              height={150}
              className="absolute md:-top-5 md:-left-5 -top-3 left-5 md:w-[150px] w-[100px]"
            />
            <Image
              src="/feature/lab.png"
              alt="Blue Sands STEM Labs"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className=" w-full h-fit flex flex-col justify-between md:items-start items-center gap-5">
          <div className="space-y-5">
            <h3 className="md:text-5xl text-3xl font-bold relative md:text-left text-center">
              <Image
                src="/icons/little child vr user.png"
                alt="Little Child VR User"
                width={100}
                height={100}
                className="absolute -top-2 -left-9 md:block hidden"
              />
              <span className="md:inline-flex hidden">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              Explore the Power of Blue Sands STEM Labs
              <Image
                src="/icons/little child vr user.png"
                alt="Little Child VR User"
                width={80}
                height={80}
                className="absolute bottom-1 right-4 md:hidden block"
              />
            </h3>
            <p className="font-bold md:text-2xl text-lg md:text-left text-center">
              Transforming STEM Education with cutting-edge virtual reality.
            </p>
            <p className="md:text-lg text-md md:text-left text-center">
              Blue Sands STEM Lab&apos;s virtual labs empower secondary schools
              across Nigeria, including rural areas with no internet access.
              With a student-friendly interface, real-world lab resources, and
              intuitive teacher controls, these labs improve retention, boost
              grades, and promote equitable learning outcomes nationwide.
            </p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md capitalize">
            Book a Free Demo
          </button>
        </div>
      </div>
    </div>
  );
}
