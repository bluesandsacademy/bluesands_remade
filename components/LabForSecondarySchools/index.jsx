import Image from "next/image";

const content = [
  {
    title: "3D Virtual Experiments & Immersive Interaction",
    description:
      "Achieve your learning outcomes with Blue Sands STEM Lab, offering interactive 3D science experiments and realistic lab simulations that enhance time management, lab skills, and knowledge across any STEM curriculum.",
    img: "/students/stock_4.png",
  },
  {
    title: "Curriculum Aligned Content",
    description:
      "Blue Sands STEM Lab offers thousands of virtual and augmented reality resources to enhance lessons across any science related subject.",
    img: "/students/stock_2.png",
  },
  {
    title: "Accessible Anywhere, Tablet or PC",
    description:
      "Experience immersive STEM education through Blue Sands STEM Labs. Whether on a tablet or PC, our platform is designed for seamless access, engaging students wherever they are.",
    img: "/students/tablet.png",
  },
  {
    title:
      "Unlimited Hands-On Practice; Overcoming Resource Limitations with Virtual Labs",
    description:
      "Blue Sands STEM Lab provides easy-to-use VR tools for unlimited lab practice, letting students master STEM concepts through immersive, repeatable virtual experiments without resource constraints.",
    img: "/students/stock_3.png",
  },
];

export default function LabForSecondarySchools() {
  return (
    <div className="w-full  h-full bg-[url('/background/blocks.png')] bg-cover bg-center py-10 md:px-10 px-4 flex items-center justify-center">
      <div className="container md:h-fit h-full mx-auto flex md:flex-row flex-col items-center md:items-start justify-between gap-10">
        <div className="md:w-4/12 w-full h-full md:mt-20 mt-0 md:text-left text-center">
          <h3 className="md:text-4xl text-3xl font-bold relative">
            <Image
              src="/icons/little vr user 3.png"
              alt="VR"
              width={50}
              height={50}
              className="absolute top-0 left-0 md:block hidden"
            />
            <span className="md:inline-flex hidden">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>{" "}
            Blue Sands Virtual Science Lab for Secondary Schools
            <span className="md:hidden inline-flex">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <Image
              src="/icons/little vr user 3.png"
              alt="VR"
              width={50}
              height={50}
              className="absolute bottom-1 right-5 md:hidden inline-flex"
            />
          </h3>
          <p className="text-md">
            Blue Sands STEM Lab provides everything teachers need to boost
            student engagement and bring virtual reality into the classroom.
          </p>
        </div>
        <div className="md:w-8/12 w-full h-full grid md:grid-cols-2 grid-cols-1 gap-5">
          {content.map((item, index) => (
            <div
              key={index}
              className="md:w-[350px] w-full h-auto rounded-md flex flex-col"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={250}
                height={250}
                className="object-contain h-full w-full"
              />
              <h4 className="md:text-xl text-lg font-bold mt-2">
                {item.title}
              </h4>
              <p className="text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
