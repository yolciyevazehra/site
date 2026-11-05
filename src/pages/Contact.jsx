import React from 'react'
import { useEffect, useRef, useState } from "react";

const MAX = 1000;

function ContactWithOfficeMap() {
   // Which fields show their error line: set when the browser finds them invalid on submit, when
   // you leave a field you typed in, and live while one is wrong.
   const [errors, setErrors] = useState({});
   const [left, setLeft] = useState(MAX);
   // form, busy (sending) or sent (the thank-you)
   const [status, setStatus] = useState("form");
   const [sentTo, setSentTo] = useState({ name: "Lena", email: "lena@northwind.de" });
   const againRef = useRef(null);
   const sentTitleRef = useRef(null);
   const focusing = useRef(false);
   const moved = useRef(false);
   const timer = useRef(null);
   useEffect(() => () => clearTimeout(timer.current), []);
   useEffect(() => {
      if (!moved.current) return;
      moved.current = false;
      if (status === "sent") sentTitleRef.current?.focus();
      if (status === "form") againRef.current?.focus();
   }, [status]);

   const keyOf = (field) => field.id.replace("contact-map-", "");
   const mark = (field) => setErrors((was) => ({ ...was, [keyOf(field)]: !field.validity.valid }));
   // Native validation stays on: each invalid field says what is wrong in place of the browser's
   // bubble, and the first one takes focus.
   const onInvalid = (event) => {
      event.preventDefault();
      mark(event.target);
      if (!focusing.current) {
         focusing.current = true;
         event.target.focus();
         setTimeout(() => { focusing.current = false; }, 0);
      }
   };
   const onBlur = (event) => {
      if (event.target.value) mark(event.target);
   };
   const onChange = (event) => {
      if (errors[keyOf(event.target)]) mark(event.target);
   };
   const field = (key, also) => ({
      onInvalid,
      onBlur,
      onChange,
      "aria-invalid": errors[key] ? "true" : undefined,
      "aria-describedby": errors[key] ? `contact-map-${key}-error${also ? " " + also : ""}` : also,
   });
   const onMessage = (event) => {
      setLeft(MAX - event.target.value.length);
      onChange(event);
   };

   // A demo of sending: working, then the thank-you in place of the form.
   const send = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const next = { name: String(data.get("name")).trim().split(/\s+/)[0], email: String(data.get("email")) };
      setStatus("busy");
      timer.current = setTimeout(() => {
         setSentTo(next);
         moved.current = true;
         setStatus("sent");
      }, 1200);
   };
   // Another message keeps who you are and starts a new one.
   const again = () => {
      againRef.current.value = "";
      setLeft(MAX);
      moved.current = true;
      setStatus("form");
   };
   const busy = status === "busy";
   const sent = status === "sent";

     return (
      <section id="contact-map" aria-labelledby="contact-map-title" className="bg-white px-4 py-16 md:px-8 md:py-24 dark:bg-neutral-950">
         <div className="mx-auto grid max-w-2xl gap-x-16 gap-y-12 lg:max-w-7xl lg:grid-cols-2">
            <div>
               <p className="font-mono text-xs tracking-widest text-neutral-600 uppercase dark:text-neutral-400">Visit or write</p>
               <h2 id="contact-map-title" className="mt-3 text-3xl font-semibold tracking-tight text-balance text-neutral-950 sm:text-4xl dark:text-neutral-50">Come and see us in Berlin</h2>
               <p className="mt-4 max-w-xl text-lg/7 text-pretty text-neutral-600 dark:text-neutral-400">Our team works from Torstraße, five minutes from Rosenthaler Platz. Drop by for a coffee, or send a note and we'll reply within one business day.</p>

               <form id="contact-map-form" hidden={sent} onSubmit={send} className="mt-10 grid gap-x-4 gap-y-5 sm:grid-cols-2">
                  <div>
                     <label htmlFor="contact-map-name" className="mb-1.5 block text-sm font-medium text-neutral-950 dark:text-neutral-50">Name</label>
                     <input id="contact-map-name" {...field("name")} name="name" type="text" autoComplete="name" required placeholder="Lena Fischer" className="block h-10 w-full rounded-lg bg-neutral-100 px-3 text-sm text-neutral-950 outline-1 -outline-offset-1 outline-neutral-200 placeholder:text-neutral-600 hover:outline-neutral-300 focus:outline-2 focus:-outline-offset-2 focus:outline-zinc-950 aria-[invalid=true]:outline-red-600 dark:bg-neutral-900 dark:text-neutral-50 dark:outline-neutral-700 dark:placeholder:text-neutral-400 dark:hover:outline-neutral-600 dark:focus:outline-zinc-50 dark:aria-[invalid=true]:outline-red-500" />
                     <p id="contact-map-name-error" hidden={!errors["name"]} className="mt-1.5 flex items-center gap-1.5 text-[13px] text-red-700 dark:text-red-400"><svg className="size-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>Enter your name.</p>
                  </div>
                  <div>
                     <label htmlFor="contact-map-email" className="mb-1.5 block text-sm font-medium text-neutral-950 dark:text-neutral-50">Email</label>
                     <input id="contact-map-email" {...field("email")} name="email" type="email" autoComplete="email" required placeholder="lena@northwind.de" className="block h-10 w-full rounded-lg bg-neutral-100 px-3 text-sm text-neutral-950 outline-1 -outline-offset-1 outline-neutral-200 placeholder:text-neutral-600 hover:outline-neutral-300 focus:outline-2 focus:-outline-offset-2 focus:outline-zinc-950 aria-[invalid=true]:outline-red-600 dark:bg-neutral-900 dark:text-neutral-50 dark:outline-neutral-700 dark:placeholder:text-neutral-400 dark:hover:outline-neutral-600 dark:focus:outline-zinc-50 dark:aria-[invalid=true]:outline-red-500" />
                     <p id="contact-map-email-error" hidden={!errors["email"]} className="mt-1.5 flex items-center gap-1.5 text-[13px] text-red-700 dark:text-red-400"><svg className="size-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>Enter an email like lena@northwind.de.</p>
                  </div>
                  <div className="sm:col-span-2">
                     <label htmlFor="contact-map-message" className="mb-1.5 block text-sm font-medium text-neutral-950 dark:text-neutral-50">Message</label>
                     <textarea ref={againRef} id="contact-map-message" {...field("message", "contact-map-message-count")} onChange={onMessage} name="message" rows="5" maxLength="1000" required placeholder="We'd like to visit with two colleagues next Thursday afternoon." className="block w-full resize-y rounded-lg bg-neutral-100 px-3 py-2 text-sm/6 text-neutral-950 outline-1 -outline-offset-1 outline-neutral-200 placeholder:text-neutral-600 hover:outline-neutral-300 focus:outline-2 focus:-outline-offset-2 focus:outline-zinc-950 aria-[invalid=true]:outline-red-600 dark:bg-neutral-900 dark:text-neutral-50 dark:outline-neutral-700 dark:placeholder:text-neutral-400 dark:hover:outline-neutral-600 dark:focus:outline-zinc-50 dark:aria-[invalid=true]:outline-red-500" />
                     <div className="mt-1.5 flex items-start justify-between gap-4 text-[13px]">
                        <p id="contact-map-message-error" hidden={!errors["message"]} className="flex min-w-0 items-center gap-1.5 text-red-700 dark:text-red-400"><svg className="size-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>Tell us how we can help.</p>
                        <p id="contact-map-message-count" className="ml-auto shrink-0 text-neutral-600 tabular-nums dark:text-neutral-400">{left.toLocaleString("en-US")} characters left</p>
                     </div>
                  </div>
                  <div className="pt-1 sm:col-span-2">
                     <button type="submit" id="contact-map-submit" disabled={busy} aria-busy={busy ? "true" : undefined} className="group inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-zinc-950 px-4 text-sm font-medium whitespace-nowrap text-white shadow-xs transition-colors duration-150 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-40 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:outline-zinc-50">
                        <svg className="hidden size-4 animate-spin group-aria-busy:block motion-reduce:animate-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                        <span id="contact-map-submit-label">{busy ? "Sending…" : "Send message"}</span>
                     </button>
                  </div>
               </form>

               <div id="contact-map-sent" hidden={!sent} className="mt-10 rounded-3xl bg-neutral-100 p-6 sm:p-8 dark:bg-neutral-900 dark:ring-1 dark:ring-neutral-800">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-green-50 text-green-700 ring-1 ring-green-600/20 ring-inset dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20"><svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /><path d="m16 19 2 2 4-4" /></svg></span>
                  <h3 ref={sentTitleRef} id="contact-map-sent-title" tabIndex="-1" className="mt-6 text-xl font-semibold tracking-tight text-neutral-950 focus:outline-hidden dark:text-neutral-50">Message sent</h3>
                  <p className="mt-2 max-w-md text-sm text-pretty text-neutral-600 dark:text-neutral-400">Thanks, <span id="contact-map-sent-name">{sentTo.name}</span>. We'll reply to <span id="contact-map-sent-email" className="font-medium break-all text-neutral-950 dark:text-neutral-50">{sentTo.email}</span> within one business day.</p>
                  <button type="button" id="contact-map-again" onClick={again} className="mt-6 inline-flex cursor-pointer items-center gap-1.5 rounded-sm text-sm font-medium text-neutral-600 transition-colors duration-150 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 disabled:cursor-not-allowed disabled:hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-50 dark:focus-visible:outline-zinc-50 dark:disabled:hover:text-neutral-400"><svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>Send another message</button>
               </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-neutral-100 sm:aspect-[16/10] lg:aspect-auto lg:min-h-[32rem] dark:bg-neutral-900 dark:ring-1 dark:ring-neutral-800">
               <div className="relative aspect-[4/3] sm:absolute sm:inset-0 sm:aspect-auto">
                  <svg className="absolute inset-0 size-full" viewBox="0 0 800 640" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Street map of Berlin-Mitte with the Kestrel office marked on Torstraße, between Rosenthaler Straße and Brunnenstraße">
                     <rect width="800" height="640" className="fill-neutral-200 dark:fill-neutral-950" />
                     <path d="M-20 530C110 480 220 572 360 548S580 612 820 586V660H-20Z" className="fill-neutral-300 dark:fill-neutral-800" />
                     <path d="M600 40 742 30 756 160 614 176Z" className="fill-neutral-100 dark:fill-neutral-900" />
                     <g className="fill-neutral-300 dark:fill-neutral-800">
                        <circle cx="640" cy="70" r="9" />
                        <circle cx="676" cy="92" r="12" />
                        <circle cx="714" cy="62" r="8" />
                        <circle cx="648" cy="124" r="10" />
                        <circle cx="712" cy="118" r="9" />
                     </g>
                     <g fill="none" strokeWidth="7" strokeLinecap="round" className="stroke-neutral-100 dark:stroke-neutral-900">
                        <path d="M-20 84H590" />
                        <path d="M-20 336H820" />
                        <path d="M-20 452H820" />
                        <path d="M110-20 96 660" />
                        <path d="M196 210 184 452" />
                        <path d="M456-20V452" />
                        <path d="M690 200 704 660" />
                        <path d="M360 452 420 552" />
                     </g>
                     <g fill="none" strokeWidth="16" strokeLinecap="round" className="stroke-white dark:stroke-neutral-800">
                        <path d="M-20 214 820 190" />
                        <path d="M250-20 430 660" />
                        <path d="M560-20 580 660" />
                     </g>
                     <g className="fill-neutral-600 text-[13px] font-medium dark:fill-neutral-400">
                        <text x="40" y="200" transform="rotate(-1.6 40 200)">Torstraße</text>
                        <text x="594" y="290" transform="rotate(88 594 290)">Brunnenstraße</text>
                        <text x="380" y="400" transform="rotate(75 380 400)">Rosenthaler Str.</text>
                        <text x="624" y="158">Weinbergspark</text>
                     </g>
                     <circle cx="520" cy="190" r="26" className="fill-zinc-950/10 dark:fill-zinc-50/15" />
                     <g transform="translate(496 150) scale(2)">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" strokeWidth="1" className="fill-zinc-950 stroke-white dark:fill-zinc-50 dark:stroke-neutral-900" />
                        <circle cx="12" cy="10" r="3.2" className="fill-white dark:fill-zinc-950" />
                     </g>
                  </svg>
               </div>
               <div className="m-3 rounded-2xl bg-white p-5 shadow-lg ring-1 ring-neutral-950/5 sm:absolute sm:bottom-4 sm:left-4 sm:m-0 sm:w-80 dark:bg-neutral-800 dark:ring-white/5">
                  <p className="text-base font-semibold text-neutral-950 dark:text-neutral-50">Kestrel Berlin</p>
                  <address className="mt-1 text-sm text-neutral-600 not-italic dark:text-neutral-400">Torstraße 109, 10119 Berlin<br />Germany</address>
                  <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                     <li className="flex items-center gap-2"><svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg><span className="tabular-nums">Mon–Fri, 9:00–18:00 CET</span></li>
                     <li className="flex items-center gap-2"><svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" /><path d="m9 15-1-1" /><path d="m15 15 1-1" /><path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" /><path d="m8 19-2 3" /><path d="m16 19 2 3" /></svg>U8 Rosenthaler Platz, 5 min walk</li>
                     <li className="flex items-center gap-2"><svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg><a href="tel:+493056832210" className="rounded-sm font-medium text-neutral-950 tabular-nums underline decoration-neutral-950/20 underline-offset-4 transition-colors duration-150 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:text-neutral-50 dark:decoration-neutral-50/20 dark:focus-visible:outline-zinc-50">+49 30 5683 2210</a></li>
                  </ul>
                  <div className="mt-5">
                     <a href="#" className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3.5 text-sm font-medium whitespace-nowrap text-neutral-950 shadow-xs transition-colors duration-150 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:translate-y-px dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:hover:bg-neutral-800 dark:focus-visible:outline-zinc-50"><svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>Get directions</a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ContactWithOfficeMap