import React from "react";
import Contacts from "./Contacts/Contacts";
import Languages from "./Languages/Languages";
import SoftSkills from "./SoftSkills/SoftSkills";
import TechSkills from "./TechSkills/TechSkills";
import Avatar from "./Avatar/Avatar";

const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => (
  <>
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-primaryBg p-6 transform transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button onClick={onClose} className="text-white text-2xl mb-6">
        &times;
      </button>
      <Avatar />
      <nav className="mt-8 space-y-8">
        <div>
          <h3 className="text-white font-semibold mb-2">Contacts</h3>
          <Contacts />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Technical Skills</h3>
          <TechSkills />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">About Me</h3>
          <SoftSkills />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Languages</h3>
          <Languages />
        </div>
      </nav>
    </aside>
    {isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
    )}
  </>
);
export default Sidebar;
