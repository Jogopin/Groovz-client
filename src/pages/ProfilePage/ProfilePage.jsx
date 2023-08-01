import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import UserOrders from "./UserOrders";
import ProfileDetails from "./ProfileDetails";
import TabNavigationBar from "../../components/TabNavigationBar/TabNavigationBar";
import TabNavigationItem from "../../components/TabNavigationBar/TabNavigationItem";
import TabContentContainer from "../../components/TabNavigationBar/TabContentContainer";
import useTabs from "../../components/TabNavigationBar/useTabs";

export default function ProfilePage() {
  const { authUser } = useAuth();
  const authUserId = authUser ? authUser._id : null;

  const { activeTab,handleTabClick } = useTabs()

  return (
    <>
      <TabNavigationBar>
        <TabNavigationItem
          onClick={handleTabClick}
          activeTab={activeTab}
          tabNum={1}
        >
          Personal Details
        </TabNavigationItem>
        <TabNavigationItem
          onClick={handleTabClick}
          activeTab={activeTab}
          tabNum={2}
        >
          Orders
        </TabNavigationItem>
      </TabNavigationBar>
      <TabContentContainer activeTab={activeTab}>
        <ProfileDetails userId={authUserId} />
        <UserOrders userId={authUserId} />
      </TabContentContainer>
    </>
  );
}
