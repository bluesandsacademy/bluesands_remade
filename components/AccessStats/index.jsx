import Image from "next/image";
import { IoStar } from "react-icons/io5";

const labs = [
  {
    title: "Biology Online Labs",
    description:
      "There are many ways that VR can be used to teach science, but biology is an ideal subject for immersive learning experiences.",
    ratings: 4.5,
    reviews: 120,
    image: "/labs/biology.png",
  },
  {
    title: "Physics Online Labs",
    description:
      "There are many ways that VR can be used to teach science, but biology is an ideal subject for immersive learning experiences.",
    ratings: 4.5,
    reviews: 120,
    image: "/labs/physics.png",
  },
  {
    title: "Chemistry Online Labs",
    description:
      "There are many ways that VR can be used to teach science, but biology is an ideal subject for immersive learning experiences.",
    ratings: 4.5,
    reviews: 120,
    image: "/labs/chemistry.png",
  },
];

export default function AccessStats() {
  return (
    <div className="w-full mx-auto bg-white py-10">
      <div className="flex flex-col items-center justify-center gap-10">
        <h3 className="text-5xl font-semibold text-center relative md:block hidden">
          <Image
            src="/icons/little vr user 3.png"
            alt="science"
            className="absolute top-3 left-[5.8rem]"
            width={90}
            height={90}
          />
          Instant Access to 150+ Science <br /> Lab{" "}
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> Simulations &
          Counting
        </h3>
        <h3 className="text-3xl font-semibold text-center relative md:hidden block">
          <Image
            src="/icons/little vr user 3.png"
            alt="science"
            className="absolute top-6 left-[12.3rem]"
            width={50}
            height={50}
          />
          Instant Access to 150+ Science Lab
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> Simulations &
          Counting
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-3">
          {labs.map((lab, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4 p-3 w-full"
            >
              <Image
                src={lab.image}
                alt={lab.title}
                width={350}
                height={350}
                className="rounded-sm w-full h-full"
              />
              <div className="flex flex-col items-start">
                <h4 className="text-2xl font-normal">{lab.title}</h4>
                <p className="text-sm">{lab.description}</p>
              </div>
              <div className="flex items-center gap-2 justify-between w-full">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Enroll Now
                </button>
                <button className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded-md">
                  <IoStar className="text-blue-500" />
                  <span className="font-bold">{lab.ratings}</span>
                  <span className="text-sm text-gray-600">
                    ({lab.reviews} reviews)
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
