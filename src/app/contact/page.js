import Nav from "@/components/Nav";
import React from "react";
import { AlertCircle, Mail, Radio } from "lucide-react";

function Contact() {
  return (
    <main className="w-full flex flex-col items-center justify-center bg-black text-red-500 min-h-screen px-4">
      <Nav />
      <section className="w-full max-w-4xl mt-12 mb-20 text-center">
        <h1 className="text-4xl font-bold mb-2 uppercase tracking-wider">
          Spider-Man Contact Portal
        </h1>
        <p className="text-sm italic text-gray-400 mb-10">
          {"\"Friendly neighborhood Spider-Man. Leave a tip, not a trap.\""}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Daily Bugle Tip */}
          <div className="bg-gray-900 border border-red-600 p-6 rounded-xl shadow-lg space-y-2">
            <div className="flex items-center gap-2 text-yellow-300">
              <AlertCircle size={20} />
              <h2 className="text-xl font-bold">Daily Bugle Tip Line</h2>
            </div>
            <p className="text-sm text-gray-300">
              Submit sightings or info on local threats. Anonymous tips welcome.
            </p>
            <button className="w-full mt-3 bg-red-600 hover:bg-red-700 transition-all px-4 py-2 rounded text-white">
              Submit Tip
            </button>
          </div>

          {/* Police Radio */}
          <div className="bg-gray-900 border border-blue-600 p-6 rounded-xl shadow-lg space-y-2">
            <div className="flex items-center gap-2 text-blue-300">
              <Radio size={20} />
              <h2 className="text-xl font-bold">Police Radio</h2>
            </div>
            <p className="text-sm text-gray-300">
              Emergency? Spider-Man monitors NYPD emergency band 13.3 MHz.
            </p>
            <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 transition-all px-4 py-2 rounded text-white">
              Broadcast Alert
            </button>
          </div>

          {/* Stark Secure Message */}
          <div className="bg-gray-900 border border-orange-500 p-6 rounded-xl shadow-lg space-y-2">
            <div className="flex items-center gap-2 text-orange-400">
              <Mail size={20} />
              <h2 className="text-xl font-bold">Stark Secure Message</h2>
            </div>
            <p className="text-sm text-gray-300">
              SHIELD or Avengers? Send a secure message via StarkTech relay.
            </p>
            <button className="w-full mt-3 bg-orange-500 hover:bg-orange-600 transition-all px-4 py-2 rounded text-white">
              Send Message
            </button>
          </div>
        </div>

        <div className="mt-12 text-xs text-gray-500 italic">
          * Spider-Man is not liable for damages caused during heroic interventions.
        </div>
      </section>
    </main>
  );
}

export default Contact;
