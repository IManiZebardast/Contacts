import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/contacts/";
;

export interface Contact {
    id?: number,
    name : string,
    email : string,
    phone: string,
}
export const getContacts = () => axios.get<Contact[]>(API_URL);
export const createContact = (contact:Contact)=> axios.post(API_URL,contact);
export const updateContact = (id:number,contact:Contact) => axios.put(`${API_URL}${id}/`,contact);
export const deleteContact = (id:number)=> axios.delete(`${API_URL}${id}/`)