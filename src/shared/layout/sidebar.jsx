import { memo } from "react";

const SideBar = ({ collapse }) => {
  const twCollapse = collapse
    ? "w-[0px] min-w-[0px]"
    : "w-[210px] min-w-[211px]";

  return (
    <section
      className={`fixed top-0 z-10 transition-all duration-500 flex h-screen min-h-full items-start ${twCollapse} justify-center overflow-y-hidden bg-gray-50 dark:black`}
    >
      <nav
        id="sidenav-8"
        className={`fixed transition-all duration-500 border-r border-[#3e3e3e] dark-gbl-border top-0 left-0 z-[1035] h-full ${twCollapse} -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-[#1e1e1e]`}
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-position="absolute"
        data-te-sidenav-accordion="true"
      ></nav>
    </section>
  );
};

export default memo(SideBar);
