import React from "react";
import { motion } from "framer-motion";

function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-r from-[#f7fafc] to-[#fdfdfd] py-16 px-4">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose MonksHub
        </h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Masters in Hub offers expert-led courses, hands-on training, and
          industry insights to accelerate career growth rapidly.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Features */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition"
          >
            <div className="text-purple-500 text-3xl mb-2">🌍</div>
            <h4 className="font-semibold text-lg">100K+</h4>
            <p className="text-sm text-gray-500">Worldwide students</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition"
          >
            <div className="text-green-500 text-3xl mb-2">🎧</div>
            <h4 className="font-semibold text-lg">Support</h4>
            <p className="text-sm text-gray-500">Lifetime support</p>
          </motion.div>
        </div>

        {/* Center Video */}
        <motion.div
          className="relative z-10 rounded-xl overflow-hidden shadow-lg w-[250px] md:w-[300px] h-[350px] md:h-[400px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <video
            src="/assets/video1.mp4"
            className="object-cover w-full h-full"
            autoPlay
            loop
            muted
            playsInline
          ></video>

          <div className="absolute bottom-3 left-3 text-white font-semibold text-lg">
            Video Resume
          </div>
        </motion.div>

        {/* Right Features */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition"
          >
            <div className="text-green-500 text-3xl mb-2">💬</div>
            <h4 className="font-semibold text-lg">Networking</h4>
            <p className="text-sm text-gray-500">
              Connection, Collaboration, and Growth
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition"
          >
            <div className="text-pink-500 text-3xl mb-2">📄</div>
            <h4 className="font-semibold text-lg">Build Resume</h4>
            <p className="text-sm text-gray-500">
              Build your success with proven expertise
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
