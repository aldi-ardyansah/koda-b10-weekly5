import { Link } from "react-router";
import NavLogin from "../components/NavLogin";
import Footer from "../components/Footer";

export default function Security() {
    return (
        <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
            <NavLogin />
            <main className="mx-auto mt-10 w-[90%] px-4 md:px-9">
                <div className="mx-auto max-w-171.25">
                    <div className="mb-8">
                        <span className="font-['IBM_Plex_Mono'] text-xs">CITIZEN MANAGEMENT</span>
                        <h1 className="mt-2 font-['Fraunces'] text-4xl">Account & Case History</h1>
                    </div>
                    <div className="flex flex-wrap border-b border-[#d8d2c6]">
                        <Link to="/list-complaint" className="px-4 py-3 font-['Public_Sans'] text-sm">My complaints</Link>
                        <Link to="/profile" className="px-4 py-3 font-['Public_Sans'] text-sm">Profile</Link>
                        <Link to="/notification-settings" className="px-4 py-3 font-['Public_Sans'] text-sm">Notifications</Link>
                        <Link to="/data-export" className="px-4 py-3 font-['Public_Sans'] text-sm">Privacy & data</Link>
                        <Link to="/security" className="border-b-2 border-[rgba(15,107,79,1)] px-4 py-3 font-['Public_Sans'] text-sm text-[rgba(15,107,79,1)]">Security</Link>
                    </div>
                    <div className="mt-6 rounded-xl border border-[#e4dfd4] bg-[#fffdf8] p-8">
                        <form>
                            <div className="border-b border-[#e4dfd4] pb-6">
                                <h2 className="font-['Fraunces'] text-2xl">Security</h2>
                                <span className="mt-2 block font-['Public_Sans'] text-sm">Change the password used to sign in to your WargaReport account.</span>
                            </div>
                            <div className="flex flex-col gap-6 py-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="security-current-password" className="font-['IBM_Plex_Mono'] text-xs">CURRENT PASSWORD</label>
                                    <div className="flex items-center rounded-lg border border-[#d8d2c6] px-4 py-3 focus-within:border-[rgba(15,107,79,1)]">
                                        <input type="password" id="security-current-password" className="w-full bg-transparent font-['Public_Sans'] outline-none" placeholder="Enter current password" />
                                        <button type="button" className="shrink-0">
                                            <img src="/icons/i-eye.svg" alt="Icon Eye" />
                                        </button>
                                    </div>
                                    <span className="font-['Public_Sans'] text-xs">Required to confirm any password change.</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="security-new-password" className="font-['IBM_Plex_Mono'] text-xs">NEW PASSWORD</label>
                                    <div className="flex items-center rounded-lg border border-[#d8d2c6] px-4 py-3 focus-within:border-[rgba(15,107,79,1)]">
                                        <input type="password" id="security-new-password" className="w-full bg-transparent font-['Public_Sans'] outline-none" placeholder="At least 8 characters" />
                                        <button type="button" className="shrink-0">
                                            <img src="/icons/i-eye.svg" alt="Icon Eye" />
                                        </button>
                                    </div>
                                    <span className="font-['Public_Sans'] text-xs">Use at least 8 characters, including a letter and a number.</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="security-confirm-password" className="font-['IBM_Plex_Mono'] text-xs">CONFIRM NEW PASSWORD</label>
                                    <div className="flex items-center rounded-lg border border-[#d8d2c6] px-4 py-3 focus-within:border-[rgba(15,107,79,1)]">
                                        <input type="password" id="security-confirm-password" className="w-full bg-transparent font-['Public_Sans'] outline-none" placeholder="Re-enter new password" />
                                        <button type="button" className="shrink-0">
                                            <img src="/icons/i-eye.svg" alt="Icon Eye" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end border-t border-[#e4dfd4] pt-6">
                                <button type="submit" className="rounded-full bg-[rgba(15,107,79,1)] px-6 py-3 font-['Public_Sans'] text-sm text-white">Update password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}