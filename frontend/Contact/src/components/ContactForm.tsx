import React, { useState,useEffect } from "react";
import { createContact,updateContact,Contact } from "../api";
import { TextField,Button,Container } from "@mui/material";

interface ContactFormProps {
    contact?:Contact;
    onSave: ()=> void;
    onContactUpdated: () => void; 
}


const ContactForm:React.FC<ContactFormProps>=({contact,onSave}) =>{
    const [form,setForm] = useState<Contact>({name:"",email:"",phone:""});
    
    useEffect(()=>{
        if (contact) setForm(contact);
    },[contact]);
    const handleSubmit = async(e:React.FormEvent)=>{
        e.preventDefault();
        if(contact && contact.id) {await updateContact(contact.id,form);
         } else {await createContact(form)}
         onSave();
        
    };
    return(
        <Container>
            <h2>{contact? "Edit Contact": "Add Contact"}</h2>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth label="Name" value={form.name} onChange={(e)=> setForm({...form, name:e.target.value})}/>
                <TextField fullWidth label="Email" value={form.email} onChange={(e)=> setForm({...form, email:e.target.value})}/>
                <TextField fullWidth label="Phone" value={form.phone} onChange={(e)=> setForm({...form, phone:e.target.value})}/>
                <Button type="submit">Save</Button>
            </form>
        </Container>
    )
}
export default ContactForm;