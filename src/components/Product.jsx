import React from 'react'

const products = [
    {
        id: 1,
        name: "Crimson Luxe Gown – Elegant full-length dress",
        price: "$100.00",
        image: "https://readymadeui.com/images/fashion-img-1.webp",
        alt: "Crimson Luxe Gown",
    },
    {
        id: 2,
        name: "Emerald Draped Dress – Flowing cape-style gown",
        price: "$120.00",
        image: "https://readymadeui.com/images/fashion-img-2.webp",
        alt: "Emerald Draped Dress",
    },
    {
        id: 3,
        name: "Minimalist Leather Tee Look – Modern streetwear",
        price: "$110.00",
        image: "https://readymadeui.com/images/fashion-img-3.webp",
        alt: "Modern streetwear",
    },
    {
        id: 4,
        name: "Urban Knit Style – Casual street look with hoodie",
        price: "$115.00",
        image: "https://readymadeui.com/images/fashion-img-4.webp",
        alt: "Urban Knit Style",
    },
    {
        id: 5,
        name: "Bold Print Winter Set – Statement coat outfit",
        price: "$105.00",
        image: "https://readymadeui.com/images/fashion-img-5.webp",
        alt: "Bold Print Winter",
    },
    {
        id: 6,
        name: "Floral Puff Sleeve Dress – Feminine and casual",
        price: "$140.00",
        image: "https://readymadeui.com/images/fashion-img-6.webp",
        alt: "Floral Puff Sleeve",
    },
    {
        id: 7,
        name: "Striped Tee & Blazer – Smart-casual streetwear",
        price: "$130.00",
        image: "https://readymadeui.com/images/fashion-img-7.webp",
        alt: "Striped Tee & Blazer",
    },
    {
        id: 8,
        name: "Tank Top & Denim – Everyday stylish look",
        price: "$130.00",
        image: "https://readymadeui.com/images/fashion-img-9.webp",
        alt: "Tank Top & Denim",
    },
];

function ProductCard({ product }) {
    return (
        <li className="group flex flex-col transition-all">
            <a href="#" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                <div className="aspect-[3/4] bg-slate-100 w-full overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.alt}
                        className="w-full h-full object-cover object-top hover:scale-110 transition-all duration-700"
                    />
                </div>
            </a>

            <div className="py-4 relative">
                <div
                    className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10 transition-all duration-500 left-0 right-0 group-hover:bottom-20 group-focus-within:bottom-20 lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">

                    <button
                        type="button"
                        title="Add to wishlist"
                        aria-label="add to wishlist"
                        className="bg-transparent outline-0 border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-slate-900 size-5 inline-block"
                            viewBox="0 0 64 64"
                            aria-hidden="true"
                        >
                            <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        title="Add to cart"
                        aria-label="add to cart"
                        className="bg-transparent outline-0 border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-slate-900 size-5 inline-block"
                            viewBox="0 0 512 512"
                            aria-hidden="true"
                        >
                            <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" data-original="#000000" />
                        </svg>
                    </button>
                </div>

                <div className="z-20 relative">
                    <h3 className="text-sm font-semibold text-slate-900 truncate sm:text-base">
                        {product.name}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium mt-2">
                        {product.price}
                    </p>
                </div>
            </div>
        </li>
    );
}


function Product() {

    return (
        <section className="mt-6 px-4 md:px-8" aria-label="products">
            <h2 className="text-3xl md:text-5xl font-serif text-center font-bold mb-2">Our Products</h2>
            <div className="max-w-7xl mx-auto">
                <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ul>
            </div>
            <div className='flex items-center justify-center'>
                <a
                    href="#"
                    className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-md transition-all shadow-md"
                >
                    View All Products
                </a>
            </div>

        </section>
    )
}

export default Product