import { Link } from "react-router";

export default function Register({ isOpen = false, onClose = () => {} }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-150 rounded-xl bg-[#fffdf8] p-8">
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="font-['Fraunces'] text-2xl">Register Citizen Account</h2>
                        <p className="mt-2 font-['Public_Sans'] text-sm">Sign in to lodge a complaint or upvote issues.</p>
                    </div>
                    <button type="button" onClick={onClose} className="cursor-pointer">
                        <img src="/icons/i-close.svg" alt="Icon Close" />
                    </button>
                </div>
                <div className="mt-6">
                    <div className="flex border-b border-[#e4dfd4]">
                        <Link to="/login" className="flex-1 px-4 py-3 text-center font-['Public_Sans'] text-sm">
                            Sign In Existing Account
                        </Link>
                        <span className="flex-1 border-b-2 border-[rgba(15,107,79,1)] px-4 py-3 text-center font-['Public_Sans'] text-sm">
                            Register as Citizen
                        </span>
                    </div>
                    <form className="mt-6 flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="font-['IBM_Plex_Mono'] text-xs" htmlFor="register-name">FULL NAME (NAMA LENGKAP) *</label>
                            <div className="flex items-center gap-3 rounded-lg border border-[#d8d2c6] px-4 py-3">
                                <img src="/icons/i-user.svg" alt="Icon User" />
                                <input className="w-full bg-transparent font-['Public_Sans'] outline-none" type="text" id="register-name" placeholder="e.g. Budi Santoso" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="font-['IBM_Plex_Mono'] text-xs" htmlFor="register-email">EMAIL ADDRESS *</label>
                                <div className="rounded-lg border border-[#d8d2c6] px-4 py-3">
                                    <input className="w-full bg-transparent font-['Public_Sans'] outline-none" type="email" id="register-email" placeholder="e.g. budi@wargareport.id" required />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-['IBM_Plex_Mono'] text-xs" htmlFor="register-phone">PHONE / WHATSAPP *</label>
                                <div className="rounded-lg border border-[#d8d2c6] px-4 py-3">
                                    <input className="w-full bg-transparent font-['Public_Sans'] outline-none" type="tel" id="register-phone" placeholder="+62 812-..." required />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-['IBM_Plex_Mono'] text-xs" htmlFor="register-nik">NIK</label>
                            <div className="rounded-lg border border-[#d8d2c6] px-4 py-3">
                                <input className="w-full bg-transparent font-['Public_Sans'] outline-none" type="text" id="register-nik" placeholder="16 digits for verified resident badge (e.g. 3174...)" maxLength={16} />
                            </div>
                            <span className="font-['Public_Sans'] text-xs">Used exclusively for verification under UU PDP and never shown to the public.</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-['IBM_Plex_Mono'] text-xs" htmlFor="register-password">PASSWORD *</label>
                            <div className="flex items-center gap-3 rounded-lg border border-[#d8d2c6] px-4 py-3">
                                <img src="/icons/i-lock.svg" alt="Icon Lock" />
                                <input className="w-full bg-transparent font-['Public_Sans'] outline-none" type="password" id="register-password" placeholder="Create a password" required />
                                <img className="cursor-pointer" src="/icons/i-eye.svg" alt="Icon Eye" />
                            </div>
                        </div>
                        <button type="submit" className="flex items-center justify-center gap-2 rounded-full bg-[rgba(15,107,79,1)] px-5 py-3 text-white font-['Public_Sans']">
                            <img src="/icons/i-check.svg" alt="Icon Check" />Create Account & Continue
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}