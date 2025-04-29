import Image from "next/image";

export default function banner({
  title,
  photo,
}: {
  title: string;
  photo: string;
}) {
  return (
    <div className="relative w-full mx-auto max-w-[96vw] p-1">
      <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden">
        <Image
          src={photo}
          alt="Office workspace"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center p-8 sm:p-8 text-white text-sm sm:text-lg leading-relaxed">
          <h1 className="text-2xl md:text-4xl font-semibold lg:text-6xl">
            {" "}
            {title}{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}
