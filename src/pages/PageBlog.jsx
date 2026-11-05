import React from 'react'

function PageBlog() {
   return (
      <section aria-labelledby="blog-latest-title" className="bg-white px-4 py-16 md:px-8 md:py-24 dark:bg-neutral-950">
         <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
               <div className="max-w-2xl">
                  <h2 id="blog-latest-title" className="text-3xl font-semibold tracking-tight text-balance text-neutral-950 sm:text-4xl dark:text-neutral-50">From the Brightpath blog</h2>
                  <p className="mt-4 text-lg/7 text-pretty text-neutral-600 dark:text-neutral-400">Product news, customer stories and what we learn building a planning tool for 6,000 teams.</p>
               </div>
               <a href="#" className="group/link inline-flex items-center gap-1 rounded-sm text-sm font-medium whitespace-nowrap text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:text-zinc-50 dark:focus-visible:outline-zinc-50">View all posts<svg className="size-4 shrink-0 transition-transform duration-200 group-hover/link:translate-x-0.5 motion-reduce:transition-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
            </div>
            <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
               <li className="@container">
                  <article className="group relative flex h-full flex-col rounded-2xl has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-zinc-950 @xl:grid @xl:grid-cols-2 @xl:items-center @xl:gap-8 dark:has-[a:focus-visible]:outline-zinc-50">
                     <div className="aspect-[3/2] overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-neutral-950/5 dark:bg-neutral-800 dark:ring-white/5">
                        <img src="https://readymadeui.com/images/meeting-notes.webp" alt="Meeting notes screen with a call transcript, a summary and a list of action items" className="size-full object-cover transition-transform duration-300 ease-out motion-safe:group-hover:scale-105 motion-reduce:transition-none" />
                     </div>
                     <div className="mt-6 flex flex-1 flex-col @xl:mt-0">
                        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-neutral-600 dark:text-neutral-400"><span className="mr-1 inline-flex items-center rounded-md border border-neutral-200 bg-white px-1.5 py-0.5 text-xs font-medium whitespace-nowrap text-neutral-950 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">Product</span><time dateTime="2026-10-20">Oct 20, 2026</time><span aria-hidden="true">·</span><span>5 min read</span></p>
                        <h3 className="mt-3 text-lg font-semibold text-balance text-neutral-950 decoration-neutral-950/30 underline-offset-4 group-hover:underline dark:text-neutral-50 dark:decoration-neutral-50/30"><a href="#" className="after:absolute after:inset-0 focus-visible:outline-hidden">Meeting notes that turn into action items</a></h3>
                        <p className="mt-2 line-clamp-3 text-[15px]/6 text-pretty text-neutral-600 dark:text-neutral-400">Record the call and Brightpath writes the summary, assigns each follow-up and files it under the right project.</p>
                        <div className="mt-auto flex items-center gap-3 pt-6">
                           <img src="https://readymadeui.com/team-1.webp" alt="" className="size-8 shrink-0 rounded-full bg-neutral-100 object-cover outline-1 -outline-offset-1 outline-black/5 dark:bg-neutral-800" />
                           <div className="min-w-0 text-sm">
                              <p className="font-medium text-neutral-950 dark:text-neutral-50">Daniel Reyes</p>
                              <p className="text-neutral-600 dark:text-neutral-400">Product lead</p>
                           </div>
                        </div>
                     </div>
                  </article>
               </li>
               <li className="@container">
                  <article className="group relative flex h-full flex-col rounded-2xl has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-zinc-950 @xl:grid @xl:grid-cols-2 @xl:items-center @xl:gap-8 dark:has-[a:focus-visible]:outline-zinc-50">
                     <div className="aspect-[3/2] overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-neutral-950/5 dark:bg-neutral-800 dark:ring-white/5">
                        <img src="https://readymadeui.com/images/about-image-1.webp" alt="People working on laptops along a long wooden table in a bright open office" className="size-full object-cover transition-transform duration-300 ease-out motion-safe:group-hover:scale-105 motion-reduce:transition-none" />
                     </div>
                     <div className="mt-6 flex flex-1 flex-col @xl:mt-0">
                        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-neutral-600 dark:text-neutral-400"><span className="mr-1 inline-flex items-center rounded-md border border-neutral-200 bg-white px-1.5 py-0.5 text-xs font-medium whitespace-nowrap text-neutral-950 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">Customers</span><time dateTime="2026-10-14">Oct 14, 2026</time><span aria-hidden="true">·</span><span>8 min read</span></p>
                        <h3 className="mt-3 text-lg font-semibold text-balance text-neutral-950 decoration-neutral-950/30 underline-offset-4 group-hover:underline dark:text-neutral-50 dark:decoration-neutral-50/30"><a href="#" className="after:absolute after:inset-0 focus-visible:outline-hidden">How Northwind plans 14 product teams on one roadmap</a></h3>
                        <p className="mt-2 line-clamp-3 text-[15px]/6 text-pretty text-neutral-600 dark:text-neutral-400">Their planning week went from five days of spreadsheets to one afternoon. This is the setup they use.</p>
                        <div className="mt-auto flex items-center gap-3 pt-6">
                           <img src="https://readymadeui.com/team-3.webp" alt="" className="size-8 shrink-0 rounded-full bg-neutral-100 object-cover outline-1 -outline-offset-1 outline-black/5 dark:bg-neutral-800" />
                           <div className="min-w-0 text-sm">
                              <p className="font-medium text-neutral-950 dark:text-neutral-50">Elena Fischer</p>
                              <p className="text-neutral-600 dark:text-neutral-400">Customer success</p>
                           </div>
                        </div>
                     </div>
                  </article>
               </li>
               <li className="@container sm:col-span-2 lg:col-span-1">
                  <article className="group relative flex h-full flex-col rounded-2xl has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-zinc-950 @xl:grid @xl:grid-cols-2 @xl:items-center @xl:gap-8 dark:has-[a:focus-visible]:outline-zinc-50">
                     <div className="aspect-[3/2] overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-neutral-950/5 dark:bg-neutral-800 dark:ring-white/5">
                        <img src="https://readymadeui.com/images/digital-img-4.webp" alt="Smiling woman in a denim jacket at her desk in a busy open-plan office" className="size-full object-cover transition-transform duration-300 ease-out motion-safe:group-hover:scale-105 motion-reduce:transition-none" />
                     </div>
                     <div className="mt-6 flex flex-1 flex-col @xl:mt-0">
                        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-neutral-600 dark:text-neutral-400"><span className="mr-1 inline-flex items-center rounded-md border border-neutral-200 bg-white px-1.5 py-0.5 text-xs font-medium whitespace-nowrap text-neutral-950 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">Company</span><time dateTime="2026-10-07">Oct 7, 2026</time><span aria-hidden="true">·</span><span>6 min read</span></p>
                        <h3 className="mt-3 text-lg font-semibold text-balance text-neutral-950 decoration-neutral-950/30 underline-offset-4 group-hover:underline dark:text-neutral-50 dark:decoration-neutral-50/30"><a href="#" className="after:absolute after:inset-0 focus-visible:outline-hidden">Why every Brightpath role starts with writing</a></h3>
                        <p className="mt-2 line-clamp-3 text-[15px]/6 text-pretty text-neutral-600 dark:text-neutral-400">A short written exercise opens every interview loop. What we ask, how we score it, and what it changed.</p>
                        <div className="mt-auto flex items-center gap-3 pt-6">
                           <img src="https://readymadeui.com/team-2.webp" alt="" className="size-8 shrink-0 rounded-full bg-neutral-100 object-cover outline-1 -outline-offset-1 outline-black/5 dark:bg-neutral-800" />
                           <div className="min-w-0 text-sm">
                              <p className="font-medium text-neutral-950 dark:text-neutral-50">Omar Haddad</p>
                              <p className="text-neutral-600 dark:text-neutral-400">Head of People</p>
                           </div>
                        </div>
                     </div>
                  </article>
               </li>
            </ul>
         </div>
      </section>
   )
}

export default PageBlog