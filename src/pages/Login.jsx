function Login({ isOpen = false, onClose = () => { } }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-[rgba(19,35,27,0.55)] px-4 py-6">
      <div className="w-full max-w-[480px] rounded-xl border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-['Fraunces'] text-2xl font-semibold text-[rgba(19,35,27,1)]">Sign In to WargaReport</h2>
            <p className="mt-2 font-['Public_Sans'] text-sm text-[rgba(76,91,82,1)]">Sign in to lodge a complaint or upvote issues.</p>
          </div>
          <button type="button" onClick={onClose} className="shrink-0">
            <img src="/icons/i-close.svg" alt="Icon Close" />
          </button>
        </div>
        <div className="mt-6">
          <div className="flex border-b border-[rgba(215,215,205,1)]">
            <span className="border-b-2 border-[rgba(15,107,79,1)] px-3 py-3 font-['Public_Sans'] text-xs font-semibold text-[rgba(15,107,79,1)]">Sign In Existing Account</span>
            <a href="#" className="px-3 py-3 font-['Public_Sans'] text-xs text-[rgba(132,146,138,1)]">Register as Citizen</a>
          </div>
          <form className="mt-6 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-['IBM_Plex_Mono'] text-[10px] font-medium tracking-[0.08em] text-[rgba(76,91,82,1)]" htmlFor="login-email">EMAIL ADDRESS</label>
              <div className="flex items-center gap-3 rounded-lg border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] px-4 py-3">
                <img src="/icons/i-email.svg" alt="Icon Email" />
                <input className="w-full bg-transparent font-['Public_Sans'] text-sm text-[rgba(19,35,27,1)] outline-none placeholder:text-[rgba(132,146,138,1)]" type="email" id="login-email" placeholder="Enter your Email" required />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-['IBM_Plex_Mono'] text-[10px] font-medium tracking-[0.08em] text-[rgba(76,91,82,1)]" htmlFor="login-password">PASSWORD</label>
              <div className="flex items-center gap-3 rounded-lg border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] px-4 py-3">
                <img src="/icons/i-lock.svg" alt="Icon Lock" />
                <input className="w-full bg-transparent font-['Public_Sans'] text-sm text-[rgba(19,35,27,1)] outline-none placeholder:text-[rgba(132,146,138,1)]" type="password" id="login-password" placeholder="Enter your password" required />
                <img className="cursor-pointer" src="/icons/i-eye.svg" alt="Icon Eye" />
              </div>
            </div>
            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-[rgba(15,107,79,1)] px-5 py-3 font-['Public_Sans'] text-sm font-semibold text-white">
              Sign In<img src="/icons/i-arrow-right.svg" alt="Icon Arrow Right" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;