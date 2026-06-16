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
          content="Read AirBio's Return and Refund Policy for laboratory equipment including Biosafety Cabinets, Laminar Flow, PCR Workstations, Pass Boxes, Air Showers and more."
        />
        <link rel="canonical" href="https://www.airbio.in/return-refund-policy" />
      </Helmet>

      <div>
        <Header />
        <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />

        <div className="p-5 py-10">
          {/* Hero Section */}
          <div className="text-center mb-10">
            <h1 className="font-medium text-[#1782C5] text-3xl md:text-4xl">
              Return & Refund Policy
            </h1>
            <p className="mt-2 md:text-base text-[#1E1E1E] text-opacity-75">
              AirBio Technologies Pvt. Ltd. | Effective Date: 15-06-2026
            </p>
          </div>

          {/* Intro Banner */}
          <div className="bg-[#1782C5] md:w-[80%] mx-auto rounded-xl p-6 px-8 text-white mb-10">
            <p className="text-sm md:text-base leading-relaxed">
              At AirBio Technologies Pvt. Ltd., customer satisfaction is our priority. 
              We strive to ensure that all products are delivered in perfect condition. 
              This Return and Refund Policy outlines the conditions under which returns, 
              replacements, and refunds may be accepted.
            </p>
          </div>

          {/* Main Content */}
          <div className="md:w-[80%] mx-auto font-custom">
            
            {/* 1. Return Eligibility */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">1. Return Eligibility</h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                Returns are accepted only under the following circumstances:
              </p>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-2 ml-2">
                <li>Product received is damaged during transit.</li>
                <li>Product received is defective or non-functional upon delivery.</li>
                <li>Product delivered differs substantially from the product ordered.</li>
                <li>Incorrect product shipped by AirBio Technologies Pvt. Ltd.</li>
              </ul>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mt-4">
                The customer must notify AirBio within <b>7 days</b> of delivery by emailing 
                <a href="mailto:info@airbio.in" className="text-[#1782C5] hover:underline"> info@airbio.in</a> 
                with supporting photographs, videos, and order details.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            {/* 2. Non-Returnable Products */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">2. Non-Returnable Products</h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                Due to the specialized and custom-built nature of laboratory equipment, the following products are generally non-returnable:
              </p>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-1 ml-2">
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
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mt-4">
                Returns for these products will only be accepted if the product is found defective, damaged during transit, or supplied incorrectly.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            {/* 3. Return Window */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">3. Return Window</h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed">
                Customers must report any issue within <b>7 days</b> of delivery. Once approved, the product must be returned within <b>30 days</b> from the date of delivery.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            {/* 4. Return Process */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">4. Return Process</h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mb-3">
                To initiate a return, please contact us with:
              </p>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-1 ml-2">
                <li>Order Number</li>
                <li>Product Name</li>
                <li>Reason for Return</li>
                <li>Photographs or Videos of the Product</li>
                <li>Delivery Documentation</li>
              </ul>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed mt-4">
                Email: <a href="mailto:info@airbio.in" className="text-[#1782C5]">info@airbio.in</a><br />
                Phone: +91-9899829299
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            {/* 5. Refund Method */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">5. Refund Method</h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed">
                Refunds will be issued to the original payment method within 7–15 business days after inspection and approval.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            {/* 6. No Restocking Fee */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">6. No Restocking Fee</h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed">
                AirBio does not charge a restocking fee for approved returns unless otherwise specified in writing.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            {/* 7. Warranty Reference */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">7. Warranty Reference</h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed">
                All warranty claims are governed by AirBio’s separate Warranty Policy. This Return & Refund Policy is distinct from warranty services.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            {/* 8. Return Shipping Charges */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">8. Return Shipping Charges</h2>
              <ul className="list-disc list-inside text-[#1E1E1E] text-opacity-75 text-sm md:text-base space-y-2 ml-2">
                <li>If the return is due to our error (defect, transit damage, wrong product), AirBio may cover return shipping.</li>
                <li>For all other cases, the customer is responsible for return shipping costs.</li>
              </ul>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            {/* 9. Cancellation Policy */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">9. Cancellation Policy</h2>
              <p className="text-[#1E1E1E] text-opacity-75 text-sm md:text-base leading-relaxed">
                Orders can be cancelled before manufacturing or dispatch. Once production starts, cancellation may attract charges.
              </p>
            </div>
            <hr className="border-[#C3C3C3] mb-8" />

            {/* 10. Contact Information */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#1782C5] mb-3">10. Contact Information</h2>
              <div className="text-sm md:text-base space-y-2 text-[#1E1E1E] text-opacity-75">
                <p><strong>AirBio Technologies Pvt. Ltd.</strong></p>
                <p>Email: <a href="mailto:info@airbio.in" className="text-[#1782C5] hover:underline">info@airbio.in</a></p>
                <p>Phone: <a href="tel:+919899829299" className="text-[#1782C5] hover:underline">+91-9899829299</a></p>
                <p>Website: <a href="https://www.airbio.in" className="text-[#1782C5] hover:underline">www.airbio.in</a></p>
                <p>Address: 12/42, Pioneer Complex Compound, Site IV, Sahibabad Industrial Area, Ghaziabad – 201010, Uttar Pradesh</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ReturnRefundPolicy;