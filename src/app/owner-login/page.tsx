'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, User, ShieldAlert, ArrowLeft, Eye, EyeOff } from 'lucide-react';

export default function OwnerLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // If already logged in, go straight to billing
    const isAuth = localStorage.getItem('avm_owner_authenticated');
    if (isAuth === 'true') {
      router.push('/billing');
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Artificial tiny delay for luxury premium loading experience
    setTimeout(() => {
      if (username === 'avmowner' && password === 'anushdhamu') {
        localStorage.setItem('avm_owner_authenticated', 'true');
        router.push('/billing');
      } else {
        setError('Invalid username or password. Please try again.');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12 bg-[#0a0d14] text-[#F8F9FB] font-sans overflow-hidden">
      {/* Dynamic luxury backgrounds */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#0F4C81]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#D4AF37]/10 blur-[120px] pointer-events-none" />
      
      {/* Decorative Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F8F9FB 1px, transparent 1px), linear-gradient(90deg, #F8F9FB 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating Return Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.push('/')}
        className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#c0c0c0] hover:text-[#D4AF37] hover:border-[#D4AF37]/45 transition-all duration-300 backdrop-blur-md cursor-pointer text-sm font-medium"
      >
        <ArrowLeft size={16} />
        Back to Directory
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md relative z-10"
      >
        {/* Card Panel */}
        <div className="bg-[#121620]/75 border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl backdrop-blur-2xl relative overflow-hidden group">
          {/* Accent Gold Border Highlight */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0F4C81]/20 border border-[#D4AF37]/30 text-[#D4AF37] mb-4 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
            >
              <Lock size={28} />
            </motion.div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#F8F9FB] font-heading">
              AVM PLASTICS
            </h1>
            <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37] font-semibold mt-1">
              Owner Portal & Administration
            </p>
            <p className="text-sm text-[#c0c0c0] mt-3">
              Enter your credentials to manage your legacy business operations, POS, inventory, and accounts.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 flex items-start gap-3 text-sm"
            >
              <ShieldAlert className="shrink-0 mt-0.5" size={18} />
              <span>{error}</span>
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#c0c0c0] block">
                Username
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#c0c0c0]/60">
                  <User size={18} />
                </span>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-full bg-[#161a25]/90 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-[#F8F9FB] text-sm font-medium placeholder-[#c0c0c0]/30 outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#c0c0c0] block">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#c0c0c0]/60">
                  <Lock size={18} />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter security key"
                  className="w-full bg-[#161a25]/90 border border-white/10 rounded-xl py-3.5 pl-11 pr-12 text-[#F8F9FB] text-sm font-medium placeholder-[#c0c0c0]/30 outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#c0c0c0]/60 hover:text-[#D4AF37] transition-colors duration-200 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#0F4C81] to-[#0F4C81]/80 hover:from-[#D4AF37] hover:to-[#D4AF37]/80 text-[#F8F9FB] font-semibold py-4 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all duration-300 cursor-pointer border border-[#D4AF37]/20 flex items-center justify-center gap-2 relative overflow-hidden group"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <span>Unlock Dashboard</span>
              )}
            </button>
          </form>
        </div>

        {/* Footer Notes */}
        <p className="text-center text-xs text-[#c0c0c0]/50 mt-6 tracking-wide">
          Protected Workspace &copy; AVM PLASTICS 1986.
        </p>
      </motion.div>
    </div>
  );
}
