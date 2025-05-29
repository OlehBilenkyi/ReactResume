import {
  SkillsContainer,
  SkillsTitle,
  ContactsTitle,
  SkillsList,
  ContactsLinks,
  SkillsListItem,
} from "../LanguagesSoftSkillsTechSkills.styled";

const Contacts = () => (
  <SkillsContainer>
    <SkillsTitle>Portfolio & Contacts</SkillsTitle>
    <SkillsList>
      <SkillsTitle>
        <ContactsTitle>GitHub:</ContactsTitle>
        <ContactsLinks href="https://github.com/OlehBilenkyi" target="_blank">
          OlehBilenkyi
        </ContactsLinks>
      </SkillsTitle>
      <SkillsTitle>
        <ContactsTitle>LinkedIn:</ContactsTitle>
        <ContactsLinks
          href="https://www.linkedin.com/in/oleh-bilenkyi-95a55b177/"
          target="_blank"
        >
          Oleh Bilenkyi
        </ContactsLinks>
      </SkillsTitle>
      <SkillsTitle>
        <ContactsTitle>Facebook:</ContactsTitle>
        <ContactsLinks
          href="https://www.facebook.com/profile.php?id=100005711576476"
          target="_blank"
        >
          Oleh Bilenkyi
        </ContactsLinks>
      </SkillsTitle>
      <SkillsTitle>
        <ContactsTitle>Email:</ContactsTitle>
        <ContactsLinks href="mailto:13eLuy@gmail.com">
          I3eLuy@gmail.com
        </ContactsLinks>
      </SkillsTitle>
      <SkillsTitle>
        <ContactsTitle>Telegram:</ContactsTitle>
        <ContactsLinks href="https://t.me/OJIeja">@OJIeja</ContactsLinks>
      </SkillsTitle>
      <SkillsTitle>
        <ContactsTitle>Phone:</ContactsTitle>
        <ContactsLinks href="tel:+380985745049">+380985745049</ContactsLinks>
      </SkillsTitle>
    </SkillsList>
  </SkillsContainer>
);

export default Contacts;
