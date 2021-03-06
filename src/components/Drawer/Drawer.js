import React, { useState } from "react";
import "./Drawer.css";
import SideMenuHeader from "../SideMenuHeader/SideMenuHeader";

const Drawer = () => {
  const [shouldCollapse, setShouldCollapse] = useState(false);

  const onCollapse = () => setShouldCollapse(true);
  const onExpand = () => setShouldCollapse(false);

  return (
    <div className="container">
      <section className={"left"}>
        <SideMenuHeader iconName={"menu_open"} onHandleClick={onCollapse} />
      </section>
      <section className={`right ${shouldCollapse ? "collapse" : "expand"}`}>
        <header className={"content-header"}>
          <div className="title">
            {shouldCollapse && (
              <span className={"material-icons icon"} onClick={onExpand}>
                menu
              </span>
            )}
            <h2>Home</h2>
          </div>

          <div className={"more-content"}>-- Right section for more content to insert --</div>
        </header>
        <div className="content">
            -- Put your content here --
        </div>
      </section>
    </div>
  );
};

export default Drawer;
