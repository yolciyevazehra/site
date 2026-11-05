import React from 'react'

function ProductCard({ product }) {
    return (
        <li className="group flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
            <a href="#" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                <div className="aspect-square w-full bg-white p-4 flex items-center justify-center overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </a>

            <div className="p-4 flex flex-col flex-grow justify-between bg-slate-50 border-t border-slate-100">
                <div>
                    <h3 className="text-sm font-semibold text-slate-900 line-clamp-1 sm:text-base" title={product.title}>
                        {product.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                        {product.category}
                    </p>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-base font-bold text-slate-900">
                        ${product.price}
                    </span>
                    
                    <span className="text-xs font-medium text-rose-600 bg-rose-50 px-2.5 py-1 rounded">
                        Details
                    </span>
                </div>
            </div>
        </li>
    );
}

function Product({ products }) {
    return (
        <section className="mt-6 px-4 md:px-8 max-w-7xl mx-auto" aria-label="products">
            <h2 className="text-3xl md:text-5xl font-serif text-center font-bold mb-8 text-slate-800">Our Products</h2>
            
            <div className="w-full">
                <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products && products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ul>
            </div>

            <div className='flex items-center justify-center mt-10 mb-10'>
                <a
                    href="#"
                    className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3 rounded-md transition-all shadow-md hover:shadow-lg"
                >
                    View All Products
                </a>
            </div>
        </section>
    )
}

export default Product