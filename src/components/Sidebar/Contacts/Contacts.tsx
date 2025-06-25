import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaTelegram,
  FaPhone,
} from "react-icons/fa";

const Contacts = () => (
  <div className="flex flex-col space-y-3">
    {[
      {
        icon: <FaGithub />,
        label: "GitHub: OlehBilenkyi",
        href: "https://github.com/OlehBilenkyi",
      },
      {
        icon: <FaLinkedin />,
        label: "LinkedIn: Oleh Bilenkyi",
        href: "https://linkedin.com/...",
      },
      {
        icon: <FaFacebook />,
        label: "Facebook: Oleh Bilenkyi",
        href: "https://facebook.com/...",
      },
      {
        icon: <FaEnvelope />,
        label: "Email: I3eLuy@gmail.com",
        href: "mailto:13eLuy@gmail.com",
      },
      {
        icon: <FaTelegram />,
        label: "Telegram: @OJIeja",
        href: "https://t.me/OJIeja",
      },
      {
        icon: <FaPhone />,
        label: "Phone: +380985745049",
        href: "tel:+380985745049",
      },
    ].map((item) => (
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
);
export default Contacts;
