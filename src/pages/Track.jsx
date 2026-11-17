import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Track() {
    return (
        <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
            <Nav />
            <main className="mx-auto mt-10 w-[90%] px-4 md:px-9">
                <div className="flex flex-col items-start gap-10 lg:flex-row pt-15">
                    <div className="w-full rounded-2xl border border-(--border-color-gray) bg-(--bg-color-white) p-8 lg:w-[56%]">
                        <span className="font-['IBM_Plex_Mono'] font-medium text-xs text-(--font-color-gray-light)">CITIZEN PORTAL</span>
                        <h1 className="mt-4 font-['Fraunces'] text-4xl font-semibold text-(--font-color-black) md:text-4xl">Track your complaint</h1>
                        <span className="mt-4 block leading-relaxed text-(--font-color-gray) text-sm">Enter your official case reference number to view real-time triage progress, inspector assignment, and official replies.</span>
                        <form className="mt-7 flex flex-col gap-2">
                            <label htmlFor="complaint-reference" className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray) font-medium">COMPLAINT REFERENCE ID *</label>
                            <input id="complaint-reference" className="w-full rounded-2xl border border-(--border-color-gray) bg-transparent p-2 font-['IBM_Plex_Mono'] text-xs text-(--font-color-black) outline-none placeholder:text-(--font-color-gray-light) focus:ring-2 focus:ring-(--font-color-green)" type="text" placeholder="e.g. CMP-2026-8841" />
                            <label htmlFor="verification-contact" className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray) font-medium mt-2">EMAIL ADDRESS OR PHONE (OPTIONAL VERIFICATION)</label>
                            <input id="verification-contact" className="w-full rounded-2xl border border-(--border-color-gray) bg-transparent p-2 font-['Public_Sans'] text-xs text-(--font-color-black) outline-none placeholder:text-(--font-color-gray-light) focus:ring-2 focus:ring-(--font-color-green)" type="email" placeholder="citizen@example.com" />
                            <button type="submit" className="mt-1 flex w-fit items-center justify-center gap-2 rounded-full bg-(--font-color-green) px-4 py-2 font-['Public_Sans'] text-xs font-semibold text-white">
                                <img src="/icons/i-search-white.svg" alt="Icon Search White" />
                                Lookup report status
                                <img src="/icons/i-arrow-right.svg" alt="Icon Arrow Right" />
                            </button>
                        </form>
                        <div className="mt-6 flex flex-wrap items-center gap-1 border-t border-(--border-color-gray) pt-5">
                            <span className="text-xs text-(--font-color-gray-light)">Try a sample record:</span>
                            <span className="cursor-pointer font-['IBM_Plex_Mono'] text-xs font-semibold text-(--font-color-green)">CMP-2026-8841</span>
                            <span className="font-['IBM_Plex_Mono'] text-xs text-(--font-color-gray-light)">·</span>
                            <span className="cursor-pointer font-['IBM_Plex_Mono'] text-xs font-semibold text-(--font-color-green)">CMP-2026-8794 (Resolved)</span>
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-6 pt-0 lg:w-[44%]">
                        <div className="flex gap-2 border-b border-(--border-color-gray) pb-7">
                            <div className="shrink-0 pt-0.5">
                                <img className="h-5 w-5" src="/icons/i-help-circle.svg" alt="Icon Help Circle" />
                            </div>
                            <div className="flex flex-col gap-2 text-sm leading-relaxed text-(--font-color-gray)">
                                <p>
                                    Your tracking ID was displayed on your confirmation receipt and sent to your registered email address immediately upon intake.
                                </p>
                                <p>
                                    Reports filed anonymously can only be tracked using this unique key; officers cannot retrieve records by name without it.
                                </p>
                            </div>
                        </div>
                        <div className="pt-0">
                            <a className="text-sm font-semibold text-(--font-color-green)" href="#">Lost your tracking ID? Search recent reports by location →</a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}