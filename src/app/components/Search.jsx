import React from 'react';
import Link from 'next/link';

export default function Search() {
  return (
      <div className="xl:w-72">
          <div className="flex w-full font-mono h-10">
              <input
                  type="search"
                  className="hidden outline-none xl:block flex-auto rounded-full bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700"
                  placeholder="Search..."
                  aria-label="Search"
                  aria-describedby="button-addon2" />
              <Link
              href="/search-up"
                  className="flex items-center justify-center rounded xl:p-2 hover:opacity-55">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd" />
                  </svg>
              </Link>
          </div>
      </div>
  );
}
