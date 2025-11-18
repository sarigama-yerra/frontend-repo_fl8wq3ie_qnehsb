import React, { useEffect, useMemo, useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import LoyaltyExplainer from './components/LoyaltyExplainer'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [cart, setCart] = useState([])
  const [user, setUser] = useState(null)
  const [points, setPoints] = useState(0)

  // Create or fetch a demo user on load
  useEffect(() => {
    async function ensureUser() {
      try {
        const res = await fetch(`${API}/api/users`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: 'Cake Lover', email: 'demo@cakebox.local' })
        })
        const data = await res.json()
        setUser(data)
        // fetch loyalty
        const loy = await fetch(`${API}/api/users/${data._id}/loyalty`).then(r=>r.json())
        setPoints(loy.points)
      } catch (e) {
        // ignore
      }
    }
    ensureUser()
  }, [])

  const addToCart = (p) => {
    setCart(prev => {
      const idx = prev.findIndex(i => i._id === p._id)
      if (idx > -1) {
        const copy = [...prev]
        copy[idx].quantity += 1
        return copy
      }
      return [...prev, { ...p, quantity: 1 }]
    })
  }

  const total = useMemo(() => cart.reduce((s, i) => s + i.price * i.quantity, 0), [cart])

  const checkout = async () => {
    if (!user || cart.length === 0) return
    const items = cart.map(i => ({ product_id: i._id, quantity: i.quantity }))
    const redeem_points = 0
    const res = await fetch(`${API}/api/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: user._id, items, redeem_points })
    })
    const data = await res.json()
    if (data.order_id) {
      setCart([])
      setPoints(data.new_balance)
      alert(`Order placed! Total $${data.total}. Points balance: ${data.new_balance}`)
    } else {
      alert('Checkout failed')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <NavBar onCartClick={checkout} onLoyaltyClick={()=>{}} onSignInClick={()=>{}} user={user} points={points} />
      <Hero onShopClick={() => {}} />
      <ProductGrid onAdd={addToCart} />
      <LoyaltyExplainer />
      <footer className="text-center py-10 text-slate-500 text-sm">© Cakebox — Crafted fresh daily</footer>

      {/* Floating Cart */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white rounded-full px-5 py-3 shadow-lg flex items-center gap-4">
          <div className="text-sm">{cart.reduce((s,i)=>s+i.quantity,0)} items • ${total.toFixed(2)}</div>
          <button onClick={checkout} className="bg-white text-slate-900 rounded-full px-4 py-2 text-sm font-medium hover:bg-slate-100">Checkout</button>
        </div>
      )}
    </div>
  )
}
