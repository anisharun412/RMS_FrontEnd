// src/components/AdminHeader.jsx
import React from "react";

export default function AdminHeader({
  user = { name: "Totok Michael", email: "tmichael20@mail.com" },
}) {
  return (
    <header
      className="
        bg-white
        rounded-2xl
        shadow-[var(--rms-soft-shadow)]
        px-6 py-5
        flex items-center justify-between
        sticky top-0 z-999
      "
    >
      {/* Left */}
      {/* Search */}
      <div className="flex-1">
        <div className="relative max-w-xl">
          <span className="absolute inset-y-0 left-3 flex items-center text-[var(--rms-neutral-400)]">
            <svg className="w-5 h-5" fill="none" stroke="black" viewBox="0 0 24 24">
              <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
            </svg>
          </span>

          <input
            placeholder="Search task"
            className="
              w-full rounded-4xl border border-[var(--rms-neutral-100)]
              bg-[var(--rms-neutral-100)]
              px-12 py-3 text-sm
              text-[var(--rms-neutral-600)]
              focus:outline-none focus:ring-2
              focus:ring-[var(--rms-primary-200)]
            "
          />

          <div className="
            absolute right-4 top-1/2 -translate-y-1/2
            text-xs text-[var(--rms-neutral-500)]
            px-2 py-1 bg-white rounded-md
            border border-[var(--rms-neutral-200)]
          ">
            ⌘ F
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="ml-2 flex items-center justify-center gap-3">
        <div className="
          w-12 h-12 rounded-full
          bg-gradient-to-br
          from-[var(--rms-primary-300)]
          to-[var(--rms-primary-600)]
          flex items-center justify-center
          text-white font-semibold
        ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </div>

        <div className="
          w-12 h-12 rounded-full
          bg-gradient-to-br
          from-[var(--rms-primary-400)]
          to-[var(--rms-primary-600)]
          flex items-center justify-center
          text-white font-semibold
        ">
          TM
        </div>

        <div className="hidden sm:block mt-1 text-left rounded-2xl">
          <div className="text-lg/2 font-medium text-[var(--rms-neutral-800)] pb-2">
            {user.name}
          </div>
          <div className="text-sm text-[var(--rms-neutral-500)]">
            {user.email}
          </div>
        </div> 
      </div>
    </header>
  );
}