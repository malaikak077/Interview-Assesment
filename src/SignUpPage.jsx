import React, { useState, useEffect, useRef } from "react";
import logo from "./assets/logo.png";
import sideImage from "./assets/img.png";

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="h-full w-full bg-white text-slate-900">
            <div className="grid h-full w-full grid-cols-1 md:grid-cols-2">
                <div className="relative px-6 py-6 sm:px-10 md:px-16">
                    <img src={logo} alt="Healentra" className="h-28 w-auto" />

                    <div className="mx-auto mt-8 w-full">
                        <h1 className="text-3xl font-semibold tracking-tight">Sign Up</h1>
                        <p className="mt-2 text-sm text-slate-500">
                            Already have an account?{" "}
                            <a href="#" className="font-medium text-sky-600 hover:text-sky-700">
                                Login
                            </a>
                        </p>

                        <form className="mt-8 space-y-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <LabeledInput label="First Name" placeholder="Mr/Mrs/Prof/Doc" />
                                <LabeledInput label="Last Name" placeholder="Last Name" />
                                <LabeledInput label="City" placeholder="City" />
                                <LabeledInput label="E-mail" type="email" placeholder="example@gmail.com" />

                                <LabeledInput label="Phone Number" placeholder="+92" />
                                <LabeledSelect
                                    label="Biological Sex"
                                    options={["Male", "Female", "Intersex", "Prefer not to say"]}
                                    defaultValue="Male"
                                />
                                <div className="sm:col-span-2">
                                    <label className="mb-1 block text-sm font-medium text-slate-700">Language</label>
                                    <LanguageMultiSelect
                                        options={["English", "Urdu", "French", "Arabic", "Spanish", "German"]}
                                        defaultSelected={["English"]}
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
                                    <div className="relative flex items-center rounded-lg border border-slate-200 focus-within:border-sky-500 focus-within:ring focus-within:ring-sky-100">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="w-full rounded-l-lg border-0 bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-slate-400"
                                            placeholder="••••••••"
                                        />
                                        <div className="mx-1 h-6 w-px bg-slate-200" />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword((v) => !v)}
                                            className="mr-2 inline-flex items-center justify-center rounded-full bg-slate-400 p-1.5 text-white hover:bg-slate-500"
                                            aria-label="Toggle password visibility"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                className="h-4 w-4" fill="currentColor">
                                                <path d="M12 5C5 5 1 12 1 12s4 7 11 7 11-7 11-7-4-7-11-7Zm0 11a4 4 0 1 1 .001-8.001A4 4 0 0 1 12 16Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="mt-2 w-full rounded-lg bg-sky-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-200"
                            >
                                Sign Up
                            </button>

                            <div className="relative my-2">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-slate-200" />
                                </div>
                                <div className="relative flex justify-center">
                                    <span className="bg-white px-3 text-xs uppercase tracking-wider text-slate-400">
                                        or
                                    </span>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium transition hover:bg-slate-50"
                            >
                                <GoogleIcon />
                                Continue with Google
                            </button>
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium transition hover:bg-slate-50"
                            >
                                <FacebookIcon />
                                Continue with Facebook
                            </button>
                        </form>
                    </div>
                </div>
                <div className="relative hidden items-center justify-center overflow-hidden bg-slate-900 md:flex">
                    <div className="pointer-events-none absolute -right-28 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,#0ea5e9,transparent)] opacity-40" />
                    <a
                        href="#"
                        className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/20"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 9h.01M15 9h.01M8 13h8M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 2.387.835 4.578 2.232 6.3L4 22l3.828-1.063A9.953 9.953 0 0 0 12 22Z" />
                        </svg>
                        Support
                    </a>

                    <div className="rounded-2xl bg-white/5 p-2 shadow-2xl ring-1 ring-white/10 backdrop-blur">
                        <img src={sideImage} alt="Healthcare professionals"
                            className="h-[280px] w-[370px] rounded-xl object-cover" />
                    </div>



                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 max-w-md px-6 text-center text-white">
                        <h2 className="text-2xl font-semibold leading-snug">
                            Everything You Need in <br /> One Platform
                        </h2>
                        <p className="mt-3 text-sm text-slate-200">
                            Unlock the full potential of Healentra with complete access to advanced medical
                            services, health tools, secure patient records, smart scheduling, and seamless
                            online consultations — all in one place.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

function LabeledInput({ label, type = "text", placeholder }) {
    return (
        <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none ring-sky-100 transition placeholder:text-slate-400 focus:border-sky-500 focus:ring"
            />
        </div>
    );
}

function LabeledSelect({ label, options = [], defaultValue }) {
    return (
        <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">{label}</label>
            <div className="relative">
                <select
                    defaultValue={defaultValue}
                    className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none ring-sky-100 transition focus:border-sky-500 focus:ring"
                >
                    {options.map((o) => (
                        <option key={o}>{o}</option>
                    ))}
                </select>
                <svg
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" />
                </svg>
            </div>
        </div>
    );
}

function LanguageMultiSelect({ options, defaultSelected = [], placeholder = "Select" }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(defaultSelected);
    const wrapRef = useRef(null);

    const toggle = (opt) =>
        setSelected((prev) =>
            prev.includes(opt) ? prev.filter((x) => x !== opt) : [...prev, opt]
        );

    const remove = (opt) => setSelected((prev) => prev.filter((x) => x !== opt));

    useEffect(() => {
        const onDocClick = (e) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, []);

    return (
        <div className="relative" ref={wrapRef}>
            <div
                className="flex min-h-[42px] w-full cursor-text items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-sm outline-none ring-sky-100 transition focus-within:border-sky-500 focus-within:ring"
                onClick={() => setOpen((v) => !v)}
            >
                <div className="flex flex-wrap items-center gap-2">
                    {selected.length === 0 && (
                        <span className="px-1 text-slate-400">{placeholder}</span>
                    )}
                    {selected.map((s) => (
                        <span
                            key={s}
                            className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {s}
                            <button
                                type="button"
                                className="rounded bg-transparent p-0.5 hover:bg-emerald-100"
                                onClick={() => remove(s)}
                                aria-label={`Remove ${s}`}
                            >
                                <svg
                                    viewBox="0 0 20 20"
                                    className="h-3.5 w-3.5 text-black"
                                    fill="currentColor"
                                >
                                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                </svg>
                            </button>
                        </span>
                    ))}
                </div>

                <svg
                    className={`ml-auto h-4 w-4 text-slate-400 transition ${open ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" />
                </svg>
            </div>
            {open && (
                <div className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-lg border border-slate-200 bg-white text-slate-700 shadow-xl ring-1 ring-slate-200">
                    {options.map((opt) => {
                        const isOn = selected.includes(opt);
                        return (
                            <button
                                key={opt}
                                type="button"
                                className="flex w-full items-center justify-between bg-white px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                                onClick={() => toggle(opt)}
                            >
                                <span>{opt}</span>
                                {isOn && (
                                    <svg viewBox="0 0 20 20" className="h-4 w-4 text-emerald-600" fill="currentColor">
                                        <path d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L9 11.586l6.296-6.296a1 1 0 0 1 1.408 0z" />
                                    </svg>
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

function GoogleIcon() {
    return (
        <svg viewBox="0 0 533.5 544.3" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
            <path fill="#EA4335" d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.3H272v95.2h147.2c-6.3 34-25 62.8-53.4 82v67h86.4c50.6-46.5 81.3-115.1 81.3-193.9z" />
            <path fill="#34A853" d="M272 544.3c72.8 0 134-24 178.6-65.1l-86.4-67c-24 16.1-54.6 25.6-92.2 25.6-70.9 0-131-47.8-152.5-112.1H30.5v70.4c44.4 88.1 135.7 148.2 241.5 148.2z" />
            <path fill="#4A90E2" d="M119.5 325.7c-9.6-28.6-9.6-59.6 0-88.2v-70.4H30.5c-39.9 79.7-39.9 149.3 0 229z" />
            <path fill="#FBBC05" d="M272 107.7c39.6-.6 77.6 14.7 106.5 42.8l79.5-79.5C404.9 23.9 341.6 0 272 0 166.2 0 75 60.1 30.5 148.2l89 70.4C141 155 201.1 107.7 272 107.7z" />
        </svg>
    );
}
function FacebookIcon() {
    return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.5 9H16V6h-2.5C11.6 6 10 7.6 10 9.5V11H8v3h2v7h3v-7h2.1l.9-3H13v-1.5c0-.3.2-.5.5-.5z" />
        </svg>
    );
}
