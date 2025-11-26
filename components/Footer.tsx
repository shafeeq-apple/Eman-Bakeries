import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { LOGO_URL, VISION_2030_URL } from '../constants';

export const Footer: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.currentTarget);
    
    // Configuration for FormSubmit
    // Both emails receive all form submissions
    const submitData = {
      _subject: "New Partner Inquiry - Eman Bakeries Website",
      _cc: "naheemptd@emanbakeries.com",
      _replyto: formData.get('email'), // Reply goes to the person who submitted
      _template: "table", // Formats email nicely
      _captcha: "false",  // Disables captcha for smoother UX
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      // Primary recipient: info@emanbakeries.com
      // CC recipient: naheemptd@emanbakeries.com (set in submitData above)
      const response = await fetch("https://formsubmit.co/ajax/info@emanbakeries.com", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(submitData)
      });

      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <footer id="contact" className="bg-brand-surface border-t border-white/5 text-gray-400 pt-24 pb-12 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            
            {/* Contact Form Section - Spans 7 cols */}
            <div className="lg:col-span-7">
                <div className="mb-8">
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-3">Partner With Us</h3>
                    <p className="text-gray-500 font-light">
                        Connect with our industrial sales team for custom orders and distribution.
                    </p>
                </div>
                
                {formStatus === 'success' ? (
                  <div className="bg-green-900/20 border border-green-500/30 p-8 rounded-sm text-center flex flex-col items-center justify-center h-80 backdrop-blur-sm">
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    <h4 className="text-2xl text-white font-serif mb-2">Message Sent</h4>
                    <p className="text-gray-400">Thank you for contacting Eman Bakeries. Our team will review your inquiry and respond shortly.</p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="mt-6 text-brand-gold text-sm uppercase tracking-widest hover:text-white transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 bg-white/[0.02] p-8 rounded-sm border border-white/5 backdrop-blur-sm shadow-2xl relative">
                      
                      {/* Hidden Honeypot to prevent spam (if supported by service) */}
                      <input type="text" name="_honey" style={{display: 'none'}} />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                              <label className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold">Name</label>
                              <input 
                                required 
                                name="name"
                                type="text" 
                                className="w-full bg-brand-dark border border-white/10 p-4 text-sm text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 outline-none transition-all placeholder:text-gray-700" 
                                placeholder="Full Name" 
                              />
                          </div>
                          <div className="space-y-2">
                              <label className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold">Email</label>
                              <input 
                                required 
                                name="email"
                                type="email" 
                                className="w-full bg-brand-dark border border-white/10 p-4 text-sm text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 outline-none transition-all placeholder:text-gray-700" 
                                placeholder="email@company.com" 
                              />
                          </div>
                      </div>
                      
                      <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold">Mobile Number</label>
                          <input 
                            required 
                            name="phone"
                            type="tel" 
                            className="w-full bg-brand-dark border border-white/10 p-4 text-sm text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 outline-none transition-all placeholder:text-gray-700" 
                            placeholder="+966 5X XXX XXXX" 
                          />
                      </div>

                      <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold">Message</label>
                          <textarea 
                            required 
                            name="message"
                            rows={4} 
                            className="w-full bg-brand-dark border border-white/10 p-4 text-sm text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 outline-none transition-all placeholder:text-gray-700 resize-none" 
                            placeholder="Tell us about your requirements..." 
                          />
                      </div>

                      {formStatus === 'error' && (
                        <div className="flex items-center text-red-400 text-sm bg-red-900/20 p-3 border border-red-900/50">
                          <AlertCircle className="w-4 h-4 mr-2" />
                          Something went wrong. Please try again or contact us directly.
                        </div>
                      )}
                      
                      <button 
                        type="submit" 
                        disabled={formStatus === 'sending'}
                        className="group relative w-full bg-brand-gold text-brand-dark font-bold uppercase tracking-widest text-xs py-4 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                          <span className="relative z-10 flex items-center justify-center">
                              {formStatus === 'sending' ? (
                                <>Sending <Loader2 className="w-3 h-3 ml-2 animate-spin" /></>
                              ) : (
                                <>Send Inquiry <Send className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" /></>
                              )}
                          </span>
                          <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 origin-left" />
                      </button>
                  </form>
                )}
            </div>

            {/* Info Section - Spans 5 cols */}
            <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="space-y-8">
                   
                   {/* Footer Logo Placement - Image Version */}
                   <div className="mb-10 pb-8 border-b border-white/5">
                      <a href="#" className="inline-block group">
                         <img 
                            src={LOGO_URL} 
                            alt="Eman Bakeries" 
                            className="h-[100px] w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                         />
                      </a>
                   </div>

                   <div>
                      <h4 className="text-white font-serif text-xl mb-6">Headquarters</h4>
                      <div className="flex items-start space-x-4 mb-4">
                        <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                        <p className="leading-relaxed text-sm">
                          Hira Street, An Nahdah Dist,<br />
                          23523 Jeddah<br />
                          Saudi Arabia
                        </p>
                      </div>
                   </div>

                   <div>
                     <h4 className="text-white font-serif text-xl mb-6">Contact</h4>
                     <div className="space-y-4">
                       <div className="flex items-center space-x-4">
                         <Phone className="w-5 h-5 text-brand-gold flex-shrink-0" />
                         <span className="text-sm">+966 552821842</span>
                       </div>
                       <div className="flex items-center space-x-4">
                         <Mail className="w-5 h-5 text-brand-gold flex-shrink-0" />
                         <span className="text-sm">info@emanbakeries.com</span>
                       </div>
                     </div>
                   </div>
                   
                   <div>
                     <h4 className="text-white font-serif text-xl mb-6">Connect</h4>
                     <div className="flex space-x-4">
                       <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all duration-300">
                         <Linkedin className="w-4 h-4" />
                       </a>
                       <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all duration-300">
                         <Instagram className="w-4 h-4" />
                       </a>
                       <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all duration-300">
                         <Facebook className="w-4 h-4" />
                       </a>
                     </div>
                   </div>
                </div>

                {/* Certifications & Vision 2030 */}
                <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 p-6 bg-white/5 border-l-2 border-brand-gold">
                   <img 
                      src={VISION_2030_URL}
                      alt="Saudi Vision 2030" 
                      className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                   />
                   <p className="text-xs italic text-gray-500 text-center sm:text-left">
                     "ISO 22000 Certified for Food Safety Management Systems. Halal Certified Production Facility."
                   </p>
                </div>
            </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Eman Bakeries. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};