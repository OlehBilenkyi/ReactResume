import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaTelegram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primaryBg text-secondaryText py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
        {/* Connect */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            {[{
              icon: <FaTwitter />,
              label: "Twitter",
              href: "https://twitter.com"
            },{
              icon: <FaLinkedin />,
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/oleh-bilenkyi-95a55b177/"
            },{
              icon: <FaGithub />,
              label: "GitHub",
              href: "https://github.com/OlehBilenkyi"
            }].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-secondaryText hover:text-white transition"
              >
                {social.icon}
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
        {/* Contact Me */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Me</h3>
          <div className="flex flex-col space-y-2">
            {[{
              icon: <MdEmail />,
              label: "I3eLuy@gmail.com",
              href: "mailto:13eLuy@gmail.com"
            },{
              icon: <MdPhone />,
              label: "+380985745049",
              href: "tel:+380985745049"
            },{
              icon: <FaTelegram />,
              label: "@OJIeja",
              href: "https://t.me/OJIeja"
            }].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 text-secondaryText hover:text-white transition"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-[#27423c] pt-6 text-center">
        <p className="text-secondaryText">&copy; {currentYear} Oleh Bilenkyi. All rights reserved.</p>
        <p className="text-secondaryText">Designed with passion in Ukraine</p>
      </div>
    </footer>
  );
};
export default Footer;
