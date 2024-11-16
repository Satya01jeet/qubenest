import React from "react";

const RefundCancellationPolicy = () => {
  return (
    <div className="p-8 bg-gray-50 text-gray-800 mt-16">
      {/* Section 1 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Refund and Cancellation Policy</h2>
        <p className="leading-relaxed">
          Our focus is on achieving complete customer satisfaction. If you are dissatisfied with the services provided, we are committed to refunding your money, provided the reasons are genuine and verified after a thorough investigation. We encourage you to carefully review the details of each deal before making a purchase, as it includes comprehensive information about the services or products you are acquiring.
        </p>
        <p className="leading-relaxed mt-4">
          In case of dissatisfaction with our services, clients have the right to cancel their projects and request a refund. The details of our cancellation and refund policies are outlined below:
        </p>
      </div>

      {/* Section 2 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Cancellation Policy</h2>
        <p className="leading-relaxed">
          For any cancellations, please reach out to us via the <strong>Contact Us</strong> link.
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>
            If a confirmed booking is canceled within 48 hours and up to 12 hours before the check-in, a cancellation fee equivalent to <strong>25% of the booking amount</strong> will be charged.
          </li>
          <li>
            The cancellation charge is subject to the <strong>minimum flat rate mentioned</strong> for the booking.
          </li>
        </ul>
      </div>

      {/* Section 3 */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">3. Refund Policy</h2>
        <p className="leading-relaxed">
          We strive to deliver the most suitable and satisfactory services to our clients.
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>
            In cases where clients are not completely satisfied with our services or products, we offer the option to request a refund.
          </li>
          <li>
            Refunds will be processed as follows:
            <ul className="list-decimal list-inside ml-6 mt-2">
              <li>
                For payments made via credit card, the refund will be credited to the <strong>original credit card</strong> used during the transaction.
              </li>
              <li>
                For payments made through a payment gateway, the refund will be credited to the <strong>same account</strong> used for the payment.
              </li>
            </ul>
          </li>
        </ul>
        <p className="leading-relaxed mt-4">
          We are dedicated to ensuring a smooth and fair resolution in case of any dissatisfaction, adhering to the policies stated above.
        </p>
      </div>
    </div>
  );
};

export default RefundCancellationPolicy;
