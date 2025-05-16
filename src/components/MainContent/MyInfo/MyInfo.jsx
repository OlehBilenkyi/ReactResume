import PropTypes from "prop-types";
import { InfoContainer, Profession, Name, TextDescr } from "./MyInfo.styled";

const MyInfo = ({ profession, name, description }) => (
  <InfoContainer>
    <Profession>{profession}</Profession>
    <Name>{name}</Name>
    <TextDescr>{description}</TextDescr>
  </InfoContainer>
);

MyInfo.propTypes = {
  profession: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default MyInfo;
