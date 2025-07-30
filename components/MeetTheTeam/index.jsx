import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const teamData = [
  {
    fullName: "Alero Thompson",
    role: "Co-Founder/CEO",
    image: "/team/alero.png",
    bio: "Alero Thompson, the ​Founder/CEO, conquered gender ​bias in education with help from her ​aunt. She mentors women and girls ​in technology after obtaining a ​software engineering certification.",
    linkedIn: "#",
  },
  {
    fullName: "Kingsley Okechukwu",
    role: "Co-Founder/CTO",
    image: "/team/kingsley.jpeg",
    bio: "He leads the software development ​team, concentrating on creating, testing, ​and managing robust and scalable ​software solutions for virtual labs and ​AI-driven apps.",
    linkedIn: "#",
  },
  {
    fullName: "Samuel Dike",
    role: "COO",
    image: "/team/samuel.png",
    bio: "He brings tech expertise from global ​organizations to enhance Blue Sands ​Academy's technical foundation for ​impactful educational technology ​innovations.",
    linkedIn: "#",
  },
];

export default function MeetTheTeam() {
  return (
    <div
      className="w-full flex flex-col items-center justify-center h-full bg-white
       md:px-10 px-4 py-10 space-y-5"
    >
      <div className="container mx-auto flex flex-col items-start justify-center h-full">
        <h3 className="text-3xl font-bold">Get to know our amazing Team</h3>
        <p>
          We have a rich diverse team with decades of industry experience that
          brings a unique perspective to our work.
        </p>
      </div>
      <div className="flex gap-x-3 md:flex-row flex-col items-start gap-5 justify-center h-full w-full">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center h-full md:w-3/12 w-full gap-2"
          >
            <Image
              src={member.image}
              alt={member.fullName}
              width={300}
              height={300}
              className="w-full h-80 rounded-md border border-gray-200 object-cover object-top"
            />
            <div className="flex flex-row items-center justify-between h-full w-full">
              <h3 className="text-xl font-bold">{member.fullName}</h3>
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6 text-blue-700" />
              </a>
            </div>
            <p className="text-blue-600 font-semibold">{member.role}</p>
            <p className="text-gray-600 text-md">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
