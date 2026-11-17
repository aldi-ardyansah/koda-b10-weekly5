import { Link } from "react-router";
import NavLogin from "../components/NavLogin";
import Footer from "../components/Footer";

function ListComplaint() {
    return (
        <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
            <NavLogin />
            <main className="mx-auto mt-10 w-[90%] px-4 md:px-9">
                <div className="flex flex-col gap-6 py-8">
                    <div className="flex flex-col gap-2">
                        <span className="font-['IBM_Plex_Mono'] text-[11px] font-medium tracking-[0.12em] text-(--font-color-green)">CITIZEN MANAGEMENT</span>
                        <h1 className="font-['Fraunces'] text-[32px] font-semibold text-(--font-color-dark-green)">Account & Case History</h1>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 border-b border-(--border-color-gray) py-3">
                        <Link to="/list-complaint" className="rounded-lg bg-(--bg-color-light-green) px-4 py-2 font-['Public_Sans'] text-sm font-semibold text-(--font-color-green)">My complaints</Link>
                        <Link to="/profile" className="rounded-lg px-4 py-2 font-['Public_Sans'] text-sm text-(--font-color-gray) hover:bg-(--bg-color-light-gray)">Profile</Link>
                        <Link to="/notification-settings" className="rounded-lg px-4 py-2 font-['Public_Sans'] text-sm text-(--font-color-gray) hover:bg-(--bg-color-light-gray)">Notifications</Link>
                        <Link to="/data-export" className="rounded-lg px-4 py-2 font-['Public_Sans'] text-sm text-(--font-color-gray) hover:bg-(--bg-color-light-gray)">Privacy & data</Link>
                        <Link to="/security" className="rounded-lg px-4 py-2 font-['Public_Sans'] text-sm text-(--font-color-gray) hover:bg-(--bg-color-light-gray)">Security</Link>
                    </div>
                    <div className="flex flex-col gap-5 pt-4">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <span className="font-['IBM_Plex_Mono'] text-xs font-medium tracking-[0.08em] text-(--font-color-gray)">YOUR TRACKED RECORDS (2)</span>
                            <Link to="/topic" className="flex items-center gap-2 rounded-lg bg-(--bg-color-green) px-4 py-2 font-['Public_Sans'] text-xs font-semibold text-white">
                                <img src="/icons/i-plus.svg" alt="Icon Plus" />File new complaint
                            </Link>
                        </div>
                        <div className="w-full overflow-x-auto overflow-y-hidden rounded-xl border border-(--border-color-gray)">
                            <div className="min-w-225">
                                <div className="grid grid-cols-[0.8fr_3fr_1.6fr_0.9fr_1.3fr_0.6fr] gap-3 bg-[rgba(244,239,228,1)] px-5 py-4">
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] font-medium text-[rgba(132,146,138,1)]">CASE ID</span>
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] font-medium text-[rgba(132,146,138,1)]">TITLE / LOCATION</span>
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] font-medium text-[rgba(132,146,138,1)]">AGENCY</span>
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] font-medium text-[rgba(132,146,138,1)]">STATUS</span>
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] font-medium text-[rgba(132,146,138,1)]">SLA TARGET</span>
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] font-medium text-[rgba(132,146,138,1)]">LAST UPDATE</span>
                                </div>
                                <div className="grid grid-cols-[0.8fr_3fr_1.6fr_0.9fr_1.3fr_0.6fr] items-start gap-3 border-b border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] px-5 py-5">
                                    <span className="wrap-break-word font-['IBM_Plex_Mono'] text-[11px] font-medium text-[rgba(15,107,79,1)]">CMP-2026-9472</span>
                                    <div className="flex flex-col gap-2">
                                        <span className="wrap-break-word font-['Public_Sans'] text-xs font-semibold leading-normal text-[rgba(19,35,27,1)]">Pohon tumbang di depan Kebun Binatang samping Kampus ITB</span>
                                        <span className="wrap-break-word font-['Public_Sans'] text-[11px] leading-normal text-[rgba(132,146,138,1)]">Jl. Tamansari depan Kebun Binatang</span>
                                    </div>
                                    <span className="wrap-break-word font-['Public_Sans'] text-xs leading-normal text-[rgba(76,91,82,1)]">Dinas Pertamanan dan Hutan Kota Bandung</span>
                                    <span className="flex w-fit items-center gap-1 rounded-full bg-[rgba(251,241,216,1)] px-2 py-1 font-['Public_Sans'] text-[10px] font-medium text-[rgba(150,104,15,1)]">
                                        <img src="/icons/i-clock.svg" alt="Icon Clock" />Submitted
                                    </span>
                                    <span className="wrap-break-word font-['IBM_Plex_Mono'] text-[10px] leading-normal text-[rgba(132,146,138,1)]">Awaiting verification</span>
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] text-[rgba(76,91,82,1)]">Oct 30</span>
                                </div>
                                <div className="grid grid-cols-[0.8fr_3fr_1.6fr_0.9fr_1.3fr_0.6fr] items-start gap-3 bg-[rgba(255,253,248,1)] px-5 py-5">
                                    <span className="wrap-break-word font-['IBM_Plex_Mono'] text-[11px] font-medium text-[rgba(15,107,79,1)]">CMP-2026-8841</span>
                                    <div className="flex flex-col gap-2">
                                        <span className="wrap-break-word font-['Public_Sans'] text-xs font-semibold leading-normal text-[rgba(19,35,27,1)]">PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya MRT</span>
                                        <span className="wrap-break-word font-['Public_Sans'] text-[11px] leading-normal text-[rgba(132,146,138,1)]">Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)</span>
                                    </div>
                                    <span className="wrap-break-word font-['Public_Sans'] text-xs leading-normal text-[rgba(76,91,82,1)]">Perumda PAM JAYA (Clean Drinking Water)</span>
                                    <span className="flex w-fit items-center gap-1 rounded-full bg-[rgba(251,241,216,1)] px-2 py-1 font-['Public_Sans'] text-[10px] font-medium text-[rgba(150,104,15,1)]">
                                        <img src="/icons/i-search.svg" alt="Icon Search" />In review
                                    </span>
                                    <span className="flex items-start gap-1 wrap-break-word font-['IBM_Plex_Mono'] text-[10px] leading-normal text-[rgba(163,63,49,1)]">
                                        <img className="mt-px shrink-0" src="/icons/i-warning-red.svg" alt="Icon Warning" />Breached by 64h 2m
                                    </span>
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] text-[rgba(76,91,82,1)]">Oct 29</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default ListComplaint;