import { Link } from "react-router";
import NavLogin from "../components/NavLogin";
import Footer from "../components/Footer";

export default function Receipt() {
  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <NavLogin />
      <main className="mx-auto mt-10 w-[90%] px-4 md:px-9">
        <div className="mx-auto w-[60%] rounded-xl border border-[#e4dfd4] bg-[#fffdf8] p-8">
          <div className="border-b border-[#e4dfd4] pb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 rounded-full bg-[#e6f2eb] px-4 py-2 font-['Public_Sans']">
                <img src="/icons/i-clock.svg" alt="Icon Clock" />
                Submitted
              </div>
              <span className="font-['IBM_Plex_Mono'] text-sm">Logged 04:41 PM</span>
            </div>
            <span className="mt-8 block font-['IBM_Plex_Mono'] text-xs">OFFICIAL TRACKING REFERENCE</span>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-['IBM_Plex_Mono'] text-3xl">CMP-2026-9472</span>
              <span className="cursor-pointer">
                <img src="/icons/i-copy.svg" alt="Icon Copy" />
              </span>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <span className="font-['Public_Sans']">Pohon tumbang di depan Kebun Binatang samping Kampus ITB</span>
              <span className="font-['IBM_Plex_Mono'] text-xs">Dinas Pertamanan dan Hutan Kota · Jl. Tamansari depan Kebun Binatang</span>
            </div>
          </div>
          <div className="py-6">
            <span className="font-['Fraunces'] text-2xl">What happens next</span>
            <ol className="mt-5 list-decimal space-y-4 pl-6 font-['IBM_Plex_Mono']">
              <li className="pl-2 font-['Public_Sans'] text-sm">Your report is awaiting evidence verification. Proposed bureau: <span className="font-bold">Dinas Pertamanan dan Hutan Kota</span>.</li>
              <li className="pl-2 font-['Public_Sans'] text-sm">A duty inspector will assess site urgency within the target <span className="font-bold">48-hour SLA window</span> once routed.</li>
              <li className="pl-2 font-['Public_Sans'] text-sm">Status transitions and official statements will appear directly on your tracking page.</li>
            </ol>
          </div>
          <div className="flex flex-wrap items-center gap-4 border-t border-[#e4dfd4] pt-6">
            <Link to="/track" className="flex items-center gap-2 rounded-full bg-[rgba(15,107,79,1)] px-5 py-3 text-white font-['Public_Sans']">
              Track report status<img src="/icons/i-arrow-right.svg" alt="Icon Arrow Right" />
            </Link>
            <a href="#" className="flex items-center gap-2 rounded-full border border-[#d8d2c6] px-5 py-3 font-['Public_Sans']">
              <img src="/icons/i-print.svg" alt="Icon Print" />Print receipt
            </a>
            <Link to="/live-feed" className="font-['Public_Sans']">Back to feed</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}