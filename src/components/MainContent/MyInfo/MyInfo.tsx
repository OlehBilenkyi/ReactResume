import React from "react";

type MyInfoProps = { description: string };

const MyInfo: React.FC<MyInfoProps> = ({ description }) => (
  <section className="section bg-primaryBg text-white py-12">
    <h2 className="section-title text-2xl font-bold mb-4">About Me</h2>
    <p className="max-w-3xl leading-relaxed text-base">{description}</p>
  </section>
);
export default MyInfo;
