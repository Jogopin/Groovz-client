import { useState } from "react";

export default function useTabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (e, tabNum) => {
    e.preventDefault();
    setActiveTab(tabNum);
  };
  return {handleTabClick,activeTab}
}
