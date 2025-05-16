import Contacts from "./Contacts/Contacts";
import Languages from "./Languages/Languages";
import SoftSkills from "./SoftSkills/SoftSkills";
import TechSkills from "./TechSkills/TechSkills";
import { SidebarWrapper, SidebarContent } from "./Sidebar.styled";
import PropTypes from "prop-types";

const MySidebar = ({ avatar }) => {
  return (
    <SidebarWrapper>
      <img src={avatar} alt="Avatar" width="300" loading="lazy" />
      <SidebarContent>
        <Contacts />
        <TechSkills />
        <SoftSkills />
        <Languages />
      </SidebarContent>
    </SidebarWrapper>
  );
};

MySidebar.propTypes = {
  avatar: PropTypes.string.isRequired, // Теперь PropTypes будет определен
};
export default MySidebar;
