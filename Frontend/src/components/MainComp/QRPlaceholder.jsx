import React from "react";
import { TypeAnimation } from "react-type-animation";
import ak from "../../assets/Akupi.jpg";

// QR code area that is theme-friendly, full width, no extra background, and looks modern
function QRPlaceholder() {
  return (
    <div className="flex items-center justify-center w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-tr from-blue-100 via-white to-blue-200 border-2 border-primary rounded-2xl shadow-md">
      <img
        src={ak}
        alt="Scan to pay QR"
        className="w-60 h-60 sm:w-68 sm:h-68 rounded-xl shadow border border-primary object-contain"
      />
    </div>
  );
}


export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center py-10 px-2 sm:px-6 transition-all duration-500">
      <section className="w-full flex flex-col items-center mb-12">
        <span className="font-bold px-5 py-1 rounded-full mb-2 text-xs tracking-widest shadow">
          Services
        </span>
        <h1 className="w-full text-3xl sm:text-4xl font-black text-primary  drop-shadow select-none mb-2 text-center">
          Our Medical Shop Services
        </h1>
        <TypeAnimation
          sequence={[
            "Care · Convenience · Trust",
            1600,
            "Wellness Delivered Since 2005",
            1600,
            "Caring for You, Everyday",
            1600,
          ]}
          wrapper="span"
          className="block text-base sm:text-xl text-secondary/90 font-semibold py-2 tracking-wide text-center"
          speed={38}
          repeat={Infinity}
        />

        {/* Service Provided Section */}
        <section className="w-full mt-8">
          <h2 className="text-xl  font-bold mb-4 text-left">
            Services Provided
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc text-base sm:text-lg text-primary font-medium pl-5">
            <li>Prescription Medicines & OTC Drugs</li>
            <li>Ayurvedic & Herbal Remedies</li>
            <li>Mother & Baby Care Products</li>
            <li>First Aid & Surgical Supplies</li>
            <li>Blood Pressure/Sugar Check</li>
            <li>Vaccination & Immunization Guidance</li>
            <li>Home Delivery Services</li>
            <li>24/7 Customer Support</li>
            <li>All Digital Payments Accepted</li>
            <li>Annual Health Camps & Awareness</li>
          </ul>
        </section>

        {/* QR Placement Area */}
        <section className="flex flex-col sm:flex-row items-center justify-between w-full gap-7 mt-10 px-1">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-1">
              Scan to Pay or Get Our App
            </h3>
            <p className="text-primary">
              Use the QR code to make secure payments or to download our pharmacy app for seamless shopping and health tools.
            </p>
          </div>
          <div className="flex-shrink-0 mt-5 sm:mt-0 w-full max-w-xs">
            <QRPlaceholder />
          </div>
        </section>
      </section>
    </main>
  );
}
