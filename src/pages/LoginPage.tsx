import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login feature is coming soon!");
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Panel - Login Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <Link to="/" className="flex items-center gap-2 mb-12 group">
            <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center shadow-lg group-hover:bg-primary-700 transition-colors">
              <span className="text-white font-display font-bold text-xl leading-none">T</span>
            </div>
            <span className="font-display font-bold text-2xl text-slate-900 tracking-tight">TalentOps</span>
          </Link>

          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-slate-600 font-medium">
              Please enter your details to sign in.
            </p>
          </div>

          <div className="mt-8">
            <form className="space-y-5" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-slate-50 hover:bg-slate-100 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">
                  Password
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-slate-50 hover:bg-slate-100 transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-slate-300 rounded cursor-pointer"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm font-medium text-slate-700 cursor-pointer">
                    Remember for 30 days
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-semibold text-primary-600 hover:text-primary-500 transition-colors">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full flex justify-center items-center py-6 px-4 rounded-xl shadow-lg shadow-primary-500/20 text-base font-bold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all hover:-translate-y-0.5"
                >
                  Sign In
                </Button>
              </div>
            </form>

            <div className="mt-8 text-center text-sm">
              <span className="text-slate-500">Don't have an account?</span>{' '}
              <Link to="/#book-demo" className="font-semibold text-primary-600 hover:text-primary-500 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Branding/Marketing (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:flex-1 relative overflow-hidden bg-[#0B1121] items-center justify-center">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/40 via-[#0B1121]/80 to-[#0B1121]"></div>
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

        <div className="relative z-10 max-w-2xl px-12">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Empowering your workforce, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">every step of the way.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Join thousands of modern organizations that use TalentOps to streamline recruitment, automate payroll, and drive high performance across their entire company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-white font-bold mb-2">Enterprise Security</h3>
              <p className="text-slate-400 text-sm">Bank-grade encryption and ISO-certified infrastructure.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-white font-bold mb-2">Lightning Fast</h3>
              <p className="text-slate-400 text-sm">Optimized for speed so your HR team never has to wait.</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
