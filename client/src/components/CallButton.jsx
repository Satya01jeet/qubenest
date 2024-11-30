import React from 'react';

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+917619636239"
      className="fixed md:hidden inset-0 m-auto w-max h-max bg-gradient-to-r from-orange-400 to-orange-700 text-white rounded-lg px-4 py-3 flex items-center justify-center shadow-lg transition transform translate-y-0"
      aria-label="Call us at +919958895043"
      style={{ top: "90%", transform: "translateY(-50%)" }}
    >
      📞 +91-7619636239
    </a>
  );
};

export default FloatingCallButton;
