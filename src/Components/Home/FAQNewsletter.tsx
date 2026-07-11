"use client";

import { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is BurmudaShop's return policy?",
    answer:
      "You can return eligible products within 30 days after delivery. Once the returned item passes our quality inspection, your refund will be processed within 5–7 business days.",
  },
  {
    question: "How can I track my order?",
    answer:
      "After your order is shipped, you'll receive a tracking number via email and SMS. You can also track your order anytime from your BurmudaShop account dashboard.",
  },
  {
    question: "Do you offer free shipping?",
    answer:
      "Yes! We provide free standard shipping on all orders over $99. Delivery times may vary depending on your location.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Yes. Orders can be modified or cancelled before they are dispatched from our warehouse. Please contact our support team as soon as possible.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, American Express, PayPal, Stripe, Apple Pay, Google Pay, and Cash on Delivery (available in selected locations).",
  },
  
];

const FAQNewsletter = (): React.JSX.Element => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">


          <h2 className="mt-5 text-2xl font-bold text-gray-900 md:text-5xl whitespace-nowrap">
            Frequently Questions & <span className="text-orange-500"> Newsletter</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600">
            Find answers to common questions and subscribe to receive exclusive
            offers, new arrivals, seasonal discounts, and important updates
            directly in your inbox.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* FAQ */}
          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <h3 className="mb-6 text-xl font-bold text-gray-900">
              Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-gray-200"
                >
                  <button
                    onClick={() =>
                      setActive(active === index ? null : index)
                    }
                    className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-gray-800 transition hover:bg-orange-50"
                  >
                    {faq.question}

                    <ChevronDown
                      size={18}
                      className={`transition duration-300 ${active === index ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {active === index && (
                    <div className="border-t bg-gray-50 px-5 py-4 text-sm leading-7 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
              <Mail className="text-orange-500" size={28} />
            </div>

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              Subscribe to Our Newsletter
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              Join thousands of happy customers and receive exclusive deals,
              flash sales, product launches, and shopping tips directly in your
              inbox.
            </p>

            <form className="mt-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-lg border border-gray-300 px-5 py-3 outline-none transition focus:border-orange-500"
              />

              <button
                type="submit"
                className="mt-4 w-full rounded-lg bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Subscribe Now
              </button>
            </form>

            <div className="mt-8 rounded-xl bg-orange-50 p-5">
              <h4 className="font-bold text-orange-600">
                🎉 Welcome Offer
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-700">
                Subscribe today and enjoy
                <span className="font-semibold text-orange-500">
                  {" "}
                  10% OFF
                </span>{" "}
                your first order, along with early access to upcoming
                promotions and limited-time deals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQNewsletter;