import { brandLogos } from "@/utils/data/sample";
import Image from "next/image";
export default function Brands() {
    return (
        <div className="block md:px-10 px-0 md:py-10 py-0 bg-white w-full overflow-y-scroll">
            <div className="w-full flex items-center justify-center bg-[#F5F8FE] h-40 rounded-lg">
                {brandLogos.map((logo, index) => (
                    <div key={index} className={`w-full h-24 flex items-center justify-center ${index !== brandLogos.length - 1 ? 'border-r border-gray-300' : ''}`}>
                        <Image src={logo} alt="Brand" width={100} height={100} />
                    </div>
                ))}
            </div>
        </div>
    )
}