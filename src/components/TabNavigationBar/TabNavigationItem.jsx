export default function TabNavigationItem({ onClick, activeTab, tabNum, children }) {
    return (
      <li>
        <button
          onClick={(e)=>onClick(e,tabNum)}
          className={` ${activeTab === tabNum ? "active-white" : ""} flex space-x-2 p-2`}
        >
          {children}
        </button>
      </li>
    );
  }
  