import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // We no longer need to initialize EmailJS in a useEffect
  // The latest version uses a different approach with the publicKey option in sendForm/send

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // There are two ways to use EmailJS:
    // 1. Using sendForm (which uses the form reference directly)
    // 2. Using send (which uses a template parameters object)

    // We'll use the send method with template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email, // Set reply-to to the user's email
      subject: formData.subject,
      message: formData.message,
      to_email: "khushmeetpatil@gmail.com", // The recipient email
    };

    // IMPORTANT: Replace these with your actual EmailJS credentials
    emailjs
      .send(
        "service_1z6732q", // Replace with your actual EmailJS service ID
        "template_37rb2e8", // Replace with your actual EmailJS template ID
        templateParams,
        {
          publicKey: "mOVGCzWhlznGIs7Re", // Replace with your actual EmailJS public key
        }
      )
      .then(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);

        // Log more detailed error information for debugging
        if (error.status) {
          console.error(`Status: ${error.status}, Message: ${error.text}`);

          // Check for specific error types
          if (error.text.includes("Public Key is invalid")) {
            console.error(
              "IMPORTANT: You need to replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key"
            );
            console.error(
              "Get your public key from: https://dashboard.emailjs.com/admin/account"
            );
          }

          if (error.text.includes("service_id")) {
            console.error(
              "IMPORTANT: You need to replace 'YOUR_SERVICE_ID' with your actual EmailJS service ID"
            );
            console.error(
              "Get your service ID from: https://dashboard.emailjs.com/admin"
            );
          }

          if (error.text.includes("template_id")) {
            console.error(
              "IMPORTANT: You need to replace 'YOUR_TEMPLATE_ID' with your actual EmailJS template ID"
            );
            console.error(
              "Get your template ID from: https://dashboard.emailjs.com/admin/templates"
            );
          }
        }

        setIsSubmitting(false);
        setSubmitError(true);

        // Reset error message after 5 seconds
        setTimeout(() => {
          setSubmitError(false);
        }, 5000);
      });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: "www.iotechz.com",
      action: "Email us",
      link: "mailto: khushmeetpatil@gmail.com",
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      details:
        "Plot No. 1801/1, G.I.D.C. , Vithal UdhyogNagar-388121, Anand(Guj)",
      action: "Get directions",
      link: "https://maps.app.goo.gl/NWHRAS69ViqLqfBo7",
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: "+91 7990358824",
      action: "Call now",
      link: "tel:+91 7990358824",
    },
  ];

  return (
    <section className="py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-lg">
            Have a project in mind or want to learn more about our services?
            We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-600 mb-5 mx-auto">
                {info.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              <p className="text-gray-600 mb-4">{info.details}</p>
              <a
                href={info.link}
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {info.action}
                <ChevronRight size={16} className="ml-1" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 md:p-12 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Send Us a Message
          </h3>

          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center"
            >
              Thank you for your message! Your email has been sent successfully
              to our team. We'll get back to you soon.
            </motion.div>
          )}

          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-center"
            >
              There was an error sending your email. The site administrator
              needs to properly configure EmailJS. Please contact us directly at
              khushmeetpatil@gmail.com instead.
            </motion.div>
          )}

          <form ref={form} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full md:w-auto flex items-center justify-center"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="inline-flex items-center">
                  <Send size={18} className="mr-2" />
                  Send Message
                </span>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

// Helper component for the arrow icon
const ChevronRight = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);