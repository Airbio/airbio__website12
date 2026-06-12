import React, { useState } from 'react'
import Header from '../Home/Header'

import { Helmet } from "react-helmet-async";

const faqData = [
  {
    category: "General Questions",
    questions: [
      {
        q: "What products does AirBio Technologies offer?",
        a: (
          <>
            <p>AirBio specializes in the design, manufacturing, and supply of high-performance laboratory and cleanroom equipment including:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Biosafety Cabinets","Laminar Air Flow Systems","Fume Hoods","Pass Boxes","Air Showers","HEPA Filtration Systems","Dispensing Booths","PCR Workstations","Clean Room Equipment","Laboratory Furniture","HVAC and Controlled Environment Solutions"].map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-2">Our products are engineered to deliver high standards of safety, efficiency, reliability, and performance for laboratories, healthcare facilities, pharmaceutical industries, research centers, and cleanroom environments.</p>
            <p className="mt-2">We also provide installation, validation, AMC, maintenance, and technical support services.</p>
          </>
        )
      },
      {
        q: "Does AirBio serve international customers?",
        a: "Yes. AirBio supplies products to both domestic and international customers. We support export inquiries, international shipping, technical discussions, and customized project requirements for overseas clients."
      },
      {
        q: "Can I purchase products online?",
        a: "Yes. Customers can submit inquiries, request quotations, and place orders online through our official website or sales team. Some customized products may require technical discussion before order confirmation."
      },
      {
        q: "Are all products ready to ship?",
        a: (
          <>
            <p>Some standard products may be available for immediate dispatch, while customized or project-based equipment may require manufacturing time. Delivery timelines depend on:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Product type","Quantity","Customization requirements","Project scope","Shipping destination"].map(i => <li key={i}>{i}</li>)}
            </ul>
          </>
        )
      },
    ]
  },
  {
    category: "Product & Customization",
    questions: [
      {
        q: "Can AirBio provide custom solutions?",
        a: (
          <>
            <p>Yes. We understand that every laboratory and cleanroom project has unique requirements. Our technical team works closely with customers to provide customized solutions based on:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Laboratory size and layout","Biosafety requirements","Airflow and filtration needs","Industry applications","Utility and infrastructure requirements","Cleanroom classifications","Validation standards"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p className="mt-2">Customized dimensions, materials, configurations, and project-specific solutions can also be developed for industries such as Life Sciences, Pharmaceuticals, Healthcare, Research, and Industrial Applications.</p>
          </>
        )
      },
      {
        q: "What makes AirBio's biosafety cabinets unique?",
        a: (
          <>
            <p>AirBio products are designed using advanced air filtration and containment technologies. Key features may include:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Advanced HEPA filtration systems","Ergonomic and user-friendly designs","Energy-efficient operation","Low noise performance","Smart airflow management systems","Reliable contamination control","Integration support for modern laboratory systems"].map(i => <li key={i}>{i}</li>)}
            </ul>
          </>
        )
      },
      {
        q: "Are the product images shown on the website exact?",
        a: "Product images are for reference purposes only. Actual products may vary slightly depending on customization, upgrades, or manufacturing improvements."
      },
      {
        q: "Can AirBio help in selecting the right equipment?",
        a: (
          <>
            <p>Yes. Our technical team can guide customers in selecting suitable equipment based on:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Laboratory application","Industry standards","Workspace dimensions","Biosafety requirements","Cleanroom classification"].map(i => <li key={i}>{i}</li>)}
            </ul>
          </>
        )
      },
    ]
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        q: "Are prices mentioned on the website final?",
        a: (
          <>
            <p>Prices may vary depending on:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Product configuration","Quantity","Customization","Installation requirements","Shipping location","Taxes and duties"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p className="mt-2">Final pricing is shared through an official quotation.</p>
          </>
        )
      },
      {
        q: "What payment methods are accepted?",
        a: (
          <>
            <p>AirBio may accept:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Bank transfer","NEFT/RTGS","International wire transfer","UPI payments (India)","Approved business payment methods"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p className="mt-2">Payment options may vary depending on order value and customer location.</p>
          </>
        )
      },
      {
        q: "Is advance payment required?",
        a: "Yes. Advance payment may be required for manufacturing, customized products, or international orders. The payment structure will be clearly mentioned in the quotation or invoice."
      },
    ]
  },
  {
    category: "Installation & Service",
    questions: [
      {
        q: "Is installation free or chargeable?",
        a: (
          <>
            <p>Installation charges depend on the product type, project scope, and customer location.</p>
            <p className="mt-2 font-medium text-[#1E1E1E]">Installation Policy:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-[#1E1E1EBF]">
              <li>Basic installation for selected standard products within certain locations may be free.</li>
              <li>Large equipment, cleanroom projects, HVAC systems, and customized installations are usually chargeable.</li>
              <li>International installations are chargeable.</li>
            </ul>
            <p className="mt-2 font-medium text-[#1E1E1E]">Installation charges may include:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-[#1E1E1EBF]">
              {["Engineer visit charges","Travel expenses","Accommodation expenses","Local transportation","Equipment handling charges"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p className="mt-2">Final installation cost will be mentioned in the official quotation.</p>
          </>
        )
      },
      {
        q: "Does AirBio provide installation outside India?",
        a: (
          <>
            <p>Yes. Installation support for international customers can be arranged. Customers may need to bear:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Visa expenses","Air travel expenses","Accommodation","Local transportation","Applicable government taxes and permits"].map(i => <li key={i}>{i}</li>)}
            </ul>
          </>
        )
      },
      {
        q: "Does AirBio provide remote installation guidance?",
        a: (
          <>
            <p>Yes. For selected products, remote installation assistance may be provided through:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Video calls","Technical manuals","Online support sessions","Installation guidance documents"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p className="mt-2">Remote guidance availability depends on the product category.</p>
          </>
        )
      },
      {
        q: "Are training and demonstration services available?",
        a: "Yes. Product operation training and demonstrations can be provided during installation or through scheduled sessions. Additional onsite training requests may be chargeable."
      },
    ]
  },
  {
    category: "Shipping & Delivery",
    questions: [
      {
        q: "Does AirBio provide international shipping?",
        a: (
          <>
            <p>Yes. We support worldwide shipping for selected products and projects. Shipping methods may include:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Air freight","Sea freight","Courier services","Road transport"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p className="mt-2">Shipping availability depends on destination country regulations.</p>
          </>
        )
      },
      {
        q: "Are shipping charges included in product pricing?",
        a: (
          <>
            <p>Shipping charges are generally separate unless specifically mentioned in the quotation. Shipping costs depend on:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Destination","Product size and weight","Packaging requirements","Delivery method","Customs regulations"].map(i => <li key={i}>{i}</li>)}
            </ul>
          </>
        )
      },
      {
        q: "Who handles customs duties and import taxes for international orders?",
        a: (
          <>
            <p>International customers are generally responsible for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Import duties","Customs clearance","Local taxes","Port handling charges","Destination country compliance requirements"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p className="mt-2">Customers are advised to check local import regulations before placing orders.</p>
          </>
        )
      },
      {
        q: "How long does delivery take?",
        a: (
          <>
            <p>Delivery timelines vary depending on:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Product availability","Manufacturing schedule","Order quantity","Shipping method","Destination country"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p className="mt-2">Estimated delivery timelines will be shared during order confirmation.</p>
          </>
        )
      },
      {
        q: "Can I track my shipment?",
        a: "Yes. Tracking details may be shared once products are dispatched. Tracking availability depends on the selected shipping method and logistics provider."
      },
    ]
  },
  {
    category: "Warranty & Support",
    questions: [
      {
        q: "Do AirBio products meet industry standards?",
        a: (
          <>
            <p>Yes. AirBio products undergo quality testing and are designed to comply with applicable industry safety and operational standards. Our systems are developed to support:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Laboratory safety requirements","Cleanroom operational standards","Reliable airflow and filtration performance","Long-term durability and functionality","Environmentally responsible practices"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p className="mt-2">Specific certifications and compliance details can be shared based on product category and project requirements.</p>
          </>
        )
      },
      {
        q: "Do AirBio products come with warranty?",
        a: "Yes. Selected products include warranty against manufacturing defects. Warranty duration varies depending on the product category and will be mentioned in the quotation or invoice."
      },
      {
        q: "How often should biosafety cabinets be serviced?",
        a: (
          <>
            <p>To ensure proper safety and performance, biosafety cabinets should generally be inspected, certified, and serviced at least once every year.</p>
            <p className="mt-2">Regular servicing helps maintain:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Proper airflow performance","Filtration efficiency","User and sample protection","Compliance with laboratory safety standards"].map(i => <li key={i}>{i}</li>)}
            </ul>
          </>
        )
      },
      {
        q: "What is not covered under warranty?",
        a: (
          <>
            <p>Warranty does not cover:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Physical damage","Improper usage","Voltage fluctuations","Unauthorized repairs","Consumables and filters","Mishandling during transportation after delivery","Normal wear and tear"].map(i => <li key={i}>{i}</li>)}
            </ul>
          </>
        )
      },
      {
        q: "Does AirBio offer installation and maintenance support?",
        a: (
          <>
            <p>Yes. AirBio provides complete support services including:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Technical consultation","Product installation","System commissioning","Preventive maintenance","AMC support","Troubleshooting assistance","Technical guidance"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p className="mt-2">Our team works to ensure systems continue performing efficiently throughout their operational lifecycle.</p>
          </>
        )
      },
      {
        q: "Is onsite service free?",
        a: (
          <>
            <p>Onsite service may be free within the warranty scope for eligible cases. However, the following may be chargeable:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Out-of-warranty service visits","Replacement parts","Travel expenses","Emergency visits","AMC-related services outside agreement scope"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p className="mt-2">Charges depend on location and service requirements.</p>
          </>
        )
      },
      {
        q: "Does AirBio provide AMC (Annual Maintenance Contract)?",
        a: (
          <>
            <p>Yes. AMC and preventive maintenance services are available for selected products and projects. AMC plans may include:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Routine inspection","Calibration","Performance checks","Filter replacement support","Technical servicing"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p className="mt-2">AMC pricing depends on equipment type and service frequency.</p>
          </>
        )
      },
    ]
  },
  {
    category: "Online Order & Customer",
    questions: [
      {
        q: "How can I place an order?",
        a: (
          <>
            <p>Customers can place orders by:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Contacting the sales team","Submitting inquiry forms on the website","Approving official quotations","Sending purchase orders through email"].map(i => <li key={i}>{i}</li>)}
            </ul>
          </>
        )
      },
      {
        q: "Can I cancel my order?",
        a: "Order cancellation requests must be submitted in writing. Customized or manufactured products may not be eligible for cancellation. Cancellation charges may apply depending on the production stage."
      },
      {
        q: "Can products be returned?",
        a: "Customized and made-to-order products are generally non-returnable. Approved returns must meet AirBio return conditions and may be subject to inspection."
      },
      {
        q: "What should I do if I receive a damaged product?",
        a: (
          <>
            <p>Customers should immediately:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Inspect the package upon delivery","Take photographs of damage","Inform AirBio within 48 hours","Share shipment and invoice details"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p className="mt-2">The support team will assist further based on the case.</p>
          </>
        )
      },
      {
        q: "Is technical support available after purchase?",
        a: "Yes. AirBio provides post-sales technical support for installation, troubleshooting, servicing, and maintenance assistance. Support availability may depend on warranty or service agreement coverage."
      },
      {
        q: "How can I contact AirBio support?",
        a: (
          <>
            <p>Customers can contact AirBio through:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Official website inquiry forms","Email support","Phone support","WhatsApp communication","Service request channels"].map(i => <li key={i}>{i}</li>)}
            </ul>
          </>
        )
      },
    ]
  },
  {
    category: "International Customers",
    questions: [
      {
        q: "Do you provide export documentation?",
        a: (
          <>
            <p>Yes. Required export documentation may be provided including:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Commercial Invoice","Packing List","Shipping Documents","Product Specifications","Certificates (if applicable)"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p className="mt-2">Documentation availability depends on product category and destination country.</p>
          </>
        )
      },
      {
        q: "Can products be manufactured according to international standards?",
        a: "Yes. Products can be designed and manufactured according to applicable industry and project requirements. Specific compliance requirements should be discussed during inquiry or quotation stages."
      },
      {
        q: "Do international customers get online technical support?",
        a: (
          <>
            <p>Yes. International customers can receive online support through:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Email","Video meetings","Technical documentation","Remote troubleshooting assistance"].map(i => <li key={i}>{i}</li>)}
            </ul>
          </>
        )
      },
      {
        q: "Are calibration and validation services available?",
        a: "Yes. Calibration and validation support may be available for selected equipment and cleanroom projects. Service availability depends on customer location and project scope."
      },
    ]
  },
  {
    category: "Additional Information",
    questions: [
      {
        q: "Can AirBio handle complete cleanroom projects?",
        a: (
          <>
            <p>Yes. AirBio can provide complete turnkey cleanroom solutions including:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Design consultation","Manufacturing","Installation","HVAC integration","Validation support","Testing and commissioning"].map(i => <li key={i}>{i}</li>)}
            </ul>
          </>
        )
      },
      {
        q: "How can I request a quotation?",
        a: (
          <>
            <p>You can request a quotation by:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#1E1E1EBF]">
              {["Filling out the inquiry form on the website","Sending product requirements through email","Contacting the sales team directly"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p className="mt-2">Please include detailed specifications for accurate pricing and recommendations.</p>
          </>
        )
      },
    ]
  },
]

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={`border rounded-xl mb-3 overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#1782C5]' : 'border-[#C3C3C3]'}`}>
      <button
        className="w-full flex justify-between items-center p-4 md:p-5 text-left"
        onClick={onToggle}
      >
        <span className={`font-medium text-sm md:text-base pr-4 ${isOpen ? 'text-[#1782C5]' : 'text-[#1E1E1E]'}`}>
          {question}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${isOpen ? 'bg-[#1782C5]' : 'bg-[#F0F0F0]'}`}>
          <svg
            width="14" height="14" viewBox="0 0 14 14" fill="none"
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path d="M2 5L7 10L12 5" stroke={isOpen ? '#fff' : '#1782C5'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-4 md:px-5 pb-5 text-sm md:text-base text-[#1E1E1EBF] leading-relaxed border-t border-[#E8E8E8] pt-4">
          {answer}
        </div>
      </div>
    </div>
  )
}

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  const handleCategoryChange = (idx) => {
    setActiveCategory(idx)
    setOpenIndex(null)
  }

  return (
     <>
          <Helmet>
            <title>FAQs | Airbio</title>
    
            <link
              rel="canonical"
              href="https://www.airbio.in/faq"
            />
          </Helmet>
    <div>
      <Header />
      <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />

      <div className="p-5 py-10">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="font-medium text-[#1782C5] text-3xl md:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-2 md:text-base text-[#1E1E1EBF]">
            Welcome to the AirBio FAQ section. Find answers to commonly asked questions about our products, ordering, shipping, installation, warranty, and support.
          </p>
          <p className="mt-1 text-sm md:text-base text-[#1E1E1EBF]">
            Need more help?{' '}
            <a href="/contact" className="text-[#1782C5] font-medium hover:underline">
              Contact our support team
            </a>
          </p>
        </div>

        <div className="md:w-[85%] mx-auto">
          {/* Category Tabs — horizontal scroll on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
            {faqData.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => handleCategoryChange(idx)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border
                  ${activeCategory === idx
                    ? 'bg-[#1782C5] text-white border-[#1782C5]'
                    : 'bg-white text-[#1E1E1E] border-[#C3C3C3] hover:border-[#1782C5] hover:text-[#1782C5]'
                  }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="min-h-[300px]">
            {faqData[activeCategory].questions.map((item, idx) => (
              <AccordionItem
                key={idx}
                question={item.q}
                answer={item.a}
                isOpen={openIndex === idx}
                onToggle={() => handleToggle(idx)}
              />
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-10 border border-[#1782C5] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#F5FAFF]">
            <div>
              <h2 className="font-medium text-lg md:text-xl text-[#1E1E1E]">Still have questions?</h2>
              <p className="text-sm md:text-base text-[#1E1E1EBF] mt-1">
                Our support team is ready to help you with any additional queries.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="mailto:info@airbio.in">
                <button className="bg-white text-[#1782C5] border border-[#1782C5] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#1782C5] hover:text-white transition-colors duration-200 whitespace-nowrap">
                  Email Us
                </button>
              </a>
              <a href="https://api.whatsapp.com/send?phone=9899829299" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#1782C5] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#1166A0] transition-colors duration-200 whitespace-nowrap">
                  Chat on WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default FAQ
