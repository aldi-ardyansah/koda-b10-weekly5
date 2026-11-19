import { Link } from "react-router";
import NavLogin from "../components/NavLogin";
import Footer from "../components/Footer";

function DataExport() {
  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <NavLogin />
      <main className="mx-auto mt-10 w-[90%] px-4 md:px-9">
        <div className="flex w-full flex-col">
          <div className="flex flex-col gap-2">
            <span className="font-['IBM_Plex_Mono'] text-[11px] font-medium tracking-[0.12em] text-[rgba(150,150,140,1)]">CITIZEN MANAGEMENT</span>
            <h1 className="font-['Fraunces'] text-[28px] font-semibold text-[rgba(20,35,29,1)] md:text-4xl">Account & Case History</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2 border-b border-[rgba(220,215,204,1)] py-3">
            <Link to="/list-complaint" className="rounded-full px-3 py-2.5 font-['Public_Sans'] text-xs font-medium text-[rgba(100,105,99,1)] md:text-[13px]">My complaints</Link>
            <Link to="/profile" className="rounded-full px-3 py-2.5 font-['Public_Sans'] text-xs font-medium text-[rgba(100,105,99,1)] md:text-[13px]">Profile</Link>
            <Link to="/notification-settings" className="rounded-full px-3 py-2.5 font-['Public_Sans'] text-xs font-medium text-[rgba(100,105,99,1)] md:text-[13px]">Notifications</Link>
            <Link to="/data-export" className="flex items-center justify-center rounded-full bg-[rgba(15,107,79,1)] px-3 py-2 font-['Public_Sans'] text-xs font-medium text-white md:px-4 md:py-2.5 md:text-[13px]">Privacy & data</Link>
            <Link to="/security" className="rounded-full px-3 py-2.5 font-['Public_Sans'] text-xs font-medium text-[rgba(100,105,99,1)] md:text-[13px]">Security</Link>
          </div>
          <div className="pt-4 md:pt-5">
            <div className="flex w-full max-w-171.25 flex-col rounded-2xl border border-[rgba(220,215,204,1)] bg-[rgba(255,253,248,1)] p-4 md:p-6">
              <div className="flex flex-col gap-1">
                <h2 className="font-['Fraunces'] text-lg font-semibold text-[rgba(20,35,29,1)] md:text-xl">Privacy Rights & Data Portability</h2>
                <span className="font-['Public_Sans'] text-xs font-normal text-[rgba(150,150,140,1)]">Review personal records retained under municipal open data laws.</span>
              </div>
              <span className="pt-4 font-['Public_Sans'] text-[11px] font-normal leading-[1.6] text-[rgba(100,105,99,1)] md:text-xs">Under Indonesian Law No. 27/2022 on Personal Data Protection (UU PDP) and Law No. 14/2008 on Public Information Openness (UU KIP), personal citizen identifiers are strictly segregated from public registers.</span>
              <div className="mt-4 flex flex-col gap-3 rounded-xl border border-dashed border-[rgba(220,215,204,1)] bg-[rgba(244,239,228,1)] p-3 md:p-4">
                <span className="font-['Public_Sans'] text-[13px] font-semibold text-[rgba(20,35,29,1)]">Download your case archive</span>
                <span className="font-['Public_Sans'] text-[11px] font-normal leading-[1.6] text-[rgba(150,150,140,1)] md:text-xs">Export all submitted complaints, attached media metadata, and officer replies as standard JSON.</span>
                <a href="#" className="flex w-fit items-center gap-2 rounded-full border border-[rgba(15,107,79,1)] bg-[rgba(15,107,79,1)] px-4 py-2 font-['Public_Sans'] text-xs font-semibold text-white">
                  <span className="flex items-center justify-center"><img src="/icons/i-download.svg" alt="Icon Download" /></span>Download JSON archive
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DataExport;