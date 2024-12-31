import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <Card
      data-aos="zoom-in"
      className="min-h-[85vh] bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 shadow-2xl rounded-3xl p-8 space-y-8 border border-indigo-200"
    >
      <CardHeader className="border-b border-indigo-200 pb-6 mb-6">
        <CardTitle className="text-4xl font-extrabold text-indigo-800 uppercase tracking-widest">
          Contact
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="container mx-auto flex flex-wrap sm:flex-nowrap">
          {/* Map Section */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28930.036517531425!2d67.04364432024742!3d24.991464529782892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3411d1b1aa5dd%3A0x7f8008a575c0b797!2sNew%20Karachi%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1732746844985!5m2!1sen!2s"
              style={{ filter: "contrast(1.2) opacity(0.4)" }}
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  New Karachi Town
                  <br />
                  Karachi, Karachi City, Sindh
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  href="mailto:gull33416@email.com"
                  className="text-indigo-500 leading-relaxed"
                >
                  gull33416@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">12341089811</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-6 rounded-lg shadow-lg">
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="scroll-m-20 text-sm font-semibold tracking-tight"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="scroll-m-20 text-sm font-semibold tracking-tight"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="scroll-m-20 text-sm font-semibold tracking-tight"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <Button className="text-white bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Send
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Contact;
