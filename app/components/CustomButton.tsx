import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  name: string;
}
const Button = ({ href, name }: ButtonProps) => {
  return (
    <Link
      href={href}
      className=" text-white px-6 py-2 bg-gradient-to-r from-secondary to-primary rounded-lg shadow hover:bg-primary transition z-40"
    >
      {name}
    </Link>
  );
};

export default Button;
