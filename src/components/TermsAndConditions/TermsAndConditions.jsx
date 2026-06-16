import React from "react";
import Header from "../Home/Header";

import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>
          AirBio Terms and Conditions - Website Usage and Product Policies
        </title>
        <meta
          name="description"
          content="Review AirBio website terms, product policies and user guidelines for Biosafety Cabinet, Class II BSC, Laminar Flow Cabinet and laboratory safety solutions."
        />
        <link
          rel="canonical"
          href="https://www.airbio.in/terms-and-conditions"
        />
      </Helmet>
      <div>
        <Header />
        <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />

        <div className="p-5 py-10">
          {/* Hero Section */}
          <div className="text-center mb-10">
            <h1 className="font-medium text-[#1782C5] text-3xl md:text-4xl">
              Terms & Conditions
            </h1>
            <p className="mt-2 md:text-base text-[#1E1E1E] text-opacity-75">
              Last Updated: May 18, 2026
            </p>
          </div>

          {/* Intro Banner */}
          <div className="bg-[#1782C5] md:w-[80%] mx-auto rounded-xl p-6 px-8 text-white mb-10">
            <p className="text-sm md:text-base leading-relaxed">
              Welcome to AirBio Technologies Private Limited ("AirBio",
              "Company", "we", "our", or "us"). These Terms and Conditions
              govern your use of our website, products, services, quotations,
              installations, and communications available through AirBio. By
              accessing or using the AirBio website, submitting inquiries,
              placing orders, or engaging with our services, you agree to comply
              with and be bound by these Terms and Conditions.
            </p>
          </div>

          {/* Main Content */}
          <div className="md:w-[80%] mx-auto font-custom">
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                1. Company Information
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                AirBio Technologies Private Limited is engaged in the
                manufacturing, supply, installation, export, and service of
                cleanroom and controlled environment solutions including but not
                limited to:
              </p>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-1 ml-2">
                <li>Biosafety Cabinets</li>
                <li>Laminar Air Flow Systems</li>
                <li>Fume Hoods</li>
                <li>HEPA Filtration Systems</li>
                <li>Pass Boxes</li>
                <li>Air Showers</li>
                <li>Dispensing Booths</li>
                <li>PCR Workstations</li>
                <li>Laboratory Furniture</li>
                <li>Modular Clean Rooms</li>
                <li>HVAC and Controlled Environment Solutions</li>
              </ul>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mt-3">
                The company reserves the right to update, modify, discontinue,
                or replace any product or service without prior notice.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                2. Acceptance of Terms
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                By using this website or purchasing products/services from
                AirBio, you confirm that:
              </p>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-1 ml-2">
                <li>
                  You are legally eligible to enter into binding agreements.
                </li>
                <li>
                  The information provided by you is accurate and complete.
                </li>
                <li>
                  You agree to follow all applicable laws and regulations.
                </li>
                <li>You accept these Terms and Conditions in full.</li>
              </ul>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mt-3">
                If you do not agree with any part of these Terms, you should not
                use our website or services.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                3. Website Usage
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                Users may access the AirBio website only for lawful purposes.
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-1 ml-2">
                <li>Use the website for fraudulent or illegal activities.</li>
                <li>
                  Attempt unauthorized access to servers, databases, or systems.
                </li>
                <li>Upload malicious software, viruses, or harmful code.</li>
                <li>
                  Copy, reproduce, or misuse website content without written
                  permission.
                </li>
                <li>
                  Interfere with website security, functionality, or
                  performance.
                </li>
              </ul>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mt-3">
                AirBio reserves the right to restrict or terminate access to
                users violating these conditions.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                4. Product Information
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                We strive to ensure that all product specifications,
                descriptions, technical data, images, dimensions, and
                performance details are accurate. However:
              </p>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-1 ml-2">
                <li>Product images are for reference purposes only.</li>
                <li>
                  Minor variations may occur due to manufacturing improvements
                  or customization.
                </li>
                <li>
                  Technical specifications may change without prior notice.
                </li>
                <li>
                  Certain products may require site-specific validation and
                  engineering assessment.
                </li>
              </ul>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mt-3">
                Customers are responsible for verifying suitability of products
                for their intended application before purchase.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                5. Quotations and Pricing
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                All quotations issued by AirBio:
              </p>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-1 ml-2">
                <li>
                  Are subject to change without notice unless specifically
                  agreed in writing.
                </li>
                <li>
                  Are valid only for the duration mentioned in the quotation.
                </li>
                <li>
                  Exclude taxes, duties, freight, installation, and other
                  charges unless stated.
                </li>
                <li>
                  May vary based on customization, project scope, location, and
                  technical requirements.
                </li>
              </ul>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mt-3">
                Prices are subject to applicable GST and government taxes.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                6. Orders and Confirmation
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                Orders shall be considered confirmed only after receipt of
                written purchase order from the customer, acceptance and
                confirmation by AirBio, and receipt of agreed advance payment,
                if applicable.
              </p>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                AirBio reserves the right to:
              </p>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-1 ml-2">
                <li>Reject or cancel orders.</li>
                <li>Refuse service in certain regions.</li>
                <li>
                  Modify delivery schedules based on material availability.
                </li>
                <li>Request additional project or technical information.</li>
              </ul>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mt-3">
                Any modification requested after order confirmation may result
                in revised pricing and timelines.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                7. Payment Terms
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                Payment terms shall be governed by the mutually agreed quotation
                or invoice. Unless otherwise agreed:
              </p>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-1 ml-2">
                <li>Advance payments may be required before production.</li>
                <li>
                  Balance payments must be completed before dispatch or
                  installation.
                </li>
                <li>
                  Delayed payments may attract interest or service suspension.
                </li>
                <li>
                  Customers shall bear all bank charges and transaction fees.
                </li>
              </ul>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mt-3">
                AirBio reserves the right to withhold delivery, installation,
                documentation, warranty support, or services in case of overdue
                payments.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                8. Shipping and Delivery
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                Delivery timelines are approximate and may vary due to:
              </p>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-1 ml-2">
                <li>Raw material availability</li>
                <li>Transportation delays</li>
                <li>Government restrictions</li>
                <li>Force majeure events</li>
                <li>Site readiness issues</li>
                <li>Third-party logistics delays</li>
              </ul>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mt-3">
                AirBio shall not be liable for indirect losses caused by delayed
                deliveries. Risk associated with products may transfer to the
                customer upon dispatch, delivery, or installation as agreed.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                9. Installation and Site Requirements
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                For installation-based projects, customers must ensure:
              </p>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-1 ml-2">
                <li>Safe and accessible installation site</li>
                <li>
                  Availability of electricity, utilities, and infrastructure
                </li>
                <li>Proper civil and electrical readiness</li>
                <li>Compliance with local regulations and safety norms</li>
              </ul>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mt-3">
                Additional costs arising from site delays, rework, travel,
                accommodation, or modifications may be charged separately.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                10. Inspection and Acceptance
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed">
                Customers are advised to inspect products immediately upon
                delivery. Any visible damage, shortage, or discrepancy must be
                reported to AirBio in writing within{" "}
                <span className="font-semibold text-[#1E1E1E]">48 hours</span>{" "}
                of receipt. Failure to notify within the specified period may be
                considered acceptance of goods in satisfactory condition.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                11. Warranty
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                AirBio provides warranty support on selected products subject to
                the following conditions:
              </p>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-1 ml-2">
                <li>Warranty applies only to manufacturing defects.</li>
                <li>
                  Warranty period shall be mentioned in the quotation, invoice,
                  or product documentation.
                </li>
                <li>
                  Warranty does not cover misuse, negligence, improper handling,
                  unauthorized modifications, accidents, voltage fluctuations,
                  consumables, or normal wear and tear.
                </li>
                <li>
                  Replacement or repair decisions shall remain solely with
                  AirBio.
                </li>
              </ul>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mt-3">
                Warranty becomes void if products are serviced or modified by
                unauthorized personnel.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                12. Service and Maintenance
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                Preventive maintenance and calibration services may be provided
                separately under annual maintenance contracts (AMC) or service
                agreements. Customers are responsible for:
              </p>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-1 ml-2">
                <li>Regular maintenance</li>
                <li>Proper equipment operation</li>
                <li>Maintaining recommended environmental conditions</li>
                <li>Timely replacement of consumables and filters</li>
              </ul>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mt-3">
                AirBio shall not be responsible for performance issues caused by
                improper maintenance or non-compliance with operational
                guidelines.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                13. Returns and Cancellation
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                Customized, fabricated, or made-to-order products are generally
                non-returnable and non-refundable. Order cancellations must be
                requested in writing, may attract cancellation charges, and are
                subject to approval by AirBio.
              </p>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-2">
                Approved returns, if any, must be:
              </p>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-1 ml-2">
                <li>Unused and in original condition.</li>
                <li>Returned with proper documentation.</li>
                <li>
                  Shipped at the customer's expense unless otherwise agreed.
                </li>
              </ul>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                14. Intellectual Property
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                All content available on the AirBio website including logos,
                product designs, technical documents, brochures, images,
                graphics, website content, software and branding are the
                intellectual property of AirBio or its licensors.
              </p>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed">
                No material may be copied, reproduced, distributed, or used
                commercially without prior written consent.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                15. Confidentiality
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed">
                Both parties agree to maintain confidentiality of technical,
                commercial, pricing, project, and business information shared
                during discussions or transactions. Confidential information
                shall not be disclosed to third parties without prior written
                permission unless required by law.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                16. Limitation of Liability
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                To the maximum extent permitted by law, AirBio shall not be
                liable for:
              </p>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-1 ml-2">
                <li>Indirect or consequential damages</li>
                <li>Loss of profits or business interruption</li>
                <li>Data loss or operational downtime</li>
                <li>Delays caused by third parties</li>
                <li>Improper product usage</li>
                <li>Environmental or site-related conditions</li>
              </ul>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mt-3">
                AirBio's total liability, if any, shall not exceed the amount
                paid by the customer for the specific product or service.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                17. Compliance and Safety
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                Customers are responsible for operating products in accordance
                with:
              </p>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-1 ml-2">
                <li>Applicable laboratory and industrial safety standards</li>
                <li>Government regulations</li>
                <li>Environmental requirements</li>
                <li>Operational manuals and technical guidelines</li>
              </ul>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mt-3">
                AirBio does not assume responsibility for misuse or unsafe
                operation of products.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                18. Third-Party Links
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed">
                The AirBio website may contain links to third-party websites for
                informational purposes. AirBio does not control or endorse
                external websites and is not responsible for their content,
                policies, or services.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                19. Privacy
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                Customer information submitted through the website or during
                business transactions shall be handled in accordance with our
                Privacy Policy. By using our services, you consent to the
                collection and processing of information necessary for:
              </p>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-1 ml-2">
                <li>Order processing</li>
                <li>Customer support</li>
                <li>Technical communication</li>
                <li>Service updates</li>
                <li>Business operations</li>
              </ul>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                20. Force Majeure
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                AirBio shall not be held liable for failure or delay in
                performance due to events beyond reasonable control including:
              </p>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-1 ml-2">
                <li>Natural disasters, Fire, Flood</li>
                <li>Pandemic</li>
                <li>Government actions</li>
                <li>Labor disputes</li>
                <li>Transportation disruptions</li>
                <li>Power failures</li>
                <li>War or civil disturbances</li>
              </ul>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mt-3">
                Delivery schedules and obligations may be reasonably extended
                during such events.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                21. Governing Law and Jurisdiction
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed">
                These Terms and Conditions shall be governed by and interpreted
                in accordance with the laws of India. Any disputes arising out
                of these Terms shall be subject to the exclusive jurisdiction of
                courts located in Ghaziabad, Uttar Pradesh.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                22. Changes to Terms and Conditions
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed">
                AirBio reserves the right to revise, modify, or update these
                Terms and Conditions at any time without prior notice. Updated
                versions shall become effective immediately upon publication on
                the website. Users are encouraged to review this page
                periodically.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                23. Contact Information
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                For any questions regarding these Terms and Conditions, please
                contact:
              </p>
              <div className="text-sm md:text-base space-y-1">
                <p className="font-semibold text-[#1E1E1E]">
                  AirBio Technologies Private Limited
                </p>
                <p className="text-[#1E1E1E] text-opacity-75">
                  Website:{" "}
                  <a
                    href="https://www.airbio.in"
                    className="text-[#1782C5] hover:underline"
                  >
                    www.airbio.in
                  </a>
                </p>
                <p className="text-[#1E1E1E] text-opacity-75">
                  Email:{" "}
                  <a
                    href="mailto:info@airbio.in"
                    className="text-[#1782C5] hover:underline"
                  >
                    info@airbio.in
                  </a>
                </p>
                <p className="text-[#1E1E1E] text-opacity-75">
                  Phone:{" "}
                  <a
                    href="tel:+919899829299"
                    className="text-[#1782C5] hover:underline"
                  >
                    +91-9899829299
                  </a>
                </p>
                <p className="text-[#1E1E1E] text-opacity-75">
                  Address: 12/42, Pioneer Compound, Site IV, Sahibabad
                  Industrial Area, Ghaziabad- 201010, Uttar Pradesh.
                </p>
              </div>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                24. Entire Agreement
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed">
                These Terms and Conditions constitute the complete agreement
                between AirBio and the user/customer regarding the use of the
                website, products, and services. Any separate written agreement,
                quotation, purchase order, or service contract may include
                additional project-specific terms.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                25. Severability
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed">
                If any provision of these Terms is found invalid or
                unenforceable under applicable law, the remaining provisions
                shall continue to remain valid and enforceable.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">
                26. Contact Support
              </h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed">
                For technical support, sales inquiries, service requests, or
                project discussions, customers may reach AirBio through the
                official contact details available on the website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
