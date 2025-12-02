"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How often should I clean the fountain?",
      answer:
        "We recommend cleaning the fountain once a week and replacing the filter every 2-4 weeks for optimal performance. All parts are dishwasher safe for easy cleaning!",
    },
    {
      question: "Is it really quiet enough for nighttime?",
      answer:
        "Yes! Our ultra-quiet pump operates at less than 30dB - quieter than a whisper. You and your pets will sleep peacefully.",
    },
    {
      question: "What if my pet doesn't like it?",
      answer:
        "We offer a 30-day money-back guarantee! Most pets adapt within 2-3 days, but if yours doesn't, we'll refund you completely.",
    },
    {
      question: "How much electricity does it use?",
      answer:
        "Very little! The pump uses only 2W of power - less than an LED lightbulb. It costs less than $2 per year to run 24/7.",
    },
    {
      question: "Can I use it for multiple pets?",
      answer:
        "Our fountains are perfect for multi-pet households. The 2L capacity and continuous circulation ensure fresh water for all your furry friends.",
    },
    {
      question: "What's included in the box?",
      answer:
        "You get the fountain, pump, 3 replacement filters, detailed instructions, and a quick-start guide. Everything you need to get started!",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Purr-Hydrate fountains
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl overflow-hidden shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
              >
                <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-purple-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
