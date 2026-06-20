import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('xjgdozao');

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-luxury-gold" />
            <p className="text-[9px] uppercase tracking-[0.4em] text-luxury-gold">Inquiry</p>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight">
            Let's Build<br />
            Something<br />
            <span className="text-luxury-gold italic">Unique.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 md:gap-24">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <p className="text-luxury-cream/40 text-sm leading-relaxed">
              Based in Poznań. Available across Europe. Let's build a unique visual universe for your brand or concept.
            </p>

            <div className="space-y-6 pt-2">
              <a
                href="mailto:hello@adalatnaghiyev.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-luxury-gold/50 group-hover:border-luxury-gold/40 group-hover:text-luxury-gold transition-all duration-300 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[8px] uppercase tracking-widest text-luxury-cream/30 mb-1">Email</p>
                  <p className="text-sm group-hover:text-luxury-gold transition-colors duration-300">hello@adalatnaghiyev.com</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/adalatnaghiyev.art/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-luxury-gold/50 group-hover:border-luxury-gold/40 group-hover:text-luxury-gold transition-all duration-300 shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[8px] uppercase tracking-widest text-luxury-cream/30 mb-1">Instagram</p>
                  <p className="text-sm group-hover:text-luxury-gold transition-colors duration-300">@adalatnaghiyev.art</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-start justify-center py-16 space-y-6 border-t border-white/10"
              >
                <div className="w-12 h-12 border border-luxury-gold flex items-center justify-center text-luxury-gold">
                  <span className="font-serif text-xl">✓</span>
                </div>
                <h3 className="font-serif text-3xl">Inquiry Received</h3>
                <p className="text-luxury-cream/40 text-sm leading-relaxed max-w-xs">
                  Thank you for reaching out. I will review your project details and get back to you within 48 hours.
                </p>
              </motion.div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest text-luxury-gold block" htmlFor="full-name">Full Name</label>
                    <input
                      id="full-name"
                      name="full-name"
                      type="text"
                      placeholder="Julianne V."
                      required
                      className="w-full bg-transparent border-b border-luxury-cream/20 py-3 focus:outline-none focus:border-luxury-gold transition-colors duration-300 text-sm placeholder:text-luxury-cream/20"
                    />
                    <ValidationError field="full-name" errors={state.errors} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest text-luxury-gold block" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="hello@company.com"
                      required
                      className="w-full bg-transparent border-b border-luxury-cream/20 py-3 focus:outline-none focus:border-luxury-gold transition-colors duration-300 text-sm placeholder:text-luxury-cream/20"
                    />
                    <ValidationError field="email" errors={state.errors} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-luxury-gold block" htmlFor="category">Project Category</label>
                  <select
                    id="category"
                    name="category"
                    required
                    defaultValue=""
                    className="w-full bg-transparent border-b border-luxury-cream/20 py-3 focus:outline-none focus:border-luxury-gold appearance-none transition-colors duration-300 text-sm text-luxury-cream"
                  >
                    <option value="" disabled className="bg-luxury-black text-luxury-cream/40">Select Category</option>
                    <option className="bg-luxury-black">Portrait and Artist Session</option>
                    <option className="bg-luxury-black">Couple or Engagement Session</option>
                    <option className="bg-luxury-black">Concert and Event Documentation</option>
                    <option className="bg-luxury-black">Brand and Commercial Project</option>
                    <option className="bg-luxury-black">Real Estate or Interior Space</option>
                    <option className="bg-luxury-black">Other Custom Project</option>
                  </select>
                  <ValidationError field="category" errors={state.errors} />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-luxury-gold block" htmlFor="message">Your Narrative</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell me about your vision..."
                    required
                    className="w-full bg-transparent border-b border-luxury-cream/20 py-3 focus:outline-none focus:border-luxury-gold transition-colors duration-300 resize-none text-sm placeholder:text-luxury-cream/20"
                  />
                  <ValidationError field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-5 bg-luxury-gold text-luxury-black uppercase text-[10px] tracking-[0.4em] font-bold hover:bg-luxury-cream transition-colors duration-500 disabled:opacity-50 cursor-pointer"
                >
                  {state.submitting ? 'Sending...' : 'Send Inquiry'}
                </button>
                <ValidationError errors={state.errors} />
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
