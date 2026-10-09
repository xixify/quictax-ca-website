import React, { useState } from 'react';

export const PricingSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 't1' | 'freelance' | 't2' | 'monthly'>('all');

  return (
    <section id="pricing" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-sky-100 text-sky-800 text-xs font-extrabold px-3 py-1 rounded text-transform uppercase tracking-wider mb-3">
            TRANSPARENT FIXED PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
            Accountants You’ll Want to Talk To.
          </h2>
          <p className="text-base text-slate-700">
            Outsource all your bookkeeping, accounting, and tax filing with fixed, transparent pricing so you can consult with us without hourly billing worries.
          </p>

          {/* Toggle filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 bg-slate-200 p-1.5 rounded-lg max-w-max mx-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
                activeCategory === 'all' ? 'bg-white text-sky-700 shadow-sm' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              All Packages
            </button>
            <button
              onClick={() => setActiveCategory('t1')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
                activeCategory === 't1' ? 'bg-white text-sky-700 shadow-sm' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Personal T1
            </button>
            <button
              onClick={() => setActiveCategory('freelance')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
                activeCategory === 'freelance' ? 'bg-white text-sky-700 shadow-sm' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Self-Employed / Gig
            </button>
            <button
              onClick={() => setActiveCategory('t2')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
                activeCategory === 't2' ? 'bg-white text-sky-700 shadow-sm' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Corporate T2
            </button>
            <button
              onClick={() => setActiveCategory('monthly')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
                activeCategory === 'monthly' ? 'bg-white text-sky-700 shadow-sm' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Monthly Tiers
            </button>
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Personal T1 */}
          {(activeCategory === 'all' || activeCategory === 't1') && (
            <div className="bg-white border-2 border-slate-200 rounded-xl p-7 flex flex-col justify-between hover:border-sky-600 transition-all shadow-sm">
              <div>
                <div className="border-b border-slate-200 pb-5 mb-6">
                  <h3 className="text-xl font-black text-slate-900">Personal Tax Return (T1)</h3>
                  <p className="text-xs text-slate-500 mt-1">For employees, students & families</p>
                  <div className="text-4xl font-black text-slate-900 mt-4">
                    $99 <span className="text-sm font-semibold text-slate-500">/ return</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-sm text-slate-700 gap-2">
                    <span className="text-emerald-500 font-black">✓</span>
                    <span>T1 General Return & CRA NETFILE Submission</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-700 gap-2">
                    <span className="text-emerald-500 font-black">✓</span>
                    <span>Up to 3 T4 / T4A / T5 Income Slips included</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-700 gap-2">
                    <span className="text-emerald-500 font-black">✓</span>
                    <span>RRSP, TFSA & Medical Credit Scanning</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-700 gap-2">
                    <span className="text-emerald-500 font-black">✓</span>
                    <span>Prior Year NOA & Audit Protection</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-700 gap-2">
                    <span className="text-emerald-500 font-black">✓</span>
                    <span>48-Hour Turnaround Guaranteed</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/12895275237?text=Hi%20QuicTax,%20I'd%20like%20to%20file%20my%20Personal%20T1%20Tax%20Return%20($99)."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-center rounded-lg text-sm transition-colors block"
              >
                File Personal T1 →
              </a>
            </div>
          )}

          {/* Card 2: Self-Employed (Featured) */}
          {(activeCategory === 'all' || activeCategory === 'freelance') && (
            <div className="bg-white border-2 border-sky-600 rounded-xl p-7 flex flex-col justify-between relative shadow-lg">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                MOST POPULAR FOR GIG WORKERS
              </span>
              <div>
                <div className="border-b border-slate-200 pb-5 mb-6">
                  <h3 className="text-xl font-black text-slate-900">Freelancer & Self-Employed</h3>
                  <p className="text-xs text-slate-500 mt-1">For sole proprietors, contractors & Uber drivers</p>
                  <div className="text-4xl font-black text-slate-900 mt-4">
                    $249 <span className="text-sm font-semibold text-slate-500">/ return</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-sm text-slate-700 gap-2">
                    <span className="text-emerald-500 font-black">✓</span>
                    <span><strong>Everything in Personal T1 Package</strong></span>
                  </li>
                  <li className="flex items-start text-sm text-slate-700 gap-2">
                    <span className="text-emerald-500 font-black">✓</span>
                    <span>Form T2125 Statement of Business Activities</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-700 gap-2">
                    <span className="text-emerald-500 font-black">✓</span>
                    <span>Vehicle Mileage & Gas Write-off Optimization</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-700 gap-2">
                    <span className="text-emerald-500 font-black">✓</span>
                    <span>Home Office, Phone & Internet Deductions</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-700 gap-2">
                    <span className="text-emerald-500 font-black">✓</span>
                    <span>HST/GST Annual Return Reconciliation</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-700 gap-2">
                    <span className="text-emerald-500 font-black">✓</span>
                    <span>Direct WhatsApp Access to Tax Specialist</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/12895275237?text=Hi%20QuicTax,%20I'd%20like%20to%20file%20my%20Freelancer/Self-Employed%20T2125%20Return%20($249)."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-center rounded-lg text-sm transition-colors block"
              >
                File Freelancer Return →
              </a>
            </div>
          )}

          {/* Card 3: Corporate T2 */}
          {(activeCategory === 'all' || activeCategory === 't2' || activeCategory === 'monthly') && (
            <div className="bg-white border-2 border-slate-200 rounded-xl p-7 flex flex-col justify-between hover:border-slate-800 transition-all shadow-sm">
              <div>
                <div className="border-b border-slate-200 pb-5 mb-6">
                  <h3 className="text-xl font-black text-slate-900">Corporate T2 Tax Return</h3>
                  <p className="text-xs text-slate-500 mt-1">For incorporated Canadian businesses</p>
                  <div className="text-4xl font-black text-slate-900 mt-4">
                    $899 <span className="text-sm font-semibold text-slate-500">/ return</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-sm text-slate-700 gap-2">
                    <span className="text-emerald-500 font-black">✓</span>
                    <span>Complete T2 Corporate Tax Return</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-700 gap-2">
                    <span className="text-emerald-500 font-black">✓</span>
                    <span>GIFI Financial Statement Integration</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-700 gap-2">
                    <span className="text-emerald-500 font-black">✓</span>
                    <span>Small Business Deduction (9% Rate)</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-700 gap-2">
                    <span className="text-emerald-500 font-black">✓</span>
                    <span>Shareholder Dividend / Salary Optimization</span>
                  </li>
                  <li className="flex items-start text-sm text-slate-700 gap-2">
                    <span className="text-emerald-500 font-black">✓</span>
                    <span>CRA Corporate EFILE Direct Submission</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/12895275237?text=Hi%20QuicTax,%20I'd%20like%20a%20quote%20for%20Corporate%20T2%20Tax%20Filing%20($899)."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-center rounded-lg text-sm transition-colors block"
              >
                File Corporate T2 →
              </a>
            </div>
          )}

        </div>

        {/* Add-on Services Box */}
        <div className="mt-16 bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-extrabold text-slate-900 mb-2">A La Carte & Standalone Services</h3>
          <p className="text-sm text-slate-600 mb-6">Need help with back tax years, CRA audits, or Notices of Objection?</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="text-xs font-bold text-slate-500 uppercase">UNFILED BACK TAXES</div>
              <div className="text-lg font-black text-slate-900 mt-1">$199 / year</div>
              <p className="text-xs text-slate-600 mt-1">Multi-year catch-up returns</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="text-xs font-bold text-slate-500 uppercase">NOTICE OF OBJECTION</div>
              <div className="text-lg font-black text-slate-900 mt-1">Starting at $499</div>
              <p className="text-xs text-slate-600 mt-1">Challenge CRA reassessments</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="text-xs font-bold text-slate-500 uppercase">VOLUNTARY DISCLOSURES</div>
              <div className="text-lg font-black text-slate-900 mt-1">Starting at $799</div>
              <p className="text-xs text-slate-600 mt-1">Disclose prior errors for 100% penalty relief</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="text-xs font-bold text-slate-500 uppercase">T1OVP RRSP OVERCONTRIBUTION</div>
              <div className="text-lg font-black text-slate-900 mt-1">$299 flat</div>
              <p className="text-xs text-slate-600 mt-1">File T1OVP & penalty relief request</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
