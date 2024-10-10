

import React,{useState} from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';

const Faq = ({faqs}) => {
    const [isOpen, SetIsOpen] = useState(null)

    const toggleFaq = (index) => {
     SetIsOpen(isOpen === index ? null : index)
    }
  return (
    <>
    
    
    <div className="max-w-3xl mx-auto px-4 py-8">
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFaq(index)}
            >
              <span className="text-lg font-medium text-gray-900">{faq.question}</span>
              {isOpen === index ? (
                <FaMinus className="text-gray-700 flex-shrink-0" />
              ) : (
                <FaPlus className="text-gray-700 flex-shrink-0" />
              )}
            </button>
            {isOpen === index && (
              <div className="mt-2 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div></>
  )
}

export default Faq