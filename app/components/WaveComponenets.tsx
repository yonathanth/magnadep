import React from "react";

interface WaveProps {
  title: string;
  description: string;
  strong: string;
  isForServices?: boolean;
}

const WaveBackground = ({ title, description, isForServices }: WaveProps) => {
  return (
    <div
      className={`relative mx-2 pt-3
         md:pt-6 px-6 sm:px-8 md:px-10 lg:px-16 
        ${
          isForServices
            ? "h-[230px] max-w-full"
            : "px-2 md:px-4 h-[300px] max-w-full"
        } 
        mb-10 mx-auto flex justify-center text-white `}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: 'url("/about us bg.svg")' }}
      />

      {/* Content */}
      <div
        className={`relative z-10 ${
          isForServices ? "text-left" : "text-center"
        } `}
      >
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl md:mb-4">
          {title}
        </h2>
        <p className="text-xs sm:text-base md:text-lg leading-relaxed max-w-full">
          {/* <strong>{strong}</strong>  */}
          {description}
        </p>
      </div>
    </div>
  );
};

export default WaveBackground;
