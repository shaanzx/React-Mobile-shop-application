import { useForm } from "react-hook-form";
import {submitContactForm} from "../../../slices/contactSlice.ts";

export function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    type FormData = {
        email: string;
        subject: string;
        message: string;
    }

    // const clearForm = () => {
    //     window.location.reload();
    // }

    const onSubmit = async (data: FormData) => {
        /*console.log('Form submitted:', data);
        alert(`Submitted your case : ${data.subject}`);
        clearForm();*/
        try{
            await submitContactForm(data);
            alert("Your message has been sent successfully!");
            window.location.reload();
        } catch (error) {
            console.error("Error sending contact form:", error);
        }
    }

    return (
        <div className="max-w-xl mx-auto my-10 p-8 bg-white rounded-xl shadow-lg font-sans">
            <h2 className="text-2xl font-semibold mb-2 text-center text-gray-800">Contact Us</h2>
            <p className="text-center text-sm text-gray-600 mb-6">
                We’d love to hear from you! Please fill out the form below.
            </p>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                {/* Email */}
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        placeholder="Input your email address"
                        className="p-3 border border-gray-300 rounded-md text-sm bg-gray-100 focus:outline-none focus:border-blue-500 focus:bg-white"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                </div>

                {/* Subject */}
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700 mb-1">Subject</label>
                    <input
                        type="text"
                        placeholder="What's this about?"
                        className="p-3 border border-gray-300 rounded-md text-sm bg-gray-100 focus:outline-none focus:border-blue-500 focus:bg-white"
                        {...register("subject", {
                            required: "Subject is required",
                            pattern: {
                                value: /^.{1,30}$/,
                                message: "Subject must be in between 1 and 30 characters"
                            }
                        })}
                    />
                    {errors.subject && <span className="text-red-500 text-xs mt-1">{errors.subject.message}</span>}
                </div>

                {/* Message */}
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700 mb-1">Message</label>
                    <textarea
                        placeholder="Write your message..."
                        rows={5}
                        className="p-3 border border-gray-300 rounded-md text-sm bg-gray-100 focus:outline-none focus:border-blue-500 focus:bg-white resize-y min-h-[100px]"
                        {...register("message", {
                            required: "Message is required"
                        })}
                    />
                    {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-800 text-white text-sm font-medium py-3 px-6 rounded-md transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
