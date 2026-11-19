import { Link } from "react-router";
import NavLogin from "../components/NavLogin";
import Footer from "../components/Footer";

export default function Topic() {
  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <NavLogin />
      <main className="mx-auto mt-10 w-[90%] px-4 md:px-9">
        <div className="report flex flex-col gap-9 lg:flex-row">
          <div className="report-issue w-full lg:w-1/4">
            <span className="report-issue-upheading ibm-plex-mono text-xs">COMMUNITY INTAKE</span>
            <h2 className="report-issue-heading fraunces mt-2 text-3xl">Report an Issue</h2>
            <span className="report-issue-subheading public-sans mt-2 block text-sm">Public civic reporting for Indonesian municipal services.</span>
            <div className="report-issue-flow mt-8 flex flex-col gap-3">
              <span className="button-flow-green flex items-center gap-3 rounded-lg bg-[rgba(230,242,235,1)] px-4 py-3 text-[rgba(15,107,79,1)]">
                <span className="ibm-plex-mono report-issue-flow-number">01</span>
                <span className="public-sans report-issue-flow-text">Topic</span>
              </span>
              <span className="button-flow-transparent flex items-center gap-3 px-4 py-3">
                <span className="ibm-plex-mono report-issue-flow-number">02</span>
                <span className="public-sans report-issue-flow-text">Location</span>
              </span>
              <span className="button-flow-transparent flex items-center gap-3 px-4 py-3">
                <span className="ibm-plex-mono report-issue-flow-number">03</span>
                <span className="public-sans report-issue-flow-text">Proof</span>
              </span>
              <span className="button-flow-transparent flex items-center gap-3 px-4 py-3">
                <span className="ibm-plex-mono report-issue-flow-number">04</span>
                <span className="public-sans report-issue-flow-text">Review & Send</span>
              </span>
            </div>
            <div className="report-issue-independent mt-8 rounded-xl bg-[rgba(232,241,245,1)] p-5">
              <span className="report-issue-independent-heading public-sans flex items-center gap-2">
                <img src="/icons/i-shield.svg" alt="Icon Shield" />Independent Verification
              </span>
              <p className="report-issue-independent-text public-sans mt-3 text-sm">Our verification desk checks each report and routes it to the municipal agency (Bina Marga, PAM JAYA, Dishub, DLH, Satpol PP, Citata). Resolution timestamps are tracked publicly.</p>
            </div>
            <Link to="/live-feed" className="report-issue-cancel public-sans mt-6 block text-sm">Cancel and return to feed</Link>
          </div>
          <div className="report-fixing w-full lg:w-3/4">
            <div className="report-fixing-header mb-8">
              <span className="report-fixing-upheading ibm-plex-mono text-xs">STEP 01 OF 04</span>
              <h1 className="report-fixing-heading fraunces mt-2 text-3xl">What needs fixing?</h1>
              <span className="report-fixing-subheading public-sans mt-2 block text-sm">Select the municipal service category that best matches the issue observed.</span>
            </div>
            <div className="report-fixing-main grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="report-fixing-card relative cursor-pointer rounded-xl border border-[#e4dfd4] bg-[#fffdf8] p-5 has-[:checked]:border-[rgba(15,107,79,1)] has-[:checked]:bg-[rgba(230,242,235,1)]">
                <input type="radio" name="report-category" value="roads-transit" className="absolute right-4 top-4 accent-[rgba(15,107,79,1)]" />
                <div className="public-sans report-fixing-card-heading flex items-center gap-2 font-semibold">
                  <img src="/icons/i-warning-green.svg" alt="Icon Warning" />
                  Roads & Transit
                  <span className="report-fixing-card-heading-sla ibm-plex-mono ml-auto text-xs">48h SLA</span>
                </div>
                <span className="public-sans report-fixing-card-subheading mt-4 block text-sm">Pothole / Sidewalk (Trotoar)</span>
                <p className="public-sans report-fixing-card-text mt-2 text-sm">Potholes, broken sidewalk slabs, damaged drainage grates</p>
              </label>
              <label className="report-fixing-card relative cursor-pointer rounded-xl border border-[#e4dfd4] bg-[#fffdf8] p-5 has-[:checked]:border-[rgba(15,107,79,1)] has-[:checked]:bg-[rgba(230,242,235,1)]">
                <input type="radio" name="report-category" value="water-sewage" className="absolute right-4 top-4 accent-[rgba(15,107,79,1)]" />
                <div className="public-sans report-fixing-card-heading flex items-center gap-2 font-semibold">
                  <img src="/icons/i-water-green.svg" alt="Icon Water" />
                  Water & Sewage
                  <span className="report-fixing-card-heading-sla ibm-plex-mono ml-auto text-xs">24h SLA</span>
                </div>
                <span className="public-sans report-fixing-card-subheading mt-4 block text-sm">Water Burst / Pipa Bocor</span>
                <p className="public-sans report-fixing-card-text mt-2 text-sm">Pipeline bursts, flooding tap leaks, dry taps</p>
              </label>
              <label className="report-fixing-card relative cursor-pointer rounded-xl border border-[#e4dfd4] bg-[#fffdf8] p-5 has-[:checked]:border-[rgba(15,107,79,1)] has-[:checked]:bg-[rgba(230,242,235,1)]">
                <input type="radio" name="report-category" value="street-lighting" className="absolute right-4 top-4 accent-[rgba(15,107,79,1)]" />
                <div className="public-sans report-fixing-card-heading flex items-center gap-2 font-semibold">
                  <img src="/icons/i-lighting-green.svg" alt="Icon Lighting" />
                  Street Lighting
                  <span className="report-fixing-card-heading-sla ibm-plex-mono ml-auto text-xs">72h SLA</span>
                </div>
                <span className="public-sans report-fixing-card-subheading mt-4 block text-sm">Dark Street / PJU Padam</span>
                <p className="public-sans report-fixing-card-text mt-2 text-sm">Dark street lamps (PJU), damaged base poles, broken traffic signals</p>
              </label>
              <label className="report-fixing-card relative cursor-pointer rounded-xl border border-[#e4dfd4] bg-[#fffdf8] p-5 has-[:checked]:border-[rgba(15,107,79,1)] has-[:checked]:bg-[rgba(230,242,235,1)]">
                <input type="radio" name="report-category" value="sanitation-waste" className="absolute right-4 top-4 accent-[rgba(15,107,79,1)]" />
                <div className="public-sans report-fixing-card-heading flex items-center gap-2 font-semibold">
                  <img src="/icons/i-trashbin-green.svg" alt="Icon Trashbin" />
                  Sanitation & Waste
                  <span className="report-fixing-card-heading-sla ibm-plex-mono ml-auto text-xs">36h SLA</span>
                </div>
                <span className="public-sans report-fixing-card-subheading mt-4 block text-sm">Trash Pile / Sampah Liar</span>
                <p className="public-sans report-fixing-card-text mt-2 text-sm">Illegal dump spots in alleys, overflowing TPS bins, river refuse</p>
              </label>
              <label className="report-fixing-card relative cursor-pointer rounded-xl border border-[#e4dfd4] bg-[#fffdf8] p-5 has-[:checked]:border-[rgba(15,107,79,1)] has-[:checked]:bg-[rgba(230,242,235,1)]">
                <input type="radio" name="report-category" value="public-parks-trees" className="absolute right-4 top-4 accent-[rgba(15,107,79,1)]" />
                <div className="public-sans report-fixing-card-heading flex items-center gap-2 font-semibold">
                  <img src="/icons/i-tree-green.svg" alt="Icon Tree" />
                  Public Parks & Trees
                  <span className="report-fixing-card-heading-sla ibm-plex-mono ml-auto text-xs">48h SLA</span>
                </div>
                <span className="public-sans report-fixing-card-subheading mt-4 block text-sm">Hazardous Tree / Rawan Tumbang</span>
                <p className="public-sans report-fixing-card-text mt-2 text-sm">Falling branches (pohon rawan tumbang), RPTRA playground hazards</p>
              </label>
              <label className="report-fixing-card relative cursor-pointer rounded-xl border border-[#e4dfd4] bg-[#fffdf8] p-5 has-[:checked]:border-[rgba(15,107,79,1)] has-[:checked]:bg-[rgba(230,242,235,1)]">
                <input type="radio" name="report-category" value="noise-disturbance" className="absolute right-4 top-4 accent-[rgba(15,107,79,1)]" />
                <div className="public-sans report-fixing-card-heading flex items-center gap-2 font-semibold">
                  <img src="/icons/i-speaker-green.svg" alt="Icon Speaker" />
                  Noise & Disturbance
                  <span className="report-fixing-card-heading-sla ibm-plex-mono ml-auto text-xs">48h SLA</span>
                </div>
                <span className="public-sans report-fixing-card-subheading mt-4 block text-sm">Late-night Noise / Ketertiban</span>
                <p className="public-sans report-fixing-card-text mt-2 text-sm">Nocturnal construction past 22:00 WIB, sidewalk encroachment</p>
              </label>
              <label className="report-fixing-card relative cursor-pointer rounded-xl border border-[#e4dfd4] bg-[#fffdf8] p-5 has-[:checked]:border-[rgba(15,107,79,1)] has-[:checked]:bg-[rgba(230,242,235,1)]">
                <input type="radio" name="report-category" value="building-zoning" className="absolute right-4 top-4 accent-[rgba(15,107,79,1)]" />
                <div className="public-sans report-fixing-card-heading flex items-center gap-2 font-semibold">
                  <img src="/icons/i-building-green.svg" alt="Icon Building" />
                  Building & Zoning
                  <span className="report-fixing-card-heading-sla ibm-plex-mono ml-auto text-xs">72h SLA</span>
                </div>
                <span className="public-sans report-fixing-card-subheading mt-4 block text-sm">Unsafe Construction / Bangunan</span>
                <p className="public-sans report-fixing-card-text mt-2 text-sm">Unsafe scaffolding, structural hazards, building boundary violations</p>
              </label>
            </div>
            <div className="report-fixing-footer mt-8 flex items-center justify-between border-t border-[#e4dfd4] pt-6">
              <Link to="/live-feed" className="report-fixing-footer-cancel public-sans text-sm">Cancel</Link>
              <Link to="/location" className="report-fixing-footer-continue public-sans flex items-center gap-2 rounded-full bg-[rgba(15,107,79,1)] px-6 py-3 text-sm text-white">
                Continue<img src="/icons/i-arrow-right.svg" alt="Icon Arrow Right" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}