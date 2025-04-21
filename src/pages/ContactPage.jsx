import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

function ContactsPage() {
  const { t } = useTranslation();
  const formRef = useRef();
  const [status, setStatus] = useState({ success: null, message: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus({ success: true, message: t("contactPage.success") });
        formRef.current.reset();
      })
      .catch(() => {
        setStatus({ success: false, message: t("contactPage.error") });
      });
  };

  return (
    <section id="contact" className="px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">{t("contactPage.title")}</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          {t("contactPage.subtitle")}
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="from_name" className="block mb-1 text-gray-700 dark:text-gray-200">
              {t("contactPage.name")}
            </label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              required
              className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block mb-1 text-gray-700 dark:text-gray-200">
              {t("contactPage.email")}
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-gray-700 dark:text-gray-200">
              {t("contactPage.message")}
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full p-3 border border-gray-300 rounded-md resize-none dark:bg-gray-800 dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-md font-medium transition"
          >
            {t("contactPage.button")}
          </button>

          {status.message && (
            <p
              className={`text-center text-sm ${
                status.success ? "text-green-500" : "text-red-500"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactsPage;
