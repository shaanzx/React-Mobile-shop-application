import {backendApi} from "../api.ts";

type ContactForm = {
    email: string;
    subject: string;
    message: string;
}

export const submitContactForm = async (formData : ContactForm) => {
    const response = await backendApi.post('/contact/add', formData);
    return response.data;
}