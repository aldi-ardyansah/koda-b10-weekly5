import { Link } from "react-router";

export default function Register({ isOpen = false, onClose = () => { } }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-2000 flex items-center justify-center bg-[rgba(19,35,27,0.55)] px-4 py-6">
      <div className="w-full max-w-150 max-h-[90vh] overflow-y-auto rounded-2xl border border-(--border-color-gray-light) bg-(--bg-color-white) p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-['Fraunces'] text-2xl font-semibold text-(--font-color-black)">Register Citizen Account</h2>
            <p className="mt-2 font-['Public_Sans'] text-sm text-(--font-color-gray)">Sign in to lodge a complaint or upvote issues.</p>
          </div>
          <button type="button" onClick={onClose} className="shrink-0 cursor-pointer">
            <img src="/icons/i-close.svg" alt="Icon Close" />
          </button>
        </div>
        <div className="mt-6">
          <div className="flex border-b border-(--border-color-gray-light)">
            <Link to="/login" className="flex-1 px-4 py-3 text-center font-['Public_Sans'] text-xs text-(--font-color-gray-light)">
              Sign In Existing Account
            </Link>
            <span className="flex-1 border-b-2 border-(--border-color-green) px-4 py-3 text-center font-['Public_Sans'] text-xs font-semibold text-(--font-color-green)">
              Register as Citizen
            </span>
          </div>
          <form className="mt-6 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray)" htmlFor="register-name">FULL NAME (NAMA LENGKAP) *</label>
              <div className="flex items-center gap-3 rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) px-4 py-3 focus-within:border-(--border-color-green)">
                <img src="/icons/i-user.svg" alt="Icon User" />
                <input className="w-full bg-transparent font-['Public_Sans'] text-sm text-(--font-color-black) outline-none placeholder:text-(--font-color-gray-light)" type="text" id="register-name" placeholder="e.g. Budi Santoso" required />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray)" htmlFor="register-email">EMAIL ADDRESS *</label>
                <div className="rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) px-4 py-3 focus-within:border-(--border-color-green)">
                  <input className="w-full bg-transparent font-['Public_Sans'] text-sm text-(--font-color-black) outline-none placeholder:text-(--font-color-gray-light)" type="email" id="register-email" placeholder="e.g. budi@wargareport.id" required />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray)" htmlFor="register-phone">PHONE / WHATSAPP *</label>
                <div className="rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) px-4 py-3 focus-within:border-(--border-color-green)">
                  <input className="w-full bg-transparent font-['Public_Sans'] text-sm text-(--font-color-black) outline-none placeholder:text-(--font-color-gray-light)" type="tel" id="register-phone" placeholder="+62 812-..." required />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray)" htmlFor="register-nik">NIK</label>
              <div className="rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) px-4 py-3 focus-within:border-(--border-color-green)">
                <input className="w-full bg-transparent font-['Public_Sans'] text-sm text-(--font-color-black) outline-none placeholder:text-(--font-color-gray-light)" type="text" id="register-nik" placeholder="16 digits for verified resident badge (e.g. 3174...)" maxLength={16} />
              </div>
              <span className="font-['Public_Sans'] text-xs text-(--font-color-gray-light)">Used exclusively for verification under UU PDP and never shown to the public.</span>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-wider text-(--font-color-gray)" htmlFor="register-password">PASSWORD *</label>
              <div className="flex items-center gap-3 rounded-xl border border-(--border-color-gray-light) bg-(--bg-color-white) px-4 py-3 focus-within:border-(--border-color-green)">
                <img src="/icons/i-lock.svg" alt="Icon Lock" />
                <input className="w-full bg-transparent font-['Public_Sans'] text-sm text-(--font-color-black) outline-none placeholder:text-(--font-color-gray-light)" type="password" id="register-password" placeholder="Create a password" required />
                <img className="cursor-pointer" src="/icons/i-eye.svg" alt="Icon Eye" />
              </div>
            </div>
            <button type="submit" className="flex items-center justify-center gap-2 rounded-full bg-(--bg-color-green) px-5 py-3 font-['Public_Sans'] text-sm font-semibold text-(--font-color-white) hover:opacity-90">
              <img src="/icons/i-check.svg" alt="Icon Check" />Create Account & Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}