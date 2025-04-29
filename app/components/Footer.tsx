import { Instagram, Send, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Logo */}
        <div className="flex w-full justify-start items-start mb-6 md:mb-0 ">
          <img src="/logo.svg" alt="Company Logo" className="h-12" />
        </div>

        {/* Links */}
        <div className="flex space-x-6 md:space-x-10 px-6 text-xs md:text-base">
          <div className="">
            <h3 className="font-semibold text-lg   mb-2">Company</h3>
            <ul className="space-y-1 text-sm text-nowrap">
              <li>
                <a href="/about" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:underline">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/about/#team" className="hover:underline">
                  Our team
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-lg">Partners</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/partners" className="hover:underline">
                  Printing{" "}
                </a>
              </li>

              <li>
                <a href="/partners" className="hover:underline">
                  Branding
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-lg">Service</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/services" className="hover:underline text-nowrap">
                  Events and Marketing
                </a>
              </li>

              <li>
                <a href="/services" className="hover:underline">
                  Medical Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright & Social Media */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col-reverse   md:flex-row justify-between items-center text-sm text-white">
        <div className="">
          <p className=" w-full text-sm md:text-base">
            &copy; {currentYear}{" "}
            <span> Magna Events and Marketing Pvt. Ltd. </span>
          </p>
        </div>
        <div className="flex space-x-3 md:space-x-4 mt-4 md:mt-0 mb-4 md:mb-0">
          <a
            href="https://www.instagram.com/magnaevents_?igsh=YzljYTk1ODg3Zg"
            className="text-primary hover:text-white"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://t.me/magnaeventsandmarketing"
            className="text-primary hover:text-white"
          >
            <Send size={20} />
          </a>

          <a
            href="https://twitter.com/MagnaEventsMar"
            className="text-primary hover:text-white"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/magna-events-286916356"
            className="text-primary hover:text-white"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
