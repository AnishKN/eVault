import { NavLink } from "react-router-dom";

const SelectionAuth = () => {

  return (
    <div className="min-h-screen flex justify-center items-center gap-8 bg-gray-300 dark:bg-gray-800">

          {/* user card */}
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Users
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Accessible to law students and the public, this module offers easy browsing and retrieval of legal documents and information. Users can access relevant legal resources.
              </p>
              <NavLink to='/userRegister'>
                    <span
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Register here
                  </span>
                  </NavLink>
            </div>
          </div>

          {/* lawyer card */}
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Lawyers
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Tailored for legal professionals, this module simplifies document management, enabling lawyers to upload and organize legal files efficiently.
              </p>
              <NavLink to='/lawyerRegister'>
                    <span
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Register here
                  </span>
                  </NavLink>
            </div>
          </div>

          {/* admin card */}
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Admin
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Serving as the control center, this module allows administrators to regulate user access, monitor document uploads, and ensure smooth platform operation.
              </p>
              <NavLink to='/adminLogin'>
                    <span
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Register here
                  </span>
                  </NavLink>
            </div>
          </div>
        </div>
  );
};

export default SelectionAuth;
