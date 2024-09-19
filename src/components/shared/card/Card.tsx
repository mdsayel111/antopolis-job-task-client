import { TAnimal } from "@/types/animal";
import Image from "next/image";

const Card = ({data}: {data: TAnimal}) => {
    return (
        <div className="bg-[#050505] p-8 rounded-xl flex flex-col space-y-4 items-center">
            <div className="w-32 h-40 relative">
                <Image src={data.img} fill alt="image" />
            </div>
            <h3 className="text-2xl">{data.name}</h3>
        </div>
    );
};

export default Card;