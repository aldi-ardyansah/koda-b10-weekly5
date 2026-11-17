import { Link } from "react-router";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function DetailReport() {
    return (
        <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
            <Nav />
            <main className="mx-auto mt-10 w-[90%] px-4 md:px-9">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <Link className="flex items-center gap-2 font-['Public_Sans'] text-xs font-semibold text-(--font-color-green) no-underline" to="/live-feed">
                            <img src="/icons/i-arrow-left-green.svg" alt="Icon Arrow Left" />Back to Live Feed
                        </Link>
                        <Link className="flex items-center gap-2 font-['Public_Sans'] text-xs font-semibold text-(--font-color-gray) no-underline" to="#">
                            <img src="/icons/i-share.svg" alt="Icon Share" />Share
                        </Link>
                    </div>
                    <div className="flex flex-col gap-8 lg:flex-row">
                        <div className="flex min-w-0 flex-7 flex-col gap-8">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="flex items-center gap-2 rounded-full bg-(--bg-color-orange-light) px-3 py-2 font-['Public_Sans'] text-xs font-medium text-(--font-color-orange)">
                                            <img src="/icons/i-search.svg" alt="" />In review
                                        </span>
                                        <span className="flex items-center gap-2 font-['IBM_Plex_Mono'] text-[11px] font-normal text-[var(--font-color-gray-light)]">
                                            <img src="/icons/i-clock.svg" alt="Icon Clock" />18h 59m left
                                        </span>
                                    </div>
                                    <Link className="flex items-center gap-2 self-start rounded-full border border-[var(--border-color-gray)] px-4 py-2 font-['Public_Sans'] text-xs font-semibold text-[var(--font-color-gray)] no-underline" to="#">
                                        <img src="/icons/i-thumbs-up.svg" alt="Icon Upvote" />Upvote <span>(148)</span>
                                    </Link>
                                </div>
                                <h1 className="font-['Fraunces'] text-[26px] font-semibold leading-tight text-[var(--font-color-black)] md:text-[32px]">PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya MRT</h1>
                                <p className="font-['Public_Sans'] text-[13px] font-normal leading-[1.7] text-[var(--font-color-gray)]">Clean drinking water is bursting through the sidewalk pavement outside Jl. Fatmawati Raya No. 42 (RT 04 / RW 07, Cilandak Barat) right in front of Cipete Raya MRT. Clean water has been flooding the roadway for 4 hours, causing motorbikes to slip.</p>
                                <div className="flex flex-col gap-4 border-y border-[var(--border-color-gray)] py-5">
                                    <h2 className="font-['IBM_Plex_Mono'] text-[10px] font-medium tracking-[0.1em] text-[var(--font-color-gray-light)]">Resolution Pipeline</h2>
                                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                                        <div className="flex flex-col gap-2 border-t-2 border-[var(--border-color-green)] pt-3">
                                            <span className="font-['IBM_Plex_Mono'] text-[11px] text-[var(--font-color-green)]">01</span>
                                            <span className="font-['Public_Sans'] text-xs font-semibold text-[var(--font-color-black)]">Submitted</span>
                                        </div>
                                        <div className="flex flex-col gap-2 border-t-2 border-[var(--border-color-green)] pt-3">
                                            <span className="font-['IBM_Plex_Mono'] text-[11px] text-[var(--font-color-green)]">02</span>
                                            <span className="font-['Public_Sans'] text-xs font-semibold text-[var(--font-color-black)]">Verified by WargaReport</span>
                                        </div>
                                        <div className="flex flex-col gap-2 border-t-2 border-[var(--border-color-gray)] pt-3 opacity-50">
                                            <span className="font-['IBM_Plex_Mono'] text-[11px] text-[var(--font-color-gray-light)]">03</span>
                                            <span className="font-['Public_Sans'] text-xs font-medium text-[var(--font-color-gray)]">Dispatched to Agency</span>
                                        </div>
                                        <div className="flex flex-col gap-2 border-t-2 border-[var(--border-color-gray)] pt-3 opacity-50">
                                            <span className="font-['IBM_Plex_Mono'] text-[11px] text-[var(--font-color-gray-light)]">04</span>
                                            <span className="font-['Public_Sans'] text-xs font-medium text-[var(--font-color-gray)]">Fixed & Verified</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1">
                                    <h2 className="font-['Fraunces'] text-xl font-semibold text-[var(--font-color-black)]">Evidence on File</h2>
                                    <p className="font-['Public_Sans'] text-xs text-[var(--font-color-gray-light)]">2 attachments (tap to expand)</p>
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="flex flex-col overflow-hidden rounded-[14px] border border-[var(--border-color-gray)]">
                                        <img className="block w-full border-b border-[var(--border-color-gray)]" src="/images/pam_water_pipeline_fracture.jpg" alt="Water pipeline fracture evidence" />
                                        <div className="flex flex-col gap-2 p-3">
                                            <h3 className="break-all font-['Public_Sans'] text-xs font-semibold text-[var(--font-color-black)]">pam_water_pipeline_fracture.jpg</h3>
                                            <span className="font-['IBM_Plex_Mono'] text-[10px] text-[var(--font-color-gray-light)]">IMAGE · 2.4 MB</span>
                                            <p className="font-['Public_Sans'] text-[11px] leading-relaxed text-[var(--font-color-gray)]">Water runoff flooding pedestrian sidewalk slabs and bike lane.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col overflow-hidden rounded-[14px] border border-[var(--border-color-gray)]">
                                        <div className="flex min-h-[150px] items-center justify-center gap-3 border-b border-[var(--border-color-gray)] bg-[var(--bg-color-body-card)] p-4">
                                            <img className="h-8 w-8" src="/icons/i-music.svg" alt="Icon Music" />
                                            <span className="font-['IBM_Plex_Mono'] text-[11px] text-[var(--font-color-gray)]">Audio clip · 0:34</span>
                                        </div>
                                        <div className="flex flex-col gap-2 p-3">
                                            <h3 className="break-all font-['Public_Sans'] text-xs font-semibold text-[var(--font-color-black)]">acoustic_pipe_pressure_sound.m4a</h3>
                                            <span className="font-['IBM_Plex_Mono'] text-[10px] text-[var(--font-color-gray-light)]">AUDIO · 1.1 MB</span>
                                            <p className="font-['Public_Sans'] text-[11px] leading-relaxed text-[var(--font-color-gray)]">Acoustic underground hissing recorded near customer meter vault.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1">
                                    <h2 className="font-['Fraunces'] text-xl font-semibold text-[var(--font-color-black)]">Action History</h2>
                                    <p className="font-['Public_Sans'] text-xs text-[var(--font-color-gray-light)]">Chronological updates from intake router and field teams</p>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex gap-3 border-l border-[var(--border-color-gray)] pb-6 pl-4">
                                        <div className="-ml-[25px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border-color-green-light)] bg-[var(--bg-color-green-light)]">
                                            <img src="/icons/i-user-green.svg" alt="Icon User" />
                                        </div>
                                        <div className="flex min-w-0 flex-1 flex-col gap-2">
                                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                                <h3 className="font-['Public_Sans'] text-[13px] font-semibold text-[var(--font-color-black)]">Report submitted via WargaReport intake</h3>
                                                <span className="flex items-center gap-1 self-start rounded-full bg-[var(--bg-color-blue-light)] px-2 py-1 font-['Public_Sans'] text-[10px] font-medium text-[var(--font-color-blue)]"><img src="/icons/i-clock.svg" alt="Icon Clock" />Submitted</span>
                                            </div>
                                            <p className="font-['Public_Sans'] text-[11px] text-[var(--font-color-gray)]">Aldi Ardyansah <span className="font-['IBM_Plex_Mono'] font-normal">· Nov 6, 05:09 PM GMT+7</span></p>
                                            <div className="font-['Public_Sans'] text-xs leading-relaxed text-[var(--font-color-gray-light)]">Citizen attached visual photo evidence and acoustic audio note.</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 border-l border-[var(--border-color-gray)] pb-6 pl-4">
                                        <div className="-ml-[25px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border-color-green-light)] bg-[var(--bg-color-green-light)]">
                                            <img src="/icons/i-settings-green.svg" alt="Icon Settings" />
                                        </div>
                                        <div className="flex min-w-0 flex-1 flex-col gap-2">
                                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                                <h3 className="font-['Public_Sans'] text-[13px] font-semibold text-[var(--font-color-black)]">Verified by WargaReport & dispatched to Perumda PAM JAYA</h3>
                                                <span className="flex items-center gap-1 self-start rounded-full bg-[var(--bg-color-green-light)] px-2 py-1 font-['Public_Sans'] text-[10px] font-medium text-[var(--font-color-green)]"><img src="/icons/i-inbox.svg" alt="Icon Inbox" />Received</span>
                                            </div>
                                            <p className="font-['Public_Sans'] text-[11px] text-[var(--font-color-gray)]">WargaReport Civic Router <span className="font-['IBM_Plex_Mono'] font-normal">· Nov 6, 05:12 PM GMT+7</span></p>
                                            <div className="font-['Public_Sans'] text-xs leading-relaxed text-[var(--font-color-gray-light)]">Priority: High. Clean water conservation target. 24h statutory countdown initiated.</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 border-l border-transparent pl-4">
                                        <div className="-ml-[25px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border-color-green-light)] bg-[var(--bg-color-green-light)]">
                                            <img src="/icons/i-shield-green.svg" alt="Icon Shield" />
                                        </div>
                                        <div className="flex min-w-0 flex-1 flex-col gap-2">
                                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                                <h3 className="font-['Public_Sans'] text-[13px] font-semibold text-[var(--font-color-black)]">Case accepted by Duty Triage Coordinator</h3>
                                                <span className="flex items-center gap-1 self-start rounded-full bg-[var(--bg-color-orange-light)] px-2 py-1 font-['Public_Sans'] text-[10px] font-medium text-[var(--font-color-orange)]"><img src="/icons/i-search.svg" alt="Icon Search" />In review</span>
                                            </div>
                                            <p className="font-['Public_Sans'] text-[11px] text-[var(--font-color-gray)]">Hendra Kurniawan <span className="font-['IBM_Plex_Mono'] font-normal">· Nov 6, 06:39 PM GMT+7</span></p>
                                            <div className="font-['Public_Sans'] text-xs leading-relaxed text-[var(--font-color-gray-light)]">Dispatched secondary valve isolation team from Cilandak maintenance station.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <aside className="flex min-w-0 flex-[3] flex-col">
                            <div className="flex flex-col gap-5 rounded-2xl border border-[var(--border-color-gray)] bg-[var(--bg-color-white)] p-5 md:p-6">
                                <div className="flex flex-col gap-2 border-b border-[var(--border-color-gray)] pb-4">
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] font-medium tracking-[0.08em] text-[var(--font-color-gray-light)]">Tracking Code</span>
                                    <h2 className="font-['IBM_Plex_Mono'] text-lg font-semibold text-[var(--font-color-green)]">CMP-2026-8841</h2>
                                </div>
                                <div className="flex flex-col gap-2 border-b border-[var(--border-color-gray)] pb-4">
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] font-medium tracking-[0.08em] text-[var(--font-color-gray-light)]">Assigned Authority</span>
                                    <p className="font-['Public_Sans'] text-[13px] text-[var(--font-color-black)]">Perumda PAM JAYA (Clean Drinking Water)</p>
                                </div>
                                <div className="flex flex-col gap-2 border-b border-[var(--border-color-gray)] pb-4">
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] font-medium tracking-[0.08em] text-[var(--font-color-gray-light)]">Category</span>
                                    <p className="font-['Public_Sans'] text-[13px] text-[var(--font-color-black)]">Water & Sewage</p>
                                </div>
                                <div className="flex flex-col gap-2 border-b border-[var(--border-color-gray)] pb-4">
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] font-medium tracking-[0.08em] text-[var(--font-color-gray-light)]">Location</span>
                                    <div className="flex items-start gap-2">
                                        <img className="mt-1 h-4 w-4 shrink-0" src="/icons/i-map-pin.svg" alt="Icon Location" />
                                        <div className="flex flex-col gap-1">
                                            <span className="font-['Public_Sans'] text-[13px] text-[var(--font-color-black)]">Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)</span>
                                            <span className="font-['Public_Sans'] text-[11px] text-[var(--font-color-gray-light)]">Cilandak Barat, Jakarta Selatan</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 border-b border-[var(--border-color-gray)] pb-4">
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] font-medium tracking-[0.08em] text-[var(--font-color-gray-light)]">Reported On</span>
                                    <p className="font-['IBM_Plex_Mono'] text-xs text-[var(--font-color-black)]">Nov 8, 2026</p>
                                </div>
                                <div className="flex flex-col gap-2 border-b border-[var(--border-color-gray)] pb-4">
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] font-medium tracking-[0.08em] text-[var(--font-color-gray-light)]">Reported By</span>
                                    <p className="font-['Public_Sans'] text-[13px] text-[var(--font-color-black)]">Aldi A.</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] font-medium tracking-[0.08em] text-[var(--font-color-gray-light)]">Field Officer</span>
                                    <p className="font-['Public_Sans'] text-[13px] text-[var(--font-color-black)]">Hendra Kurniawan</p>
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] leading-relaxed text-[var(--font-color-gray-light)]">Tim Reaksi Cepat PAM JAYA [PAM-JKT-044]</span>
                                </div>
                                <Link className="flex items-center justify-center rounded-full border border-[var(--border-color-green)] bg-[var(--bg-color-green)] px-4 py-3 text-center font-['Public_Sans'] text-xs font-semibold text-[var(--font-color-white)] no-underline" to="/topic">Report similar issue nearby</Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default DetailReport;