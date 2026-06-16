import React from "react";
import Header from "../Home/Header";
import { Helmet } from "react-helmet-async";

const ReturnRefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Return & Refund Policy - AirBio Technologies Pvt. Ltd.</title>
        <meta
          name="description"
          content="AirBio Return and Refund Policy - Complete terms for returns, refunds, replacements, cancellations for laboratory equipment."
        />
        <link rel="canonical" href="https://www.airbio.in/return-refund-policy" />
      </Helmet>

      <div>
        <Header />
        <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />

        <div className="p-5 py-10">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="font-medium text-[#1782C5] text-3xl md:text-4xl mb-2">
              Return & Refund Policy
            </h1>
            <p className="text-[#1E1E1E] text-opacity-75">
              AirBio Technologies Pvt. Ltd. | Effective Date: 15-06-2026
            </p>
          </div>

          {/* Intro Banner */}
          <div className="bg-[#1782C5] md:w-[80%] mx-auto rounded-xl p-6 px-8 text-white mb-12 leading-relaxed">
            <p>
              At AirBio Technologies Pvt. Ltd., customer satisfaction is our priority. 
              We strive to ensure that all products are delivered in perfect condition 
              and perform according to specifications. This Return and Refund Policy 
              outlines the conditions under which returns, replacements, and refunds may be accepted.
            </p>
          </div>

          {/* Main Content - Same width as Privacy Policy */}
          <div className="md:w-[80%] mx-auto font-custom space-y-12 text-[#1E1E1E]">

            {/* 1. Return Eligibility */}
            <section>
              <h2 className="text-2xl font-bold text-[#1782C5] mb-4">1. Return Eligibility</h2>
              <p className="mb-4">Returns are accepted only under the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Product received is damaged during transit.</li>
                <li>Product received is defective or non-functional upon delivery.</li>
                <li>Product delivered differs substantially from the product ordered.</li>
                <li>Incorrect product shipped by AirBio Technologies Pvt. Ltd.</li>
              </ul>
              <p className="mt-4">
                The customer must notify AirBio within <strong>7 days</strong> of delivery by emailing 
                <a href="mailto:info@airbio.in" className="text-[#1782C5] hover:underline"> info@airbio.in</a> 
                with supporting photographs, videos, and order details.
              </p>
            </section>

            {/* 2. Non-Returnable Products */}
            <section>
              <h2 className="text-2xl font-bold text-[#1782C5] mb-4">2. Non-Returnable Products</h2>
              <p className="mb-4">
                Due to the specialized and custom-built nature of laboratory equipment, the following 
                products are generally non-returnable:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Biosafety Cabinets</li>
                <li>Laminar Air Flow Cabinets</li>
                <li>Fume Hoods</li>
                <li>PCR Workstations</li>
                <li>Clean Room Equipment</li>
                <li>Customized Laboratory Furniture</li>
                <li>Made-to-order Equipment</li>
                <li>Products manufactured according to customer specifications</li>
                <li>Products installed, commissioned, modified, or used after delivery</li>
              </ul>
              <p className="mt-4">
                Returns for these products will only be accepted if the product is found defective, 
                damaged during transit, or supplied incorrectly.
              </p>
            </section>

            {/* 3. Return Window */}
            <section>
              <h2 className="text-2xl font-bold text-[#1782C5] mb-4">3. Return Window</h2>
              <p className="leading-relaxed">
                Customers must report any damaged, defective, non-functional, or incorrectly supplied 
                products within <strong>7 days</strong> of delivery by contacting AirBio Technologies Pvt. Ltd. 
                with supporting photographs, videos, and order details.<br/><br/>
                
                Once a return request has been reviewed and approved by AirBio, the returned product must 
                be shipped and delivered to the designated AirBio return address within <strong>30 days</strong> 
                from the date of delivery.<br/><br/>
                
                Returns received after the 30-day return period may not be eligible for refund, replacement, 
                or repair unless otherwise approved in writing by AirBio Technologies Pvt. Ltd.
              </p>
            </section>

            {/* 4. Return Process */}
            <section>
              <h2 className="text-2xl font-bold text-[#1782C5] mb-4">4. Return Process</h2>
              <p className="mb-3">To initiate a return, customers must contact:</p>
              <p><strong>AirBio Technologies Pvt. Ltd.</strong></p>
              <p>Email: <a href="mailto:info@airbio.in" className="text-[#1782C5]">info@airbio.in</a></p>
              <p>Phone: +91-9899829299</p>
              <p>Website: www.airbio.in</p>
              
              <p className="mt-4 mb-2">Please provide:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Order Number</li>
                <li>Product Name</li>
                <li>Reason for Return</li>
                <li>Photographs or Videos of the Product</li>
                <li>Delivery Documentation (if applicable)</li>
              </ul>
              <p className="mt-4">
                Upon review and approval, AirBio will provide return instructions and the designated return address.
              </p>
            </section>

            {/* 5. Return Method */}
            <section>
              <h2 className="text-2xl font-bold text-[#1782C5] mb-4">5. Return Method</h2>
              <p className="leading-relaxed">
                Approved returns must be shipped by courier, freight carrier, or other approved transportation 
                service. Customers must obtain written authorization from AirBio before shipping any return.
              </p>
            </section>

            {/* 6. Refund Method */}
            <section>
              <h2 className="text-2xl font-bold text-[#1782C5] mb-4">6. Refund Method</h2>
              <p className="leading-relaxed">
                Refunds will be issued to the original payment method used for purchase, including bank 
                transfer, credit/debit card, or other approved payment methods.
              </p>
            </section>

            {/* 7. No Restocking Fee */}
            <section>
              <h2 className="text-2xl font-bold text-[#1782C5] mb-4">7. No Restocking Fee</h2>
              <p className="leading-relaxed">
                AirBio does not charge a restocking fee for approved returns unless otherwise specified in writing.
              </p>
            </section>

            {/* 8. Warranty Reference */}
            <section>
              <h2 className="text-2xl font-bold text-[#1782C5] mb-4">8. Warranty Reference</h2>
              <p className="leading-relaxed">
                AirBio Technologies Pvt. Ltd. provides warranty coverage on eligible products against 
                manufacturing defects and workmanship issues for the warranty period specified in the 
                product quotation, invoice, user manual, or warranty certificate.<br/><br/>
                
                The warranty applies only to defects arising under normal use and operation of the 
                equipment. The warranty does not cover damage resulting from improper installation, 
                misuse, negligence, unauthorized modifications, accidents, power fluctuations, transportation 
                after delivery, normal wear and tear, or failure to follow operating instructions.<br/><br/>

                Warranty claims must be reported to AirBio in writing along with the product serial number,
                purchase details, and supporting photographs or videos where applicable.<br/><br/>

                Upon verification of the warranty claim, AirBio may, at its sole discretion, provide repair
                services, replacement parts, product replacement, or technical support assistance.<br/><br/>

                Warranty services are governed by AirBio's applicable Warranty Policy and are separate
                from the Return and Refund Policy. The availability of warranty service may vary depending
                on product type, installation location, and country of use.
              </p>
            </section>

            {/* 9. Return Shipping Charges */}
            <section>
              <h2 className="text-2xl font-bold text-[#1782C5] mb-4">9. Return Shipping Charges</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>If the return is due to manufacturing defects, transit damage, or shipping errors by AirBio, return shipping costs may be covered or reimbursed by AirBio.</li>
                <li>For all other approved returns, customers are responsible for return shipping costs, customs duties, taxes, insurance charges, and freight expenses.</li>
              </ul>
            </section>

            {/* 10. Inspection and Approval */}
            <section>
              <h2 className="text-2xl font-bold text-[#1782C5] mb-4">10. Inspection and Approval</h2>
              <p className="leading-relaxed">
                All returned products are inspected upon receipt. Refunds or replacements will only be 
                processed after verification that the reported issue is valid and complies with this policy.<br/><br/>
                
                AirBio reserves the right to reject returns that:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Show signs of misuse</li>
                <li>Have been altered or modified</li>
                <li>Are damaged after delivery due to improper handling</li>
                <li>Are incomplete or missing components</li>
              </ul>
            </section>

            {/* 11. Refund Policy */}
            <section>
              <h2 className="text-2xl font-bold text-[#1782C5] mb-4">11. Refund Policy</h2>
              <p className="leading-relaxed">
                Once the returned product is received and approved, refunds will be processed within 
                <strong>7–15 business days</strong>.<br/><br/>
                
                Refunds will be issued through the original payment method used during purchase unless 
                otherwise agreed in writing.<br/><br/>
                
                Refund amounts may exclude:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Installation charges</li>
                <li>Commissioning charges</li>
                <li>Shipping charges</li>
                <li>Customs duties and taxes</li>
                <li>Banking or transaction fees</li>
              </ul>
            </section>

            {/* 12. Replacement Policy */}
            <section>
              <h2 className="text-2xl font-bold text-[#1782C5] mb-4">12. Replacement Policy</h2>
              <p className="leading-relaxed">
                Where appropriate, AirBio may offer:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Product replacement</li>
                <li>Replacement parts</li>
                <li>Repair services</li>
                <li>Technical support</li>
              </ul>
              <p className="mt-3">instead of a monetary refund.</p>
            </section>

            {/* 13. International Orders */}
            <section>
              <h2 className="text-2xl font-bold text-[#1782C5] mb-4">13. International Orders</h2>
              <p className="leading-relaxed">
                For international shipments:<br/><br/>
                • Customers are responsible for complying with local import regulations.<br/>
                • Customs duties, taxes, import fees, and local regulatory approvals are the responsibility of the customer unless otherwise agreed.<br/>
                • Refunds will not be provided due to customs clearance delays, import restrictions, or regulatory requirements in the destination country.
              </p>
            </section>

            {/* 14. Cancellation Policy */}
            <section>
              <h2 className="text-2xl font-bold text-[#1782C5] mb-4">14. Cancellation Policy</h2>
              <p className="leading-relaxed">
                Orders may be cancelled before manufacturing or dispatch begins.<br/><br/>
                Once production, customization, packaging, or shipment has commenced, cancellation 
                requests may not be accepted.<br/><br/>
                Approved cancellations may be subject to administrative, manufacturing, and processing charges.
              </p>
            </section>

            {/* 15. Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-[#1782C5] mb-4">15. Contact Information</h2>
              <div className="bg-[#F8F8F8] p-6 rounded-xl">
                <p className="font-semibold">AirBio Technologies Pvt. Ltd.</p>
                <p>Email: <a href="mailto:info@airbio.in" className="text-[#1782C5]">info@airbio.in</a></p>
                <p>Phone: +91-9899829299</p>
                <p>Website: <a href="https://www.airbio.in" className="text-[#1782C5]">www.airbio.in</a></p>
                <p className="mt-3">
                  Business Address:<br />
                  12/42, Pioneer Complex Compound, Site IV,<br />
                  Sahibabad Industrial Area, Ghaziabad – 201010,<br />
                  Uttar Pradesh
                </p>
                <p className="mt-4">
                  For any questions regarding returns, refunds, replacements, or warranty support, please 
                  contact our customer support team.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
};

export default ReturnRefundPolicy;