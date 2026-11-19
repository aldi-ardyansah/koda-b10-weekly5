import { Link } from "react-router";
import NavLogin from "../components/NavLogin";
import Footer from "../components/Footer";

export default function Review() {
  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <NavLogin />
      <main className="mx-auto mt-10 w-[90%] px-4 md:px-9">
        <div className="flex gap-9">
          <div className="w-1/4">
            <span className="font-['IBM_Plex_Mono'] text-sm">COMMUNITY INTAKE</span>
            <h2 className="mt-3 font-['Fraunces'] text-3xl">Report an Issue</h2>
            <span className="mt-2 block font-['Public_Sans'] text-sm">Public civic reporting for Indonesian municipal services.</span>
            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-4 rounded-lg border border-[#e6f2eb] px-4 py-3">
                <span className="font-['IBM_Plex_Mono']">01</span>
                <span className="font-['Public_Sans']">Topic</span>
                <img className="ml-auto" src="/icons/i-check-green.svg" alt="Icon Check" />
              </div>
              <div className="flex items-center gap-4 rounded-lg border border-[#e6f2eb] px-4 py-3">
                <span className="font-['IBM_Plex_Mono']">02</span>
                <span className="font-['Public_Sans']">Location</span>
                <img className="ml-auto" src="/icons/i-check-green.svg" alt="Icon Check" />
              </div>
              <div className="flex items-center gap-4 rounded-lg border border-[#e6f2eb] px-4 py-3">
                <span className="font-['IBM_Plex_Mono']">03</span>
                <span className="font-['Public_Sans']">Proof</span>
                <img className="ml-auto" src="/icons/i-check-green.svg" alt="Icon Check" />
              </div>
              <div className="flex items-center gap-4 rounded-lg bg-[rgba(15,107,79,1)] px-4 py-3 text-white">
                <span className="font-['IBM_Plex_Mono']">04</span>
                <span className="font-['Public_Sans']">Review & Send</span>
              </div>
            </div>
            <div className="mt-8 rounded-lg bg-[#e6f2eb] p-5">
              <span className="flex items-center gap-2 font-['Public_Sans']">
                <img src="/icons/i-shield.svg" alt="Icon Shield" />Independent Verification
              </span>
              <p className="mt-3 text-sm font-['Public_Sans']">Our verification desk checks each report and routes it to the municipal agency (Bina Marga, PAM JAYA, Dishub, DLH, Satpol PP, Citata). Resolution timestamps are tracked publicly.</p>
            </div>
            <Link to="/live-feed" className="mt-6 block font-['Public_Sans'] text-sm">Cancel and return to feed</Link>
          </div>
          <div className="w-3/4 rounded-xl border border-[#e4dfd4] bg-[#fffdf8] p-8">
            <div className="border-b border-[#e4dfd4] pb-6">
              <span className="font-['IBM_Plex_Mono'] text-sm">STEP 04 OF 04</span>
              <h1 className="mt-2 font-['Fraunces'] text-4xl">Report summary & declaration</h1>
              <span className="mt-3 block font-['Public_Sans'] text-sm">Review the report and choose notifications before final submission.</span>
            </div>
            <div className="space-y-5 py-6">
              <div className="flex flex-col gap-2">
                <span className="font-['IBM_Plex_Mono'] text-xs">CONCISE TITLE *</span>
                <input className="w-full rounded-lg border border-[#d8d2c6] bg-transparent px-4 py-3 font-['Public_Sans'] outline-none focus:border-[rgba(15,107,79,1)]" type="text" defaultValue="Pohon tumbang di depan Kebun Binatang samping Kampus ITB" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-['IBM_Plex_Mono'] text-xs">INCIDENT OBSERVATION DETAILS *</span>
                  <span className="font-['IBM_Plex_Mono'] text-xs">100 chars (min 15)</span>
                </div>
                <textarea className="min-h-32 w-full rounded-lg border border-[#d8d2c6] bg-transparent px-4 py-3 font-['Public_Sans'] outline-none focus:border-[rgba(15,107,79,1)]" defaultValue="Pohon tumbang sekitar lokasi mengganggu mobilitas masyarakat yang melintas, mohon untuk diperhatikan"></textarea>
              </div>
              <div className="flex items-center gap-4 rounded-lg border border-[#e6f2eb] bg-[#e6f2eb] p-4">
                <img src="/icons/i-lock-green.svg" alt="Icon Lock" />
                <div className="flex flex-1 flex-col gap-1">
                  <span className="font-['Public_Sans'] text-sm">Post anonymously on public feed</span>
                  <span className="font-['Public_Sans'] text-xs">Your name will be masked as Warga Anonim on open records.</span>
                </div>
                <input className="h-4 w-4 accent-[rgba(15,107,79,1)]" type="checkbox" />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <span className="font-['IBM_Plex_Mono'] text-xs">FILLER NAME *</span>
                  <input className="w-full rounded-lg border border-[#d8d2c6] bg-transparent px-4 py-3 font-['Public_Sans'] outline-none focus:border-[rgba(15,107,79,1)]" type="text" defaultValue="Aldi Ardyansah" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-['IBM_Plex_Mono'] text-xs">EMAIL FOR STATUS ALERTS *</span>
                  <input className="w-full rounded-lg border border-[#d8d2c6] bg-transparent px-4 py-3 font-['Public_Sans'] outline-none focus:border-[rgba(15,107,79,1)]" type="text" defaultValue="aldi@wargareport.id" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-['IBM_Plex_Mono'] text-xs">PHONE / WHATSAPP</span>
                  <input className="w-full rounded-lg border border-[#d8d2c6] bg-transparent px-4 py-3 font-['Public_Sans'] outline-none focus:border-[rgba(15,107,79,1)]" type="text" defaultValue="+62 812-9842-1054" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-['IBM_Plex_Mono'] text-xs">STATUS ALERT CHANNELS</span>
                  <div className="flex items-center gap-3">
                    <input className="h-4 w-4 accent-[rgba(15,107,79,1)]" type="checkbox" />
                    <span className="font-['Public_Sans'] text-sm">Email</span>
                    <input className="h-4 w-4 accent-[rgba(15,107,79,1)]" type="checkbox" />
                    <span className="font-['Public_Sans'] text-sm">SMS</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-[#e4dfd4] pt-5">
                <input className="mt-1 h-4 w-4 accent-[rgba(15,107,79,1)]" type="checkbox" />
                <span className="font-['Public_Sans'] text-sm">I confirm this incident was authentically observed on-site under Law No. 25/2009.</span>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-[#e4dfd4] pt-6">
              <Link to="/proof" className="flex items-center gap-2 font-['Public_Sans']">
                <img src="/icons/i-arrow-left.svg" alt="Icon Arrow Left" />Back
              </Link>
              <Link to="/receipt" className="flex items-center gap-2 rounded-full bg-[rgba(15,107,79,1)] px-6 py-3 text-white font-['Public_Sans']">
                Dispatch Report<img src="/icons/i-arrow-right.svg" alt="Icon Arrow Right" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}