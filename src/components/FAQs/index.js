
const FAQs = () => {
  const faqs = [
    {
      question: "What dental services do you offer?",
      answer: "We offer cleaning, whitening, braces, implants, root canals, and more."
    },
    {
      question: "Do you accept dental insurance?",
      answer: "Yes, we accept most major dental insurance plans."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment online or call our clinic directly."
    },
    {
      question: "What are your working hours?",
      answer: "We are open Monday to Friday, 9 AM to 6 PM."
    },
    {
      question: "Is emergency dental care available?",
      answer: "Yes, we provide emergency dental services during our working hours."
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs
