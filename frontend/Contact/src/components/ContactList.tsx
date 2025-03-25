import React, { useEffect,useState } from "react";
import { getContacts,deleteContact,Contact } from "../api";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container } from "@mui/material";

interface ContactListProps {
    onEdit: (contact:Contact) => void;
}

const ContactList: React.FC<ContactListProps> = ({ onEdit })=>{
    const [contacts,setContacts] = useState<Contact[]>([]);
    useEffect(()=>{
        loadContacts();
    },[]);
    const loadContacts = async () =>{
        const response = await getContacts();
        setContacts(response.data);
    };
    const handleDelete = async(id:number)=>{
        await deleteContact(id);
        loadContacts();
    }
    return (
        <Container>
            <h2>Contact List</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contacts.map((contact)=>(
                            <TableRow key={contact.id}>
                                 <TableCell>{contact.name}</TableCell>
                                 <TableCell>{contact.email}</TableCell>
                                 <TableCell>{contact.phone}</TableCell>
                                 <TableCell>
                                    <Button onClick={()=> onEdit(contact)}>Edite</Button>
                                    <Button onClick={()=> handleDelete(contact.id!)} color="error">Delete</Button>
                                 </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ContactList;