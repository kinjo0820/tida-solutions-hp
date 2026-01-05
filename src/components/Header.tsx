"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Tida Solutions" className="w-10 h-10 rounded-xl shadow-lg" />
          <span className="text-xl font-bold tracking-tight text-white">Tida Solutions</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <Link href="/" className="hover:text-[var(--accent)]">Home</Link>
          <Link href="/mission" className="hover:text-[var(--accent)]">Mission</Link>
          <Link href="/solutions" className="hover:text-[var(--accent)]">Solutions</Link>
          <Link href="/projects" className="hover:text-[var(--accent)]">Projects</Link>
          <Link href="/company" className="hover:text-[var(--accent)]">Company</Link>
          <Link href="/blog" className="hover:text-[var(--accent)]">Blog</Link>
          <Link href="/recruit" className="bg-[var(--accent)] text-black px-4 py-2 rounded-full font-bold">Careers</Link>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Open menu" className="p-2 rounded-md bg-white/5">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 border-t border-white/5 bg-black/60">
          <nav className="flex flex-col gap-3 text-slate-200">
            <Link href="/" onClick={() => setOpen(false)} className="py-2">Home</Link>
            <Link href="/mission" onClick={() => setOpen(false)} className="py-2">Mission</Link>
            <Link href="/solutions" onClick={() => setOpen(false)} className="py-2">Solutions</Link>
            <Link href="/projects" onClick={() => setOpen(false)} className="py-2">Projects</Link>
            <Link href="/company" onClick={() => setOpen(false)} className="py-2">Company</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="py-2">Blog</Link>
            <Link href="/recruit" onClick={() => setOpen(false)} className="py-2 bg-[var(--accent)] text-black px-4 py-2 rounded-md w-max">Careers</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
