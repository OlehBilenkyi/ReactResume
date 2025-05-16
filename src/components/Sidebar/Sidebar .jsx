import { Contacts } from "./Contacts/Contacts";
import { Languages } from "./Languages/Languages";
import { SoftSkills } from "./SoftSkills/SoftSkills";
import { TechSkills } from "./TechSkills/TechSkills";
import { SidebarContent, Sidebar } from "./Sidebar.module";

export const Sidebar = ({ avatar }) => {
  return (
    <Sidebar>
      <img src={avatar} alt="Avatar" width="300" loading="lazy" />
      <SidebarContent>
        <Contacts />
        <TechSkills /> TechSkills
        <SoftSkills />
        <Languages />
      </SidebarContent>
    </Sidebar>
  );
};

Sidebar.propTypes = {
  avatar: PropTypes.string.isRequired,
  children: PropTypes.node,
};
