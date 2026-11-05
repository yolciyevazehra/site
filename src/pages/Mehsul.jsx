import React from 'react'
import { useEffect, useRef, useState } from "react";

const PRODUCTS = [
    { id: "field-high", name: "Field High", image: "https://readymadeui.com/images/product10.webp", alt: "High-top sneaker in grey and white suede with a pale blue sole", sub: "Stone grey", price: "£128", score: "4.7", count: "312", cat: "sneakers", colour: "grey", amount: 128 },
    { id: "pace-runner", name: "Pace Runner", image: "https://readymadeui.com/images/product12.webp", alt: "Navy knit running shoe with a white cushioned sole", sub: "Navy knit", price: "£95", isNew: true, score: "4.5", count: "488", cat: "sneakers", colour: "navy", amount: 95 },
    { id: "canvas-low", name: "Canvas Low", image: "https://readymadeui.com/images/product14.webp", alt: "Pair of black canvas low-top sneakers with white laces and toe caps", sub: "Black canvas", price: "£58", score: "4.6", count: "1,032", cat: "sneakers", colour: "black", amount: 58 },
    { id: "court-low", name: "Court Low", image: "https://readymadeui.com/images/product9.webp", alt: "Black leather low-top sneaker with a red heel tab", sub: "Black leather", price: "£84", was: "£105", off: "−20%", score: "4.8", count: "726", cat: "sneakers", colour: "black", amount: 84 },
    { id: "ridge-trail", name: "Ridge Trail", image: "https://readymadeui.com/images/product13.webp", alt: "Pair of black trail shoes with blue overlays and red laces", sub: "Black and cobalt", price: "£135", score: "4.6", count: "219", cat: "outdoor", colour: "blue", amount: 135 },
    { id: "rider-boot", name: "Rider Boot", image: "https://readymadeui.com/images/product11.webp", alt: "Pair of black leather ankle boots with a buckled strap", sub: "Black leather", price: "£189", low: "Only 2 left", score: "4.4", count: "86", cat: "outdoor", colour: "black", amount: 189 },
    { id: "mayfair-oxford", name: "Mayfair Oxford", image: "https://readymadeui.com/images/product15.webp", alt: "Pair of black patent leather oxford shoes", sub: "Black patent", price: "£165", score: "4.8", count: "143", cat: "dress", colour: "black", amount: 165 },
    { id: "arlo-round", name: "Arlo Round", image: "https://readymadeui.com/images/sunglass1.webp", alt: "Round sunglasses with a tortoiseshell frame and brown lenses", sub: "Tortoise · polarised", price: "£85", score: "4.7", count: "402", cat: "eyewear", colour: "brown", amount: 85 },
    { id: "vela-cat-eye", name: "Vela Cat-eye", image: "https://readymadeui.com/images/sunglass2.webp", alt: "Black cat-eye sunglasses with dark purple gradient lenses", sub: "Black · gradient", price: "£92", isNew: true, score: "4.5", count: "167", cat: "eyewear", colour: "black", amount: 92 },
    { id: "slate-square", name: "Slate Square", image: "https://readymadeui.com/images/sunglass3.webp", alt: "Square sunglasses with a grey marbled frame and mirrored lenses", sub: "Grey marble · mirror", price: "£78", score: "4.3", count: "95", cat: "eyewear", colour: "grey", amount: 78 },
    { id: "orbit-round", name: "Orbit Round", image: "https://readymadeui.com/images/sunglass6.webp", alt: "Round sunglasses with black rims, a thin gold bridge and dark lenses", sub: "Black and gold", price: "£110", score: "4.8", count: "288", cat: "eyewear", colour: "black", amount: 110 },
    { id: "hale-optical", name: "Hale Optical", image: "https://readymadeui.com/images/sunglass7.webp", alt: "Browline glasses with a black brow, silver rims and clear lenses", sub: "Browline · clear lenses", price: "£69", score: "4.6", count: "154", cat: "eyewear", colour: "black", amount: 69 },
];

const CATEGORIES = { sneakers: "Sneakers", outdoor: "Boots and outdoor", dress: "Dress shoes", eyewear: "Eyewear" };
const COLOURS = { black: "Black", grey: "Grey", navy: "Navy", blue: "Cobalt", brown: "Tortoise" };
const ORDERS = {
    featured: ["field-high", "pace-runner", "canvas-low", "court-low", "ridge-trail", "rider-boot", "mayfair-oxford", "arlo-round", "vela-cat-eye", "slate-square", "orbit-round", "hale-optical"],
    "price-asc": ["canvas-low", "hale-optical", "slate-square", "court-low", "arlo-round", "vela-cat-eye", "pace-runner", "orbit-round", "field-high", "ridge-trail", "mayfair-oxford", "rider-boot"],
    "price-desc": ["rider-boot", "mayfair-oxford", "ridge-trail", "field-high", "orbit-round", "pace-runner", "vela-cat-eye", "arlo-round", "court-low", "slate-square", "hale-optical", "canvas-low"],
    rating: ["court-low", "mayfair-oxford", "orbit-round", "field-high", "arlo-round", "canvas-low", "ridge-trail", "hale-optical", "pace-runner", "vela-cat-eye", "rider-boot", "slate-square"],
};

export default function FilteredProductGrid() {
    const [saved, setSaved] = useState([]);
    const [added, setAdded] = useState([]);
    const [message, setMessage] = useState("");
    const toggleSave = (name) => {
        const on = !saved.includes(name);
        setSaved(on ? [...saved, name] : saved.filter((n) => n !== name));
        setMessage(`${name} ${on ? "saved to" : "removed from"} your wishlist`);
    };
    const add = (name) => {
        if (!added.includes(name)) setAdded([...added, name]);
        setMessage(`${name} added to your bag`);
    };

    const [cats, setCats] = useState([]);
    const [colours, setColours] = useState([]);
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const [sort, setSort] = useState("featured");
    const [open, setOpen] = useState(false);

    const low = min === "" ? null : Number(min);
    const high = max === "" ? null : Number(max);
    const list = ORDERS[sort].map((id) => PRODUCTS.find((p) => p.id === id)).filter((p) => (!cats.length || cats.includes(p.cat)) && (!colours.length || colours.includes(p.colour)) && (low === null || p.amount >= low) && (high === null || p.amount <= high));
    const word = list.length === 1 ? " product" : " products";

    const applied = [
        ...cats.map((v) => ({ key: v, label: CATEGORIES[v], clear: () => setCats(cats.filter((c) => c !== v)) })),
        ...colours.map((v) => ({ key: v, label: COLOURS[v], clear: () => setColours(colours.filter((c) => c !== v)) })),
    ];
    if (low !== null || high !== null) {
        const label = high === null ? `From £${low}` : low === null ? `Up to £${high}` : `£${low}–£${high}`;
        applied.push({ key: "price", label, clear: () => (setMin(""), setMax("")) });
    }
    const toggle = (list, set, value) => set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
    const clearAll = () => {
        setCats([]);
        setColours([]);
        setMin("");
        setMax("");
    };

    const titleRef = useRef(null);
    const chipRefs = useRef([]);
    chipRefs.current = [];
    const focusNext = useRef(null);
    useEffect(() => {
        if (focusNext.current === null) return;
        const i = focusNext.current;
        focusNext.current = null;
        const left = chipRefs.current.filter(Boolean);
        const target = i === "title" ? null : left[i] || left[i - 1];
        (target || titleRef.current)?.focus();
    });
    const removeChip = (f, i) => {
        f.clear();
        focusNext.current = i;
    };
    const clearAndFocus = () => {
        clearAll();
        focusNext.current = "title";
    };

    const panelRef = useRef(null);
    const openerRef = useRef(null);
    const closeRef = useRef(null);
    const opened = useRef(false);
    useEffect(() => {
        document.documentElement.classList.toggle("overflow-hidden", open);
        if (open) closeRef.current?.focus();
        else if (opened.current) openerRef.current?.focus();
        opened.current = open || opened.current;
        if (!open) return undefined;
        const wide = window.matchMedia("(min-width: 64rem)");
        const onWide = () => {
            if (wide.matches) setOpen(false);
        };
        wide.addEventListener("change", onWide);
        return () => {
            wide.removeEventListener("change", onWide);
            document.documentElement.classList.remove("overflow-hidden");
        };
    }, [open]);
    const onPanelKey = (event) => {
        if (!open) return;
        if (event.key === "Escape") {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === "Tab") {
            const stops = [...panelRef.current.querySelectorAll("button, input")].filter((el) => !el.disabled && el.getClientRects().length > 0);
            const first = stops[0];
            const last = stops[stops.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    };
    const dialog = open ? { role: "dialog", "aria-modal": "true" } : {};

    return (
        <section id="pl-filter" aria-labelledby="pl-filter-title" className="px-4 py-12 md:px-8 md:py-16">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
                    <div>
                        <h2 ref={titleRef} id="pl-filter-title" tabIndex="-1" className="text-2xl font-semibold tracking-tight text-balance text-neutral-950 focus:outline-hidden dark:text-neutral-50">Footwear and eyewear</h2>
                        <p id="pl-filter-count" role="status" className="mt-1 text-sm text-neutral-600 dark:text-neutral-400"><span className="font-medium text-neutral-950 tabular-nums dark:text-neutral-50">{list.length}</span>{word}</p>
                    </div>
                    <div className="flex w-full items-center gap-3 sm:w-auto">
                        <button ref={openerRef} type="button" id="pl-filter-open" onClick={() => setOpen(true)} aria-expanded={open ? "true" : "false"} aria-controls="pl-filter-panel" className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3.5 text-sm font-medium whitespace-nowrap text-neutral-950 shadow-xs transition-colors duration-150 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:translate-y-px lg:hidden dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:hover:bg-neutral-800 dark:focus-visible:outline-zinc-50"><svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 5H3" /><path d="M12 19H3" /><path d="M14 3v4" /><path d="M16 17v4" /><path d="M21 12h-9" /><path d="M21 19h-5" /><path d="M21 5h-7" /><path d="M8 10v4" /><path d="M8 12H3" /></svg>Filters<span id="pl-filter-num" hidden={!applied.length} className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-neutral-950 px-1.5 text-xs font-medium text-white tabular-nums dark:bg-neutral-50 dark:text-neutral-950">{applied.length}</span></button>
                        <div className="relative min-w-0 flex-1 sm:w-52 sm:flex-none">
                            <label htmlFor="pl-filter-sort" className="sr-only">Sort by</label>
                            <select id="pl-filter-sort" value={sort} onChange={(event) => setSort(event.target.value)} className="h-9 w-full cursor-pointer appearance-none rounded-lg bg-neutral-100 pr-9 pl-3 text-sm font-medium text-neutral-950 outline-1 -outline-offset-1 outline-neutral-200 hover:outline-neutral-300 focus:outline-2 focus:-outline-offset-2 focus:outline-zinc-950 dark:bg-neutral-900 dark:text-neutral-50 dark:outline-neutral-700 dark:hover:outline-neutral-600 dark:focus:outline-zinc-50">
                                <option value="featured">Sort: Featured</option>
                                <option value="price-asc">Price: low to high</option>
                                <option value="price-desc">Price: high to low</option>
                                <option value="rating">Top rated</option>
                            </select>
                            <svg className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-neutral-600 dark:text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
                        </div>
                    </div>
                </div>
                <div id="pl-filter-chips" hidden={!applied.length} className="mt-4 flex flex-wrap items-center gap-2">
                    <ul id="pl-filter-chip-list" aria-label="Applied filters" className="flex flex-wrap gap-2">
                        {applied.map((f, i) => (
                            <li key={f.key} className="inline-flex h-7 items-center gap-1 rounded-full bg-neutral-100 pr-1 pl-3 text-[13px] whitespace-nowrap text-neutral-950 dark:bg-neutral-800 dark:text-neutral-300">
                                {f.label}
                                <button type="button" ref={(el) => (chipRefs.current[i] = el)} onClick={() => removeChip(f, i)} aria-label={`Remove filter: ${f.label}`} className="inline-flex size-5 cursor-pointer items-center justify-center rounded-full text-neutral-600 hover:bg-neutral-200 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-50 dark:focus-visible:outline-zinc-50"><svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg></button>
                            </li>
                        ))}
                    </ul>
                    <button type="button" id="pl-filter-clear" onClick={clearAndFocus} className="ml-1 cursor-pointer rounded-sm text-[13px] font-medium whitespace-nowrap text-neutral-600 underline underline-offset-4 transition-colors duration-150 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:text-neutral-400 dark:hover:text-neutral-50 dark:focus-visible:outline-zinc-50">Clear all</button>
                </div>
                <div className="mt-6 flex gap-10 border-t border-neutral-200 pt-6 dark:border-neutral-800">
                    <div id="pl-filter-scrim" hidden={!open} onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-neutral-950/40 backdrop-blur-xs lg:hidden"></div>
                    <div ref={panelRef} id="pl-filter-panel" data-open={open ? "" : undefined} {...dialog} onKeyDown={onPanelKey} aria-labelledby="pl-filter-panel-title" className="flex-col max-lg:fixed max-lg:inset-y-0 max-lg:left-0 max-lg:z-50 max-lg:hidden max-lg:w-full max-lg:max-w-sm max-lg:bg-white max-lg:shadow-2xl max-lg:ring-1 max-lg:ring-neutral-950/10 max-lg:data-open:flex lg:sticky lg:top-6 lg:flex lg:w-60 lg:shrink-0 lg:self-start dark:max-lg:bg-neutral-900 dark:max-lg:ring-neutral-800">
                        <div className="flex h-14 shrink-0 items-center justify-between gap-4 border-b border-neutral-200 px-4 lg:hidden dark:border-neutral-800">
                            <p id="pl-filter-panel-title" className="text-base font-semibold text-neutral-950 dark:text-neutral-50">Filters</p>
                            <button ref={closeRef} type="button" id="pl-filter-close" onClick={() => setOpen(false)} aria-label="Close filters" className="inline-flex size-9 cursor-pointer items-center justify-center rounded-lg text-neutral-600 transition-colors duration-150 hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus-visible:outline-zinc-50"><svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg></button>
                        </div>
                        <form id="pl-filter-form" onSubmit={(event) => event.preventDefault()} className="flex-1 divide-y divide-neutral-200 max-lg:overflow-y-auto max-lg:px-4 dark:divide-neutral-800">
                            <div className="py-5 first:pt-4 lg:first:pt-0"><fieldset>
                                <legend className="text-sm font-semibold text-neutral-950 dark:text-neutral-50">Category</legend>
                                <ul className="mt-3 space-y-3">
                                    <li className="flex items-center gap-3 text-sm">
                                        <div className="group grid size-4 shrink-0 grid-cols-1">
                                            <input id="pl-filter-cat-sneakers" type="checkbox" name="category" value="sneakers" checked={cats.includes("sneakers")} onChange={() => toggle(cats, setCats, "sneakers")} data-label="Sneakers" className="col-start-1 row-start-1 cursor-pointer appearance-none rounded-sm border border-neutral-500 bg-white checked:border-zinc-950 checked:bg-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:border-neutral-500 dark:bg-neutral-900 dark:checked:border-zinc-50 dark:checked:bg-zinc-50 dark:focus-visible:outline-zinc-50" />
                                            <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white opacity-0 group-has-checked:opacity-100 dark:stroke-zinc-950" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 8L6 11L11 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                        <label htmlFor="pl-filter-cat-sneakers" className="grow cursor-pointer text-neutral-950 dark:text-neutral-300">Sneakers</label>
                                        <span className="text-xs text-neutral-600 tabular-nums dark:text-neutral-400">4</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm">
                                        <div className="group grid size-4 shrink-0 grid-cols-1">
                                            <input id="pl-filter-cat-outdoor" type="checkbox" name="category" value="outdoor" checked={cats.includes("outdoor")} onChange={() => toggle(cats, setCats, "outdoor")} data-label="Boots and outdoor" className="col-start-1 row-start-1 cursor-pointer appearance-none rounded-sm border border-neutral-500 bg-white checked:border-zinc-950 checked:bg-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:border-neutral-500 dark:bg-neutral-900 dark:checked:border-zinc-50 dark:checked:bg-zinc-50 dark:focus-visible:outline-zinc-50" />
                                            <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white opacity-0 group-has-checked:opacity-100 dark:stroke-zinc-950" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 8L6 11L11 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                        <label htmlFor="pl-filter-cat-outdoor" className="grow cursor-pointer text-neutral-950 dark:text-neutral-300">Boots and outdoor</label>
                                        <span className="text-xs text-neutral-600 tabular-nums dark:text-neutral-400">2</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm">
                                        <div className="group grid size-4 shrink-0 grid-cols-1">
                                            <input id="pl-filter-cat-dress" type="checkbox" name="category" value="dress" checked={cats.includes("dress")} onChange={() => toggle(cats, setCats, "dress")} data-label="Dress shoes" className="col-start-1 row-start-1 cursor-pointer appearance-none rounded-sm border border-neutral-500 bg-white checked:border-zinc-950 checked:bg-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:border-neutral-500 dark:bg-neutral-900 dark:checked:border-zinc-50 dark:checked:bg-zinc-50 dark:focus-visible:outline-zinc-50" />
                                            <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white opacity-0 group-has-checked:opacity-100 dark:stroke-zinc-950" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 8L6 11L11 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                        <label htmlFor="pl-filter-cat-dress" className="grow cursor-pointer text-neutral-950 dark:text-neutral-300">Dress shoes</label>
                                        <span className="text-xs text-neutral-600 tabular-nums dark:text-neutral-400">1</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm">
                                        <div className="group grid size-4 shrink-0 grid-cols-1">
                                            <input id="pl-filter-cat-eyewear" type="checkbox" name="category" value="eyewear" checked={cats.includes("eyewear")} onChange={() => toggle(cats, setCats, "eyewear")} data-label="Eyewear" className="col-start-1 row-start-1 cursor-pointer appearance-none rounded-sm border border-neutral-500 bg-white checked:border-zinc-950 checked:bg-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:border-neutral-500 dark:bg-neutral-900 dark:checked:border-zinc-50 dark:checked:bg-zinc-50 dark:focus-visible:outline-zinc-50" />
                                            <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white opacity-0 group-has-checked:opacity-100 dark:stroke-zinc-950" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 8L6 11L11 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                        <label htmlFor="pl-filter-cat-eyewear" className="grow cursor-pointer text-neutral-950 dark:text-neutral-300">Eyewear</label>
                                        <span className="text-xs text-neutral-600 tabular-nums dark:text-neutral-400">5</span>
                                    </li>
                                </ul>
                            </fieldset></div>
                            <div className="py-5 first:pt-4 lg:first:pt-0"><fieldset>
                                <legend className="text-sm font-semibold text-neutral-950 dark:text-neutral-50">Colour</legend>
                                <ul className="mt-3 space-y-3">
                                    <li className="flex items-center gap-3 text-sm">
                                        <input id="pl-filter-colour-black" type="checkbox" name="colour" value="black" checked={colours.includes("black")} onChange={() => toggle(colours, setColours, "black")} data-label="Black" className="size-5 shrink-0 cursor-pointer appearance-none rounded-full bg-[#1d1d1f] ring-1 ring-black/10 ring-inset checked:ring-2 checked:ring-neutral-950 checked:ring-offset-2 checked:ring-offset-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:ring-white/20 dark:checked:ring-neutral-50 dark:checked:ring-offset-neutral-900 dark:focus-visible:outline-zinc-50 dark:lg:checked:ring-offset-neutral-950" />
                                        <label htmlFor="pl-filter-colour-black" className="grow cursor-pointer text-neutral-950 dark:text-neutral-300">Black</label>
                                        <span className="text-xs text-neutral-600 tabular-nums dark:text-neutral-400">7</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm">
                                        <input id="pl-filter-colour-grey" type="checkbox" name="colour" value="grey" checked={colours.includes("grey")} onChange={() => toggle(colours, setColours, "grey")} data-label="Grey" className="size-5 shrink-0 cursor-pointer appearance-none rounded-full bg-[#a8a8a3] ring-1 ring-black/10 ring-inset checked:ring-2 checked:ring-neutral-950 checked:ring-offset-2 checked:ring-offset-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:ring-white/20 dark:checked:ring-neutral-50 dark:checked:ring-offset-neutral-900 dark:focus-visible:outline-zinc-50 dark:lg:checked:ring-offset-neutral-950" />
                                        <label htmlFor="pl-filter-colour-grey" className="grow cursor-pointer text-neutral-950 dark:text-neutral-300">Grey</label>
                                        <span className="text-xs text-neutral-600 tabular-nums dark:text-neutral-400">2</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm">
                                        <input id="pl-filter-colour-navy" type="checkbox" name="colour" value="navy" checked={colours.includes("navy")} onChange={() => toggle(colours, setColours, "navy")} data-label="Navy" className="size-5 shrink-0 cursor-pointer appearance-none rounded-full bg-[#1e2a4a] ring-1 ring-black/10 ring-inset checked:ring-2 checked:ring-neutral-950 checked:ring-offset-2 checked:ring-offset-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:ring-white/20 dark:checked:ring-neutral-50 dark:checked:ring-offset-neutral-900 dark:focus-visible:outline-zinc-50 dark:lg:checked:ring-offset-neutral-950" />
                                        <label htmlFor="pl-filter-colour-navy" className="grow cursor-pointer text-neutral-950 dark:text-neutral-300">Navy</label>
                                        <span className="text-xs text-neutral-600 tabular-nums dark:text-neutral-400">1</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm">
                                        <input id="pl-filter-colour-blue" type="checkbox" name="colour" value="blue" checked={colours.includes("blue")} onChange={() => toggle(colours, setColours, "blue")} data-label="Cobalt" className="size-5 shrink-0 cursor-pointer appearance-none rounded-full bg-[#1f5fbf] ring-1 ring-black/10 ring-inset checked:ring-2 checked:ring-neutral-950 checked:ring-offset-2 checked:ring-offset-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:ring-white/20 dark:checked:ring-neutral-50 dark:checked:ring-offset-neutral-900 dark:focus-visible:outline-zinc-50 dark:lg:checked:ring-offset-neutral-950" />
                                        <label htmlFor="pl-filter-colour-blue" className="grow cursor-pointer text-neutral-950 dark:text-neutral-300">Cobalt</label>
                                        <span className="text-xs text-neutral-600 tabular-nums dark:text-neutral-400">1</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm">
                                        <input id="pl-filter-colour-brown" type="checkbox" name="colour" value="brown" checked={colours.includes("brown")} onChange={() => toggle(colours, setColours, "brown")} data-label="Tortoise" className="size-5 shrink-0 cursor-pointer appearance-none rounded-full bg-[#8a5a2b] ring-1 ring-black/10 ring-inset checked:ring-2 checked:ring-neutral-950 checked:ring-offset-2 checked:ring-offset-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:ring-white/20 dark:checked:ring-neutral-50 dark:checked:ring-offset-neutral-900 dark:focus-visible:outline-zinc-50 dark:lg:checked:ring-offset-neutral-950" />
                                        <label htmlFor="pl-filter-colour-brown" className="grow cursor-pointer text-neutral-950 dark:text-neutral-300">Tortoise</label>
                                        <span className="text-xs text-neutral-600 tabular-nums dark:text-neutral-400">1</span>
                                    </li>
                                </ul>
                            </fieldset></div>
                            <div className="py-5 first:pt-4 lg:first:pt-0"><fieldset>
                                <legend className="text-sm font-semibold text-neutral-950 dark:text-neutral-50">Price</legend>
                                <div className="mt-3 grid grid-cols-2 gap-3">
                                    <div>
                                        <label htmlFor="pl-filter-min" className="mb-1.5 block text-[13px] text-neutral-600 dark:text-neutral-400">Min</label>
                                        <div className="flex h-9 items-center gap-1 rounded-lg bg-neutral-100 px-3 text-sm text-neutral-600 outline-1 -outline-offset-1 outline-neutral-200 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-zinc-950 dark:bg-neutral-900 dark:text-neutral-400 dark:outline-neutral-700 dark:focus-within:outline-zinc-50"><span aria-hidden="true">£</span><input id="pl-filter-min" value={min} onChange={(event) => setMin(event.target.value)} type="number" inputMode="numeric" min="0" step="1" placeholder="0" className="w-full min-w-0 bg-transparent text-neutral-950 tabular-nums outline-hidden placeholder:text-neutral-600 dark:text-neutral-50 dark:placeholder:text-neutral-400" /></div>
                                    </div>
                                    <div>
                                        <label htmlFor="pl-filter-max" className="mb-1.5 block text-[13px] text-neutral-600 dark:text-neutral-400">Max</label>
                                        <div className="flex h-9 items-center gap-1 rounded-lg bg-neutral-100 px-3 text-sm text-neutral-600 outline-1 -outline-offset-1 outline-neutral-200 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-zinc-950 dark:bg-neutral-900 dark:text-neutral-400 dark:outline-neutral-700 dark:focus-within:outline-zinc-50"><span aria-hidden="true">£</span><input id="pl-filter-max" value={max} onChange={(event) => setMax(event.target.value)} type="number" inputMode="numeric" min="0" step="1" placeholder="200" className="w-full min-w-0 bg-transparent text-neutral-950 tabular-nums outline-hidden placeholder:text-neutral-600 dark:text-neutral-50 dark:placeholder:text-neutral-400" /></div>
                                    </div>
                                </div>
                            </fieldset></div>
                        </form>
                        <div className="grid shrink-0 grid-cols-2 gap-3 border-t border-neutral-200 p-4 lg:hidden dark:border-neutral-800">
                            <button type="button" id="pl-filter-reset" onClick={clearAll} className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-lg bg-neutral-100 px-4 text-sm font-medium whitespace-nowrap text-neutral-950 transition-colors duration-150 hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700 dark:focus-visible:outline-zinc-50">Clear all</button>
                            <button type="button" id="pl-filter-done" onClick={() => setOpen(false)} className="group inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-zinc-950 px-4 text-sm font-medium whitespace-nowrap text-white shadow-xs transition-colors duration-150 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:outline-zinc-50"><span id="pl-filter-done-label">Show <span id="pl-filter-done-num" className="tabular-nums">{list.length}</span>{word}</span></button>
                        </div>
                    </div>
                    <div className="min-w-0 flex-1">
                        <ul id="pl-filter-grid" hidden={!list.length} className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 xl:grid-cols-4">
                            {list.map((p) => (
                                <li key={p.id} className="group relative rounded-xl has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-zinc-950 dark:has-[a:focus-visible]:outline-zinc-50">
                                    <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                                        <img src={p.image} alt={p.alt} className="size-full object-contain p-4 transition-transform duration-300 ease-out motion-safe:group-hover:scale-105 motion-reduce:transition-none sm:p-6 [@media(pointer:coarse)]:pb-14" />
                                        {p.isNew && <span className="absolute top-2 left-2 rounded-full bg-white px-2 py-0.5 text-xs font-medium whitespace-nowrap text-neutral-950 shadow-xs sm:top-3 sm:left-3 dark:bg-neutral-900 dark:text-neutral-50">New</span>}
                                        {p.off && (
                                            <span className="absolute top-2 left-2 rounded-full bg-red-600 px-2 py-0.5 text-xs font-medium whitespace-nowrap text-white tabular-nums sm:top-3 sm:left-3">
                                                {p.off}
                                                <span className="sr-only"> off</span>
                                            </span>
                                        )}
                                        {p.low && <span className="absolute top-2 left-2 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium whitespace-nowrap text-amber-800 ring-1 ring-amber-600/20 ring-inset sm:top-3 sm:left-3 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-500/20 dark:backdrop-blur">{p.low}</span>}
                                        <button type="button" data-save="" aria-pressed={saved.includes(p.name) ? "true" : "false"} onClick={() => toggleSave(p.name)} aria-label={`Save ${p.name} to wishlist`} className="group/save absolute top-2 right-2 z-10 inline-flex size-8 cursor-pointer items-center justify-center rounded-full bg-white/90 text-neutral-600 shadow-xs backdrop-blur transition-colors duration-150 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 aria-pressed:text-red-600 motion-reduce:transition-none sm:top-3 sm:right-3 dark:bg-neutral-900/90 dark:text-neutral-400 dark:hover:text-neutral-50 dark:focus-visible:outline-zinc-50 dark:aria-pressed:text-red-400"><svg className="size-4 group-aria-pressed/save:fill-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg></button>
                                        <div className="absolute inset-x-2 bottom-2 z-10 opacity-0 transition duration-200 ease-out group-focus-within:opacity-100 group-hover:opacity-100 motion-safe:translate-y-2 motion-safe:group-focus-within:translate-y-0 motion-safe:group-hover:translate-y-0 motion-reduce:transition-none sm:inset-x-3 sm:bottom-3 [@media(pointer:coarse)]:translate-y-0 [@media(pointer:coarse)]:opacity-100">
                                            <button type="button" data-add="" data-name={p.name} data-added={added.includes(p.name) ? "" : undefined} onClick={() => add(p.name)} className="group/add inline-grid h-9 w-full cursor-pointer place-items-center rounded-lg bg-white px-3 text-sm font-medium whitespace-nowrap text-neutral-950 shadow-xs ring-1 ring-neutral-950/10 transition-colors duration-150 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:translate-y-px motion-reduce:transition-none dark:bg-neutral-900 dark:text-neutral-50 dark:ring-neutral-700 dark:hover:bg-neutral-800 dark:focus-visible:outline-zinc-50"><span className="col-start-1 row-start-1 flex items-center gap-1.5 group-data-added/add:invisible"><svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="M12 5v14" /></svg>Quick add<span className="sr-only">: {p.name}</span></span><span className="invisible col-start-1 row-start-1 flex items-center gap-1.5 group-data-added/add:visible"><svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Added<span className="sr-only">: {p.name}</span></span></button>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <h3 className="text-sm font-medium text-neutral-950 dark:text-neutral-50"><a href="#" className="after:absolute after:inset-0 focus-visible:outline-hidden">{p.name}</a></h3>
                                        <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">{p.sub}</p>
                                        {p.was ? (
                                            <p className="mt-1.5 text-sm tabular-nums"><span className="sr-only">Sale price </span><span className="font-medium text-red-700 dark:text-red-400">{p.price}</span> <span className="text-neutral-600 line-through dark:text-neutral-400"><span className="sr-only">Was </span>{p.was}</span></p>
                                        ) : (
                                            <p className="mt-1.5 text-sm font-medium text-neutral-950 tabular-nums dark:text-neutral-50">{p.price}</p>
                                        )}
                                        <p className="mt-1.5 flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400"><svg className="size-3.5 shrink-0 fill-[#ffc107] text-[#ffc107]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" /></svg><span aria-hidden="true"><span className="font-medium text-neutral-950 dark:text-neutral-50">{p.score}</span> ({p.count})</span><span className="sr-only">{p.score} out of 5, {p.count} reviews</span></p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div id="pl-filter-empty" hidden={list.length > 0} className="flex flex-col items-center rounded-xl border border-dashed border-neutral-300 px-6 py-16 text-center dark:border-neutral-700">
                            <span className="flex size-11 items-center justify-center rounded-xl bg-neutral-100 text-neutral-950 dark:bg-neutral-800 dark:text-neutral-50"><svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m13.5 8.5-5 5" /><path d="m8.5 8.5 5 5" /><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg></span>
                            <p className="mt-4 text-base font-semibold text-neutral-950 dark:text-neutral-50">No products match these filters</p>
                            <p className="mt-1 max-w-sm text-sm text-neutral-600 dark:text-neutral-400">Remove a filter or widen the price range to see more.</p>
                            <button type="button" id="pl-filter-empty-clear" onClick={clearAndFocus} className="mt-6 inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-lg bg-neutral-100 px-4 text-sm font-medium whitespace-nowrap text-neutral-950 transition-colors duration-150 hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700 dark:focus-visible:outline-zinc-50">Clear all filters</button>
                        </div>
                        <p id="pl-filter-status" role="status" className="sr-only">{message}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}