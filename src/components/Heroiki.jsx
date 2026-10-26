import React from 'react'
import hiki from '../assets/arrival-bg.png'

function Heroiki() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-end px-6 md:px-16">
        {/* Şəkil arxa fonda qalır */}
        <img src={hiki} alt="" className="absolute inset-0 w-full h-full object-cover" />
        
        {/* Yazılar sağ tərəfə keçir */}
        <div className="relative z-10 max-w-xl text-left">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-rose-500 mb-2">
              # New Arrivals
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-6 leading-relaxed">
              Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
            </p>
            <a
              href="#"
              className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-md transition-all shadow-md"
            >
              Shop Now
            </a>
        </div>
    </div>
  )
}

export default Heroiki;