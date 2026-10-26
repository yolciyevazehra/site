import React from 'react';

export default function NewsletterSection() {

   return (
      <section className="mt-[60px] bg-[#d4ced0] py-[50px] px-4 md:px-8">
         <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">Subscribe To Get Discount Offers</h2>
            <p className="text-base text-slate-600 leading-relaxed">Subscribe to our newsletter and stay up to
               date with the latest news,
               updates, and exclusive offers. Get valuable insights. Join our community today!</p>

            <form className="max-w-lg mx-auto mt-10 flex items-center justify-center gap-5 flex-col">
               <input type="email" id="email" name="email" placeholder="john@readymadeui.com" required
                  className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
               <button type="submit"
                  className="py-2 px-3.5 text-sm w-max rounded-md font-semibold cursor-pointer text-white border border-[#f7444e] bg-[#f7444e] hover:bg-[#ee6a70] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                  Subscribe</button>
            </form>
         </div>
      </section>
   );
}