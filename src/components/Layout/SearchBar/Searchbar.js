// import { useState } from "react";
// // import { FaSearch } from "react-icons/fa";

// function CategoryDropdown() {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleDropdownHover = () => {
//     setShowDropdown(true);
//   };

//   const handleDropdownLeave = () => {
//     setShowDropdown(false);
//   };

//   return (
//     <div className="relative ml-4">
//       <button
//         onMouseEnter={handleDropdownHover}
//         onMouseLeave={handleDropdownLeave}
//         className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-md hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100"
//       >
//         All categories{" "}
//         <svg
//           className="w-4 h-4 ml-1"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           aria-hidden="true"
//         >
//           <path
//             fillRule="evenodd"
//             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>
//       {showDropdown && (
//         <div
//           onMouseEnter={handleDropdownHover}
//           onMouseLeave={handleDropdownLeave}
//           className="absolute z-10 top-full left-0 py-2 mt-1 bg-white divide-y divide-gray-100 rounded-md shadow-lg w-56"
//         >
//           <button className="px-4 py-2 hover:bg-gray-100">Mockups</button>
//           <button className="px-4 py-2 hover:bg-gray-100">Templates</button>
//           <button className="px-4 py-2 hover:bg-gray-100">Design</button>
//           <button className="px-4 py-2 hover:bg-gray-100">Logos</button>
//         </div>
//       )}
//     </div>
//   );
// }

// function SearchBar() {
//   return (
//     <div className="relative flex items-stretch justify-center flex-grow ml-4">
//       <input
//         type="text"
//         className="flex-grow border border-gray-300 rounded-r-md py-2 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
//         placeholder="Search books..."
//       />
//       <div className="absolute right-0 flex items-center justify-center w-12 h-full text-gray-400 bg-gray-100 rounded-r-md">
//         {/* <FaSearch /> */}
//       </div>
//     </div>
//   );
// }

// function Header() {
//   return (
//     <div className="flex items-center justify-between p-4 bg-gray-200">
//       <CategoryDropdown />
//       <SearchBar />
//     </div>
//   );
// }

// export default Header;
