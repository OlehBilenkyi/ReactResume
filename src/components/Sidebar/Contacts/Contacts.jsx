import {
  ContactConteiner,
  ContactsLinks,
  ContactsTitel,
  ContactsTitle,
  ContactsItem,
} from "./Contacts.styled";

const Contacts = () => (
  <ContactConteiner>
    <ContactsTitel>Contacts</ContactsTitel>
    <ContactsItem>
      <ContactsTitle>Email:</ContactsTitle>
      <ContactsLinks href="mailto:13eLuy@gmail.com">
        I3eLuy@gmail.com
      </ContactsLinks>
    </ContactsItem>
    <ContactsItem>
      <ContactsTitle>GitHub:</ContactsTitle>
      <ContactsLinks href="https://github.com/OlehBilenkyi" target="_blank">
        OlehBilenkyi
      </ContactsLinks>
    </ContactsItem>
    <ContactsItem>
      <ContactsTitle>LinkedIn:</ContactsTitle>
      <ContactsLinks
        href="https://www.linkedin.com/in/oleh-bilenkyi-95a55b177/"
        target="_blank"
      >
        Oleh Bilenkyi
      </ContactsLinks>
    </ContactsItem>
    <ContactsItem>
      <ContactsTitle>Facebook:</ContactsTitle>
      <ContactsLinks
        href="https://www.facebook.com/profile.php?id=100005711576476"
        target="_blank"
      >
        Oleh Bilenkyi
      </ContactsLinks>
    </ContactsItem>
    <ContactsItem>
      <ContactsTitle>Phone:</ContactsTitle>
      <ContactsLinks href="tel:+380985745049">+380985745049</ContactsLinks>
    </ContactsItem>
  </ContactConteiner>
);
export default Contacts;
