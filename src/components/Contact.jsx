import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Award } from 'lucide-react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] mb-6">Inquiry</p>
            <h2 className="font-serif text-6xl md:text-8xl leading-tight mb-12">Let&apos;s Build <br />Something <br />Unique.</h2>
            <p className="text-luxury-cream/40 max-w-sm mb-12 text-sm leading-relaxed">
              Based in Poznań. Available across Europe. Let's build a unique visual universe for your brand or concept.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-luxury-cream/10 flex items-center justify-center text-luxury-gold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[8px] uppercase tracking-widest text-luxury-cream/40 mb-1">Email Inquiry</p>
                  <p className="text-xl hover:text-luxury-gold transition-colors duration-300">info@adalatnaghiyev.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-luxury-cream/10 flex items-center justify-center text-luxury-gold">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[8px] uppercase tracking-widest text-luxury-cream/40 mb-1">Social Feed</p>
                  <p className="text-xl hover:text-luxury-gold transition-colors duration-300">@adalatnaghiyev.art</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-16 border border-luxury-cream/10"
          >
            {formSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="w-20 h-20 border border-luxury-gold rounded-full flex items-center justify-center text-luxury-gold mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 10 }}
                  >
                    <Award className="w-10 h-10" />
                  </motion.div>
                </div>
                <h3 className="font-serif text-3xl">Inquiry Received</h3>
                <p className="text-luxury-cream/50 max-w-xs">Thank you for reaching out. I will review your project details and get back to you within 48 hours.</p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="text-luxury-gold text-[10px] uppercase tracking-[0.2em] pt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <label className="text-[9px] uppercase tracking-widest text-luxury-cream/40 ml-1">Full Name</label>
                     <input 
                       type="text" 
                       className="w-full bg-white/5 border-b border-luxury-cream/20 py-4 px-2 focus:outline-none focus:border-luxury-gold transition-colors duration-300" 
                       placeholder="Julianne V."
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[9px] uppercase tracking-widest text-luxury-cream/40 ml-1">Email Address</label>
                     <input 
                       type="email" 
                       className="w-full bg-white/5 border-b border-luxury-cream/20 py-4 px-2 focus:outline-none focus:border-luxury-gold transition-colors duration-300" 
                       placeholder="hello@company.com"
                     />
                  </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[9px] uppercase tracking-widest text-luxury-cream/40 ml-1">Project Category</label>
                   <select className="w-full bg-white/5 border-b border-luxury-cream/20 py-4 px-2 focus:outline-none focus:border-luxury-gold appearance-none transition-colors duration-300">
                      <option className="bg-luxury-black">Select Category</option>
                      <option className="bg-luxury-black">Portrait Session</option>
                      <option className="bg-luxury-black">Event Coverage</option>
                      <option className="bg-luxury-black">Commercial Work</option>
                      <option className="bg-luxury-black">Other</option>
                   </select>
                </div>

                <div className="space-y-2">
                   <label className="text-[9px] uppercase tracking-widest text-luxury-cream/40 ml-1">Your Narrative</label>
                   <textarea 
                     rows="4"
                     className="w-full bg-white/5 border-b border-luxury-cream/20 py-4 px-2 focus:outline-none focus:border-luxury-gold transition-colors duration-300 resize-none" 
                     placeholder="Tell me about your vision..."
                   ></textarea>
                </div>

                <button 
                  onClick={() => setFormSubmitted(true)}
                  className="w-full py-6 mt-4 bg-luxury-cream text-luxury-black uppercase text-[10px] tracking-[0.4em] font-bold hover:bg-luxury-gold transition-colors duration-500"
                >
                  Send Inquiry
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;