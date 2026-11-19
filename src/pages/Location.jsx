import { Link } from "react-router";
import NavLogin from "../components/NavLogin";
import Footer from "../components/Footer";

function Location() {
  const locations = [
    "Jl. Dago",
    "Institut Teknologi Bandung (ITB)",
    "Simpang Dago",
    "Pasar Dago",
    "Jl. Ir. H. Juanda"
  ];

  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <NavLogin />
      <main className="mx-auto mt-10 w-[90%] px-4 md:px-9">
        <div className="flex flex-col gap-8 py-8 md:flex-row md:gap-9">
          <div className="flex w-full flex-col md:w-1/4">
            <span className="font-['IBM_Plex_Mono'] text-[10px] font-medium tracking-[0.12em] text-[rgba(15,107,79,1)]">COMMUNITY INTAKE</span>
            <h2 className="mt-2 font-['Fraunces'] text-[28px] font-semibold text-[rgba(19,35,27,1)]">Report an Issue</h2>
            <span className="mt-2 font-['Public_Sans'] text-xs leading-[1.6] text-[rgba(76,91,82,1)]">Public civic reporting for Indonesian municipal services.</span>
            <div className="mt-7 flex flex-col gap-2">
              <div className="flex items-center gap-3 rounded-lg px-3 py-3">
                <span className="font-['IBM_Plex_Mono'] text-xs text-[rgba(132,146,138,1)]">01</span>
                <span className="flex-1 font-['Public_Sans'] text-sm text-[rgba(19,35,27,1)]">Topic</span>
                <img className="h-4 w-4" src="/icons/i-check-green.svg" alt="Icon Check" />
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-[rgba(15,107,79,1)] px-3 py-3">
                <span className="font-['IBM_Plex_Mono'] text-xs text-white">02</span>
                <span className="flex-1 font-['Public_Sans'] text-sm font-medium text-white">Location</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg px-3 py-3">
                <span className="font-['IBM_Plex_Mono'] text-xs text-[rgba(132,146,138,1)]">03</span>
                <span className="font-['Public_Sans'] text-sm text-[rgba(76,91,82,1)]">Proof</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg px-3 py-3">
                <span className="font-['IBM_Plex_Mono'] text-xs text-[rgba(132,146,138,1)]">04</span>
                <span className="font-['Public_Sans'] text-sm text-[rgba(76,91,82,1)]">Review & Send</span>
              </div>
            </div>
            <div className="mt-7 rounded-lg border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] p-4">
              <span className="flex items-center gap-2 font-['Public_Sans'] text-xs font-semibold text-[rgba(15,107,79,1)]">
                <img src="/icons/i-shield.svg" alt="Icon Shield" />Independent Verification
              </span>
              <p className="mt-3 font-['Public_Sans'] text-xs leading-[1.7] text-[rgba(76,91,82,1)]">Our verification desk checks each report and routes it to the municipal agency (Bina Marga, PAM JAYA, Dishub, DLH, Satpol PP, Citata). Resolution timestamps are tracked publicly.</p>
            </div>
            <Link className="mt-5 font-['Public_Sans'] text-xs text-[rgba(132,146,138,1)] underline" to="/live-feed">Cancel and return to feed</Link>
          </div>
          <div className="w-full rounded-xl border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] p-5 md:w-3/4 md:p-8">
            <div className="flex flex-col gap-2 border-b border-[rgba(215,215,205,1)] pb-6">
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-medium tracking-[0.12em] text-[rgba(15,107,79,1)]">STEP 02 OF 04</span>
              <h1 className="font-['Fraunces'] text-[27px] font-semibold text-[rgba(19,35,27,1)]">Where is it located?</h1>
              <span className="font-['Public_Sans'] text-xs leading-[1.6] text-[rgba(76,91,82,1)]">Provide street address, RT/RW, or notable landmark for inspection crews.</span>
            </div>
            <div className="flex flex-col gap-4 py-6">
              <label className="font-['IBM_Plex_Mono'] text-[10px] font-medium tracking-[0.08em] text-[rgba(76,91,82,1)]">KELURAHAN / KECAMATAN & WILAYAH</label>
              <select className="w-full rounded-lg border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] px-4 py-3 font-['Public_Sans'] text-sm text-[rgba(19,35,27,1)] outline-none focus:border-[rgba(15,107,79,1)]">
                <option className="font-['Public_Sans']">Coblong</option>
              </select>
              <span className="mt-2 font-['IBM_Plex_Mono'] text-[10px] font-medium tracking-[0.08em] text-[rgba(76,91,82,1)]">COMMON AREAS IN COBLONG · KOTA BANDUNG</span>
              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <label key={location} className="cursor-pointer rounded-full border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] px-3 py-2 font-['Public_Sans'] text-xs text-[rgba(76,91,82,1)] transition-colors has-checked:border-[rgba(15,107,79,1)] has-checked:bg-[rgba(230,242,235,1)] has-checked:text-[rgba(15,107,79,1)]">
                    <input className="hidden" type="radio" name="location-chip" value={location} />
                    {location}
                  </label>
                ))}
              </div>
              <label className="mt-3 font-['IBM_Plex_Mono'] text-[10px] font-medium tracking-[0.08em] text-[rgba(76,91,82,1)]">STREET ADDRESS, RT/RW, OR LANDMARK *</label>
              <input className="w-full rounded-lg border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] px-4 py-3 font-['Public_Sans'] text-sm text-[rgba(19,35,27,1)] outline-none focus:border-[rgba(15,107,79,1)]" type="text" defaultValue="Jl. Tamansari depan Kebun Binatang" />
              <div className="flex flex-wrap items-center gap-3 rounded-lg bg-[rgba(244,239,228,1)] px-4 py-3">
                <img src="/icons/i-map-pin.svg" alt="" />
                <span className="font-['Public_Sans'] text-xs font-medium text-[rgba(15,107,79,1)]">Coordinates auto-pinned</span>
                <span className="font-['IBM_Plex_Mono'] text-[10px] text-[rgba(132,146,138,1)]">6.2088° S, 106.8456° E (WIB)</span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-3 border-t border-[rgba(215,215,205,1)] pt-5 sm:flex-row">
              <Link className="flex items-center justify-center gap-2 rounded-lg border border-[rgba(215,215,205,1)] px-5 py-3 font-['Public_Sans'] text-xs font-medium text-[rgba(76,91,82,1)]" to="/topic">
                <img src="/icons/i-arrow-left.svg" alt="Icon Arrow Left" />Back
              </Link>
              <Link className="flex items-center justify-center gap-2 rounded-lg bg-[rgba(15,107,79,1)] px-5 py-3 font-['Public_Sans'] text-xs font-semibold text-white" to="/proof">
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

export default Location;