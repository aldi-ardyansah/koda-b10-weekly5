import { Link } from "react-router";
import NavLogin from "../components/NavLogin";
import Footer from "../components/Footer";

function Notification() {
    return (
        <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
            <NavLogin />
            <main className="mx-auto mt-10 w-[90%] px-4 md:px-9">
                <div className="mx-auto max-w-[1100px]">
                    <div className="mb-8">
                        <span className="font-['IBM_Plex_Mono'] text-xs tracking-wider text-[rgba(15,107,79,1)]">ALERTS & ACTIVITY</span>
                        <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
                            <h1 className="font-['Fraunces'] text-3xl text-[rgba(19,35,27,1)]">Notifications</h1>
                            <span className="flex cursor-pointer items-center gap-2 font-['Public_Sans'] text-sm text-[rgba(15,107,79,1)]">
                                <img src="/icons/i-check-green.svg" alt="Icon Check" />Mark all as read
                            </span>
                        </div>
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <span className="font-['IBM_Plex_Mono'] text-[10px] tracking-wider text-gray-500">FILTER:</span>
                            <label className="cursor-pointer rounded-md border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] px-4 py-2 font-['Public_Sans'] text-xs">
                                <input type="radio" name="category" className="sr-only" defaultChecked />
                                All
                            </label>
                            <label className="cursor-pointer rounded-md border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] px-4 py-2 font-['Public_Sans'] text-xs">
                                <input type="radio" name="category" className="sr-only" />
                                Unread
                            </label>
                            <label className="cursor-pointer rounded-md border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] px-4 py-2 font-['Public_Sans'] text-xs">
                                <input type="radio" name="category" className="sr-only" />
                                Status
                            </label>
                            <label className="cursor-pointer rounded-md border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] px-4 py-2 font-['Public_Sans'] text-xs">
                                <input type="radio" name="category" className="sr-only" />
                                Replies
                            </label>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                        <div className="flex flex-col gap-3">
                            <div className="rounded-lg border border-[rgba(15,107,79,1)] bg-[rgba(230,242,235,1)] p-5">
                                <div className="mb-3 flex items-center justify-between gap-3">
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] text-[rgba(15,107,79,1)]">CMP-2026-9472</span>
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] text-gray-500">04:41 PM</span>
                                </div>
                                <div className="mb-4 font-['Public_Sans'] text-sm font-semibold text-[rgba(19,35,27,1)]">
                                    Report received — verification pending
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="font-['Public_Sans'] text-xs text-gray-500">Status Change</span>
                                    <span className="size-2 rounded-full bg-[rgba(15,107,79,1)]"></span>
                                </div>
                            </div>
                            <div className="rounded-lg border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] p-5">
                                <div className="mb-3 flex items-center justify-between gap-3">
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] text-gray-500">CMP-2026-8841</span>
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] text-gray-500">01:28 PM</span>
                                </div>
                                <div className="mb-4 font-['Public_Sans'] text-sm font-semibold text-[rgba(19,35,27,1)]">
                                    Status changed to In review
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="font-['Public_Sans'] text-xs text-gray-500">Status Change</span>
                                    <span className="size-2 rounded-full bg-[rgba(15,107,79,1)]"></span>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-lg border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)]">
                            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(215,215,205,1)] p-6">
                                <div className="flex flex-col gap-2">
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] tracking-wider text-gray-500">INCIDENT REFERENCE</span>
                                    <span className="font-['IBM_Plex_Mono'] text-sm font-medium text-[rgba(19,35,27,1)]">CMP-2026-9472</span>
                                </div>
                                <div className="flex items-center gap-2 rounded-md bg-[rgba(251,241,216,1)] px-3 py-2">
                                    <span className="flex size-7 items-center justify-center rounded-full bg-[rgba(255,253,248,1)]">
                                        <img src="/icons/i-clock.svg" alt="Icon Clock" />
                                    </span>
                                    <span className="font-['Public_Sans'] text-xs text-[rgba(19,35,27,1)]">Submitted</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="mb-5 flex flex-col gap-2">
                                    <h2 className="font-['Fraunces'] text-2xl text-[rgba(19,35,27,1)]">Report received — verification pending</h2>
                                    <span className="font-['IBM_Plex_Mono'] text-[10px] text-gray-500">Dispatched Oct 30, 04:41 PM GMT+7</span>
                                </div>
                                <p className="mb-6 font-['Public_Sans'] text-sm leading-relaxed text-gray-600">
                                    Your report CMP-2026-9472 is queued for WargaReport evidence verification. Proposed bureau: Dinas Pertamanan dan Hutan Kota DKI Jakarta. The SLA countdown starts once the report is routed.
                                </p>
                                <Link to="/track" className="flex w-fit items-center gap-3 rounded-md bg-[rgba(15,107,79,1)] px-5 py-3 font-['Public_Sans'] text-sm text-white">
                                    Open complaint tracking record
                                    <img src="/icons/i-arrow-right.svg" alt="Icon Arrow Right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Notification;