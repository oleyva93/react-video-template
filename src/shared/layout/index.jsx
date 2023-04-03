import { memo, useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  const [collapse, setCollapse] = useState(true);

  return (
    <div>
      <Header onCollapse={() => setCollapse((prev) => !prev)} />
      <div className="flex h-screen">
        <Sidebar collapse={collapse} />
        <section
          onClick={() => setCollapse(true)}
          className="w-full py-[25px] px-[20px] bg-gray-50 dark:bg-zinc-800"
        >
          {children}
        </section>
      </div>
    </div>
  );
};

export default memo(Layout);
