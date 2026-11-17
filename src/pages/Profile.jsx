import { Link } from "react-router";
import NavLogin from "../components/NavLogin";
import Footer from "../components/Footer";

function Profile() {
    return (
        <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
            <NavLogin />
            <main className="mx-auto mt-10 w-[90%] px-4 md:px-9">
                <div className="mx-auto max-w-[900px]">
                    <div className="mb-8">
                        <span className="font-['IBM_Plex_Mono'] text-xs tracking-wider text-[rgba(15,107,79,1)]">CITIZEN MANAGEMENT</span>
                        <h1 className="mt-2 font-['Fraunces'] text-3xl text-[rgba(19,35,27,1)]">Account & Case History</h1>
                    </div>
                    <div className="mb-8 flex flex-wrap items-center gap-7 border-b border-[rgba(215,215,205,1)]">
                        <Link to="/list-complaint" className="pb-4 font-['Public_Sans'] text-sm text-gray-500">My complaints</Link>
                        <Link to="/profile" className="border-b-2 border-[rgba(15,107,79,1)] pb-4 font-['Public_Sans'] text-sm font-semibold text-[rgba(15,107,79,1)]">Profile</Link>
                        <Link to="/notification-settings" className="pb-4 font-['Public_Sans'] text-sm text-gray-500">Notifications</Link>
                        <Link to="/data-export" className="pb-4 font-['Public_Sans'] text-sm text-gray-500">Privacy & data</Link>
                        <Link to="/security" className="pb-4 font-['Public_Sans'] text-sm text-gray-500">Security</Link>
                    </div>
                    <div className="flex justify-center">
                        <form className="w-full max-w-[685px] rounded-xl border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] p-8">
                            <div className="mb-7 flex flex-col gap-2">
                                <h2 className="font-['Fraunces'] text-2xl text-[rgba(19,35,27,1)]">Filer Identity & Preferences</h2>
                                <span className="font-['Public_Sans'] text-sm text-gray-500">Used to pre-fill future complaint forms and verify status inquiries.</span>
                            </div>
                            <div className="mb-7 flex items-center gap-5">
                                <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-[rgba(230,242,235,1)] font-['Public_Sans'] text-xl font-semibold text-[rgba(15,107,79,1)]">AA</div>
                                <div className="flex flex-col items-start gap-2">
                                    <span className="font-['Public_Sans'] text-sm font-semibold text-[rgba(19,35,27,1)]">Profile photo</span>
                                    <span className="font-['Public_Sans'] text-xs text-gray-500">JPG, PNG, or WebP. Square images work best.</span>
                                    <label htmlFor="profile-photo-upload" className="cursor-pointer rounded-md border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] px-4 py-2 font-['Public_Sans'] text-xs font-medium text-[rgba(15,107,79,1)]">Upload photo</label>
                                    <input type="file" id="profile-photo-upload" className="hidden" accept="image/jpeg,image/png,image/webp" />
                                </div>
                            </div>
                            <div className="mb-7 border-t border-[rgba(215,215,205,1)]"></div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="profile-name" className="font-['IBM_Plex_Mono'] text-[10px] font-medium tracking-wider text-gray-600">FULL LEGAL NAME</label>
                                    <input type="text" id="profile-name" className="w-full rounded-md border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] px-4 py-3 font-['Public_Sans'] text-sm outline-none focus:border-[rgba(15,107,79,1)]" placeholder="Your full name" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="profile-email" className="font-['IBM_Plex_Mono'] text-[10px] font-medium tracking-wider text-gray-600">PRIMARY NOTIFICATION EMAIL</label>
                                    <input type="email" id="profile-email" className="w-full rounded-md border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] px-4 py-3 font-['Public_Sans'] text-sm outline-none focus:border-[rgba(15,107,79,1)]" placeholder="your@email.com" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="profile-phone" className="font-['IBM_Plex_Mono'] text-[10px] font-medium tracking-wider text-gray-600">SMS CONTACT NUMBER</label>
                                    <input type="tel" id="profile-phone" className="w-full rounded-md border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] px-4 py-3 font-['Public_Sans'] text-sm outline-none focus:border-[rgba(15,107,79,1)]" placeholder="+62 8xx-xxxx-xxxx" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="profile-nik" className="font-['IBM_Plex_Mono'] text-[10px] font-medium tracking-wider text-gray-600">NIK</label>
                                    <input type="text" id="profile-nik" className="w-full rounded-md border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] px-4 py-3 font-['Public_Sans'] text-sm outline-none focus:border-[rgba(15,107,79,1)]" placeholder="Enter your NIK" inputMode="numeric" maxLength={16} />
                                </div>
                            </div>
                            <div className="mt-7 flex justify-end border-t border-[rgba(215,215,205,1)] pt-6">
                                <button type="submit" className="rounded-md bg-[rgba(15,107,79,1)] px-5 py-3 font-['Public_Sans'] text-sm font-semibold text-white hover:bg-[rgba(12,86,64,1)]">Save profile changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Profile;