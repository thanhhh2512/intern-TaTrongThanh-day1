// src/app/page.js
import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";
import { signInAction, signOutAction } from "./server-actions";
import SignIn from "./sign-in";
import SignOut from "./sign-out";
import InsightList from "../app/components/insight/InsightList";
import PartnersPage from "./partners/page";

export default async function HomePage() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  return (
    <div className="flex flex-col items-center  min-h-screen bg-gray-100">
      <nav className="p-4 bg-gray-800 text-white w-full text-center">
        {isAuthenticated ? (
          <div className="flex justify-center space-x-4 gap-2">
            <span>Hello, {claims?.username}</span>
            <SignOut onSignOut={signOutAction} />
          </div>
        ) : (
          <SignIn onSignIn={signInAction} />
        )}
      </nav>

      <div className="content p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to The Farm</h1>
        <p className="mb-4">This is the home page.</p>
        <a
          href="/admin/checkin"
          className="text-blue-600 hover:underline mb-6 block"
        >
          Go to Admin Check-in
        </a>

        {isAuthenticated && (
          <>
            <div className="w-full max-w-4xl mt-8">
              <PartnersPage />
            </div>
            <div className="w-full max-w-4xl mt-8">
              <h2 className="text-xl font-semibold mb-4">Farm Insights</h2>
              <InsightList />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
