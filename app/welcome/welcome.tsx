import { NavLink } from 'react-router';

export function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] p-6 text-center"> {/* Adjust min-height based on your layout's header/footer */}
      <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 sm:mb-10">
          Navigate Challenges
        </h1>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/badges"
              className={({ isActive }) =>
                `block w-full px-4 py-3 rounded-lg text-lg font-medium transition-all duration-150 ease-in-out transform
                focus:outline-none focus:ring-2 focus:ring-opacity-50
                ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700 focus:ring-blue-500' // Active link style
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm focus:ring-gray-300' // Inactive link style
                }`
              }
            >
              Badges
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
