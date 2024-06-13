import { ChevronFirst, ChevronLast, Search, SunMedium } from "lucide-react";
import profile from "../assets/profile.jpg";
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const SidebarContext = createContext();

//includes the search bar, side bar toggle, and the cityscape image
export default function Sidebar({ children, input }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <div className={`relative input-group ${expanded ? "" : "hidden"}`}>
              <input
                type="text"
                ref={input}
                className={`overflow-hidden transition-all ${
                  expanded ? "w-50 h-5" : "w-0 h-0"
                } p-4 pl-10 rounded-2xl bg-white text-gray-800 border border-gray-100`}
                placeholder="Search for places..."
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            </div>
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          <div className="border-t flex p-3">
            <div className={`transition-all ${expanded ? "mx-auto" : ""}`}>
              <div className="relative">
                <img
                  src={profile}
                  className={`rounded-2xl object-cover transition-all ${
                    expanded ? "w-60 h-20" : "w-10 h-10"
                  }`}
                  alt="New york Profile"
                />
                {expanded && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h4 className="text-white font-bold"> New York, USA</h4>
                  </div>
                )}
              </div>
              <div
                className={`flex justify-between items-center overflow-hidden transition-all ${
                  expanded ? "w-52 ml-3" : "w-0"
                } `}
              ></div>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

// contains logic for the other items on the sidebar
export function SidebarItem({ icon, active, expandedContent }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600" //ignore this, i was trying to add a helper pop up text, turns out eno get use
      }`}
    >
      {!expanded && icon}
      {expanded && (
        <span className="overflow-hidden transition-all ml-3 flex justify-center items-center">
          {icon.type === SunMedium ? (
            <div className="w-72">{expandedContent}</div>
          ) : (
            expandedContent // if expanded display the expanded content (The images and text on the sidebar)
          )}
        </span>
      )}
    </li>
  );
}

// Resolving the eslint warnings for sidebar and sidebar items
Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  input: PropTypes.any.isRequired,
};

SidebarItem.propTypes = {
  icon: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  expandedContent: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  input: PropTypes.any.isRequired,
};
