import React from 'react'

export default function Hero({ onShopClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-rose-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-pink-700 bg-pink-100 rounded-full px-3 py-1 mb-4">Freshly Baked Happiness</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Cakes made personal. Rewards made generous.</h1>
          <p className="text-lg text-slate-600 mb-8">Discover handcrafted cakes, cupcakes, and treats. Earn points every time you indulge, unlock birthday surprises, and enjoy member-only perks.</p>
          <div className="flex items-center gap-3">
            <button onClick={onShopClick} className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-white font-medium shadow hover:bg-slate-800 transition">Shop bestsellers</button>
            <a href="#loyalty" className="inline-flex items-center justify-center rounded-full px-5 py-3 text-slate-900 font-medium border border-slate-300 hover:bg-white transition">How rewards work</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-pink-200/60 to-rose-200/60 blur-2xl rounded-3xl" />
          <img src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYWtlc3xlbnwwfDB8fHwxNzYzNDkyODU2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Cakes" className="relative rounded-3xl shadow-2xl border border-white" />
        </div>
      </div>
    </section>
  )
}
