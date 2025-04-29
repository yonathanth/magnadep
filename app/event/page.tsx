"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa"; // Using react-icons for the arrow icon

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventDescription: string;
  company: string;
}

const Loading = () => (
  <div className="animate-spin border-4 border-white border-t-transparent rounded-full w-5 h-5"></div>
);

const EventBooking = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDescription: "",
    company: "",
  });
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("");

    const { firstName, lastName, email, phone, eventDescription, company } =
      formData;

    if (!firstName || !lastName || !email || !eventDescription) {
      setStatus("Please fill in all required fields.");
      setSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        "service_magna",
        "template_691onhd",
        {
          title: "Event Booking Request",
          name: `${firstName} ${lastName} ${company}, ${phone}, ${email}`,
          company,
          email,
          phone,
          message: eventDescription,
        },
        "-UtC40MAKlfcOhS_9"
      );

      setIsSuccess(true);
      setStatus("Your booking request has been sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        eventDescription: "",
        company: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send booking request. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setStatus("");
  };

  return (
    <div className="relative">
      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-4 left-4 flex items-center text-white  transition-colors"
      >
        <FaArrowLeft className="w-10 h-4 mr-2" />
        {/* <span className="text-sm font-medium">Back</span> */}
      </Link>

      <div className="flex flex-col lg:flex-row h-screen w-full">
        <div className="w-full lg:w-[50%] bg-primary items-center text-white flex flex-col justify-center p-8">
          <div className="text-left max-w-lg mb-6 lg:mb-0">
            <h1 className="text-3xl pt-16 lg:pt-0 sm:text-5xl lg:text-[50px] text-nowrap mb-4">
              Book an Event with Us
            </h1>
            <p className="text-xs sm:text-sm lg:text-base">
              Let&apos;s turn your vision into reality! Whether it&apos;s a
              corporate gathering, a grand celebration, or a private event, we
              handle every detail with creativity and precision. Tell us about
              your event, and we&apos;ll take care of the rest!
            </p>
          </div>
        </div>

        <div
          className={`w-full lg:w-2/3 flex flex-col justify-center p-10 ${
            isSuccess ? "bg-white" : "bg-gray-100"
          }`}
        >
          {!isSuccess ? (
            <form
              onSubmit={handleSubmit}
              className="bg-transparent p-0 lg:p-10 w-full sm:max-w-xl lg:max-w-3xl mx-auto"
            >
              <div className="grid grid-rows-1 lg:grid-cols-2 gap-4 mb-6 lg:mb-0">
                <div className="flex flex-col mb-2">
                  <label className="text-sm text-gray-600 mb-2">
                    First Name:
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-200 rounded-md border focus:outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-2">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-200 rounded-md border focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label className="text-sm text-gray-600 mb-2">
                  Company/Organization:
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Optional"
                  className="w-full p-2 bg-gray-200 rounded-md border focus:outline-none"
                />
              </div>
              <div className="flex flex-col mb-6">
                <label className="text-sm text-gray-600 mb-2">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-200 rounded-md border focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col mb-6">
                <label className="text-sm text-gray-600 mb-2">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-200 rounded-md border focus:outline-none"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label className="text-sm text-gray-600 mb-1">
                  About the Event:
                </label>
                <textarea
                  name="eventDescription"
                  value={formData.eventDescription}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-200 rounded-md border h-44 resize-none focus:outline-none"
                  required
                />
              </div>

              {status && <p className="text-sm text-center mt-4">{status}</p>}

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="text-white px-6 py-2 bg-gradient-to-r from-secondary to-primary rounded-lg shadow hover:bg-primary transition"
                  disabled={submitting}
                >
                  {submitting ? <Loading /> : "Book an Event"}
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-transparent p-0 lg:p-10 w-full sm:max-w-xl lg:max-w-3xl mx-auto text-center">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mt-4">
                  Thank You!
                </h2>
                <p className="text-gray-600 mt-2">
                  Your request has been sent successfully! We&apos;ll reach out
                  to you soon.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={resetForm}
                  className="text-white px-6 py-2 bg-gradient-to-r from-secondary to-primary rounded-lg shadow hover:bg-primary transition"
                >
                  Send Another Request
                </button>
                <Link
                  href="/"
                  className="px-6 py-2 text-center border border-primary text-primary rounded-lg shadow hover:bg-gray-200 transition"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <div className="mt-20">
        <Footer />
      </div> */}
    </div>
  );
};

export default EventBooking;
