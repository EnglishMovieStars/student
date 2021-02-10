import React from "react";

import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

function Menu() {
  return (
    <Navigation
      // you can use your own router's api to get pathname
      activeItemId="/management/members"
      onSelect={({ itemId }) => {
        // maybe push to the route
      }}
      items={[
        {
          title: "Teacher",
          itemId: "/teacher",
          elemBefore: () => <Icon name="users" />,
          subNav: [
            {
              title: "Task assignment",
              itemId: "/teacher/TaskAssignment",
            },
            {
              title: "Results",
              itemId: "/teacher/results",
            },
          ],
        },
        {
          title: "Student",
          itemId: "/student",
          subNav: [
            {
              title: "Task assignment",
              itemId: "/studentAssignment",
            },
          ],
        },
      ]}
    />
  );
}
