import React from "react";
import { NavLink } from "react-router-dom";

const Footer = ({ hideFooter }) => {
  if (hideFooter) {
    return null;
  }
  return (
    <footer className="bg-white dark:bg-gray-900 pt-20">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://eVault.com/" className="flex items-center">
            <img
              src="/logo.png"
              className="h-8"
              alt="E-vault Logo"
            />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                eVault
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="http://localhost:5173" className="hover:underline">
                    eVault
                  </a>
                </li>
                <li>
                  <a href="https://lawmin.gov.in/" target="_blank" className="hover:underline">
                    Ministry of Law & Justice
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/AnishKN/evault"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AnishKN/evault"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <NavLink to="/privacyPolicy">
                    <p className="hover:underline">
                      Privacy Policy
                    </p>
                  </NavLink>
                </li>
                <li>
                <NavLink to="/termsAndConditions">
                  <p className="hover:underline">
                    Terms &amp; Conditions
                  </p>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="http://localhost:5173" className="hover:underline">
              eVault™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
