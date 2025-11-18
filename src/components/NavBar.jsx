import React from 'react'
import { ShoppingCart, Gift, User } from 'lucide-react'

export default function NavBar({ onCartClick, onLoyaltyClick, onSignInClick, user, points }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="Cakebox" className="w-8 h-8" />
          <span className="text-xl font-semibold text-slate-800">Cakebox</span>
        </div>
        <div className="flex items-center gap-2 text-slate-700">
          {user ? (
            <button onClick={onLoyaltyClick} className="hidden sm:flex items-center gap-2 rounded-full px-3 py-1.5 bg-pink-50 text-pink-700 border border-pink-200 hover:bg-pink-100 transition">
              <Gift className="w-4 h-4" />
              <span className="text-sm font-medium">{points} pts</span>
            </button>
          ) : (
            <button onClick={onSignInClick} className="hidden sm:flex items-center gap-2 rounded-full px-3 py-1.5 bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 transition">
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">Sign in</span>
            </button>
          )}
          <button onClick={onCartClick} className="flex items-center gap-2 rounded-full px-3 py-1.5 bg-slate-900 text-white hover:bg-slate-800 transition">
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm font-medium">Cart</span>
          </button>
        </div>
      </div>
    </header>
  )
}
