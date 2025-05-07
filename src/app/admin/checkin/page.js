import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "../../../logto";
import { redirect } from "next/navigation";
import Link from "next/link";
import ViewDashboardButton from "../../components/button/ViewDashBoard";

export default async function AdminCheckinPage() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  if (!isAuthenticated) {
    redirect("/api/logto/sign-in");
  }

  const roles = claims?.username || [];
  const isAdmin = roles.includes("retailer_admin");

  console.log("User claims:", claims, isAuthenticated);
  console.log("check: ", !isAdmin);
  if (!isAdmin) {
    return <p>🚫 You do not have permission to view this page.</p>;
  }
  const redirectPath = () => {
    redirect("/stats");
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/admin"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Admin
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500 dark:text-gray-400">Check-in</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Main Content */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Admin Check-in
          </h1>
          <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-200 rounded-full">
            Active Session
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Info Card */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              User Information
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  User ID
                </p>
                <p className="text-gray-900 dark:text-white">
                  {claims?.sub || "N/A"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Roles
                </p>
                <p className="text-gray-900 dark:text-white">
                  {claims?.roles?.join(", ") || "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <ViewDashboardButton />
              <button className="w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Start New Session
              </button>
              <Link
                href="/"
                className="block w-full px-4 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
