import { ClipboardIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import LinesEllipsis from "react-lines-ellipsis";

const Card = ({
  name,
  author,
  semester,
}: {
  name: string;
  author: string;
  semester: string;
}) => {
  return (
    <Link href="#">
      <div className="flex flex-col min-w-56 space-y-4 border rounded-lg shadow-sm md:max-w-prose">
        <Image
          className="w-full object-cover"
          width="190"
          height="100"
          src="/bird.png"
          alt="bird"
        />
        <div className="bg-white px-4 pb-2 flex flex-col items-start justify-start">
          <h3 className="text-xl font-bold text-gray-800 text-left">{name}</h3>
          <h3 className="text-lg font-medium text-gray-800 text-left">
            By {author}
          </h3>
          <div className="flex gap-1 text-xs text-blue-400 items-center">
            <ClipboardIcon className="h-4 w-4" />
            <span className="leading-6">{semester}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
