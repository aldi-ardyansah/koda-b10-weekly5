import { Link } from "react-router";
import NavLogin from "../components/NavLogin";
import Footer from "../components/Footer";

export default function Proof() {
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
              <div className="flex items-center gap-4 rounded-lg bg-[rgba(15,107,79,1)] px-4 py-3 text-white">
                <span className="font-['IBM_Plex_Mono']">03</span>
                <span className="font-['Public_Sans']">Proof</span>
              </div>
              <div className="flex items-center gap-4 rounded-lg border border-[#e6f2eb] px-4 py-3">
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
              <span className="font-['IBM_Plex_Mono'] text-sm">STEP 03 OF 04</span>
              <h1 className="mt-2 font-['Fraunces'] text-4xl">Attach evidence</h1>
              <span className="mt-3 block font-['Public_Sans'] text-sm">Reports with photographic proof or audio notes are prioritized by field dispatchers.</span>
            </div>
            <div className="py-6">
              <div className="flex flex-col items-center rounded-lg border-2 border-dashed border-[rgba(15,107,79,1)] bg-[#e6f2eb] px-6 py-10 text-center">
                <img src="/icons/i-upload-green.svg" alt="Icon Upload" />
                <span className="mt-4 font-['Public_Sans']">Upload evidence files or use camera simulation</span>
                <span className="mt-2 text-sm font-['Public_Sans']">Images, audio voice notes, inspection video clips (JPG, MP4, M4A)</span>
                <div className="mt-6 flex flex-wrap justify-center gap-3 font-['Public_Sans']">
                  <span className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#d8d2c6] bg-[#fffdf8] px-4 py-3">
                    <img src="/icons/i-camera-black.svg" alt="Icon Camera" />Capture Photo
                  </span>
                  <span className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#d8d2c6] bg-[#fffdf8] px-4 py-3">
                    <img src="/icons/i-record-black.svg" alt="Icon Record" />Record Audio Memo
                  </span>
                  <span className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#d8d2c6] bg-[#fffdf8] px-4 py-3">
                    <img src="/icons/i-video-black.svg" alt="Icon Video" />Attach Video Clip
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <span className="font-['IBM_Plex_Mono'] text-sm">ATTACHED EVIDENCE (2)</span>
                  <span className="font-['Public_Sans'] text-sm">Click any card to inspect</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-4 rounded-lg border border-[#e4dfd4] p-4">
                    <img src="/images/evidence-1.svg" alt="Evidence 1" className="h-20 w-20 object-cover" />
                    <div className="min-w-0">
                      <span className="flex items-center justify-between gap-2 font-['Public_Sans'] text-sm">incident_capture_camera.jpg<img src="/icons/i-trashbin.svg" alt="Icon Trashbin" /></span>
                      <span className="mt-2 block font-['IBM_Plex_Mono'] text-xs">IMAGE · 2.4 MB</span>
                      <span className="mt-2 block font-['Public_Sans'] text-sm">Photographed live on-site by resident camera.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border border-[#e4dfd4] p-4">
                    <img src="/images/evidence-2.svg" alt="Evidence 2" className="h-20 w-20 object-cover" />
                    <div className="min-w-0">
                      <span className="flex items-center justify-between gap-2 font-['Public_Sans'] text-sm">quick_site_clip.mp4<img src="/icons/i-trashbin.svg" alt="Icon Trashbin" /></span>
                      <span className="mt-2 block font-['IBM_Plex_Mono'] text-xs">VIDEO · 4.8 MB</span>
                      <span className="mt-2 block font-['Public_Sans'] text-sm">12-second horizontal pan of incident.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-[#e4dfd4] pt-6">
              <Link to="/location" className="flex items-center gap-2 font-['Public_Sans']">
                <img src="/icons/i-arrow-left.svg" alt="Icon Arrow Left" />Back
              </Link>
              <Link to="/review" className="flex items-center gap-2 rounded-full bg-[rgba(15,107,79,1)] px-6 py-3 text-white font-['Public_Sans']">
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