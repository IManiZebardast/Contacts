import { useState } from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import { Contact } from "./api";
import { Container } from "@mui/material";



export default function App() {
  const [selectedContact, setSelectedContact] = useState<Contact| undefined>();
  const handleSave = ()=>{
    setSelectedContact(undefined);
  };
  return (
    <>
    <Container>
      <h1>Contacts Manager</h1>
      <ContactForm contact={selectedContact} onSave={handleSave} onContactUpdated={loadContacts}/>
      <ContactList onEdit={setSelectedContact}/>
    </Container>
    </>
  )
}


