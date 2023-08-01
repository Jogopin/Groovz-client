export default function TabContentContainer({ activeTab, children }) {
    return (
      <div className="mx-auto mt-10 sm:w-4/5 lg:w-3/5 xl:w-3/6">
        {children[activeTab-1]}
      </div>
    );
  }
  