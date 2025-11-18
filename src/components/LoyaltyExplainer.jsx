import React from 'react'
import { Gift, Star, Crown } from 'lucide-react'

export default function LoyaltyExplainer() {
  const tiers = [
    { name: 'Sprinkle', pts: 0, perk: 'Earn 1pt per $1', icon: Star },
    { name: 'Frosting', pts: 300, perk: 'Free drink every month', icon: Gift },
    { name: 'Royal Icing', pts: 800, perk: 'Birthday cake on us', icon: Crown },
  ]
  return (
    <section id="loyalty" className="bg-gradient-to-b from-white to-pink-50/50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Sweet Rewards</h2>
          <p className="text-slate-600 mt-2">Earn points on every order. Redeem for treats and exclusive perks.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div key={i} className="bg-white border border-pink-100 rounded-2xl p-6 text-center shadow-sm">
              <div className="mx-auto w-12 h-12 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center mb-3">
                <t.icon className="w-6 h-6" />
              </div>
              <div className="font-semibold text-slate-900">{t.name}</div>
              <div className="text-sm text-slate-600">{t.perk}</div>
              <div className="text-xs text-pink-700 font-medium mt-2">{t.pts}+ pts</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
