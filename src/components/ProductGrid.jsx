import React, { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ProductGrid({ onAdd }) {
  const [items, setItems] = useState([])
  const [q, setQ] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch(`${API}/api/products`)
      .then(r => r.json())
      .then(setItems)
      .catch(() => {})
  }, [])

  const filtered = items.filter(p => p.title.toLowerCase().includes(q.toLowerCase()))

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-800">Bestsellers</h2>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search cakes" className="rounded-full border border-slate-300 px-4 py-2 text-sm" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <div key={p._id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.image || 'https://images.unsplash.com/photo-1541976076758-347942db1970?w=800'} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-slate-900">{p.title}</h3>
              <p className="text-sm text-slate-600 line-clamp-2 mb-3">{p.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">${p.price?.toFixed(2)}</span>
                <button onClick={() => onAdd(p)} className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
