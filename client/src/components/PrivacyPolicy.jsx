import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="p-8 bg-gray-50 text-gray-800 mt-16">
      {/* Section 1 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Statement of Privacy Practice and Policy</h2>
        <p className="leading-relaxed">
          When You use our Website, We collect and store your personal information which is provided by You from time to time. 
          We are not in the business of selling the personal information collected by Us from You. We use Your information 
          in order to deliver services to You through the Platform including the delivery of services through such agreements 
          or arrangements that may be executed by Us with You and/or with a third party ("Platform Services"); in processing 
          your payments; communicating with you about the Platform Services such as referral programs and any other promotional 
          offers; generally maintain Your accounts with us, display content a User reviews, and try to enhance Your overall 
          experience on the Platform.
        </p>
      </div>

      {/* Section 2 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Authorisation and Consent</h2>
        <p className="leading-relaxed">
          You hereby expressly provide the Company with Your consent and authorization to collect, share, store, and transfer 
          any information or sensitive personal information as provided by You in relation to the Platform Services. By agreeing 
          to the terms of this Agreement, You agree to Us sharing and transferring Your information or sensitive personal information 
          with any third party including hosts or service providers for the purposes necessary in order to provide the Platform 
          Services, to troubleshoot problems, enforce our Terms of Use or Privacy Policy, to comply with our legal obligations or 
          to prevent, detect, mitigate, and investigate fraudulent or illegal activities related to our Platform Services and for 
          such other purposes mentioned herein.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">3. Personal Data & Information</h2>
        <h3 className="text-lg font-medium mb-2">3.1 Personal Information</h3>
        <p className="leading-relaxed">
          The term "personal information" encompasses data that, either independently or when combined with other information, 
          can be used to easily identify or get in touch with you. This data may encompass details like your name, address, 
          email address, phone number, and more.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
