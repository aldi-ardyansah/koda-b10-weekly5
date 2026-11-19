import { Link } from "react-router";
import NavLogin from "../components/NavLogin";
import Footer from "../components/Footer";

function NotificationSettings() {
  return (
    <div className="min-h-screen bg-(--bg-color-body) font-['Public_Sans']">
      <NavLogin />
      <main className="mx-auto mt-10 w-[90%] px-4 md:px-9">
        <div className="mx-auto max-w-900">
          <div className="mb-8">
            <span className="font-['IBM_Plex_Mono'] text-xs tracking-wider text-[rgba(15,107,79,1)]">CITIZEN MANAGEMENT</span>
            <h1 className="mt-2 font-['Fraunces'] text-3xl text-[rgba(19,35,27,1)]">Account & Case History</h1>
          </div>
          <div className="mb-8 flex flex-wrap items-center gap-7 border-b border-[rgba(215,215,205,1)]">
            <Link to="/list-complaint" className="pb-4 font-['Public_Sans'] text-sm text-gray-500">My complaints</Link>
            <Link to="/profile" className="pb-4 font-['Public_Sans'] text-sm text-gray-500">Profile</Link>
            <Link to="/notification-settings" className="border-b-2 border-[rgba(15,107,79,1)] pb-4 font-['Public_Sans'] text-sm font-semibold text-[rgba(15,107,79,1)]">Notifications</Link>
            <Link to="/data-export" className="pb-4 font-['Public_Sans'] text-sm text-gray-500">Privacy & data</Link>
            <Link to="/security" className="pb-4 font-['Public_Sans'] text-sm text-gray-500">Security</Link>
          </div>
          <div className="flex justify-center">
            <form className="w-full max-w-172 rounded-xl border border-[rgba(215,215,205,1)] bg-[rgba(255,253,248,1)] p-8">
              <div className="mb-7 flex flex-col gap-2">
                <h2 className="font-['Fraunces'] text-2xl text-[rgba(19,35,27,1)]">Dispatch Notification Preferences</h2>
                <span className="font-['Public_Sans'] text-sm text-gray-500">Control when municipal bureaus may send automated status alerts.</span>
              </div>
              <div className="flex flex-col">
                <label className="flex cursor-pointer items-start gap-4 border-b border-[rgba(215,215,205,1)] py-5">
                  <input type="checkbox" className="mt-1 size-4 accent-[rgba(15,107,79,1)]" name="email-alerts" />
                  <span className="flex flex-col gap-1">
                    <span className="font-['Public_Sans'] text-sm font-semibold text-[rgba(19,35,27,1)]">Email Status Transitions</span>
                    <span className="font-['Public_Sans'] text-sm text-gray-500">Receive an email whenever an inspector triages, assigns, or resolves your case.</span>
                  </span>
                </label>
                <label className="flex cursor-pointer items-start gap-4 border-b border-[rgba(215,215,205,1)] py-5">
                  <input type="checkbox" className="mt-1 size-4 accent-[rgba(15,107,79,1)]" name="sms-alerts" />
                  <span className="flex flex-col gap-1">
                    <span className="font-['Public_Sans'] text-sm font-semibold text-[rgba(19,35,27,1)]">Urgent SMS Alerts</span>
                    <span className="font-['Public_Sans'] text-sm text-gray-500">Receive text messages when emergency crews need physical gate access.</span>
                  </span>
                </label>
                <label className="flex cursor-pointer items-start gap-4 py-5">
                  <input type="checkbox" className="mt-1 size-4 accent-[rgba(15,107,79,1)]" name="weekly-digest" />
                  <span className="flex flex-col gap-1">
                    <span className="font-['Public_Sans'] text-sm font-semibold text-[rgba(19,35,27,1)]">Weekly Ward Resolution Digest</span>
                    <span className="font-['Public_Sans'] text-sm text-gray-500">Summary of all public infrastructure projects completed in your postal code.</span>
                  </span>
                </label>
              </div>
              <div className="mt-6 flex justify-end border-t border-[rgba(215,215,205,1)] pt-6">
                <button type="submit" className="rounded-md bg-[rgba(15,107,79,1)] px-5 py-3 font-['Public_Sans'] text-sm font-semibold text-white hover:bg-[rgba(12,86,64,1)]">Update alert preferences</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotificationSettings;