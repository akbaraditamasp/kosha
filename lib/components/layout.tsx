import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Fragment, ReactNode, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Sidebar, SidebarProps } from "./sidebar";

export type LayoutProps = {
  header?: ReactNode;
  sidebars?: { groupName?: string; contents: SidebarProps[] }[];
  title?: string;
  accessories?: ReactNode;
  children?: ReactNode;
};

export function Layout({
  header,
  sidebars,
  title,
  accessories,
  children,
}: LayoutProps) {
  const [sidebarShown, setSidebarShown] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 left-0 bottom-0 right-0 lg:right-auto bg-white w-full lg:w-[300px] border-r border-neutral-300 flex flex-col z-20 transform ${
          sidebarShown ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition`}
      >
        <div className="h-16 border-b border-neutral-300 p-5 flex justify-start items-center">
          {header}
          <button
            type="button"
            className="block lg:hidden ml-auto -mr-2 p-2 rounded border border-neutral-300 text-neutral-700 bg-neutral-100"
            onClick={() => setSidebarShown(false)}
          >
            <MdClose />
          </button>
        </div>
        <OverlayScrollbarsComponent
          element="div"
          className="flex-1"
          options={{ scrollbars: { autoHide: "leave", autoHideDelay: 200 } }}
          defer
        >
          <div className="p-2 px-3 flex flex-col space-y-1">
            {sidebars?.map((item, index) => (
              <Fragment key={`${index}`}>
                <div className="font-ubuntu tracking-widest text-sm px-3 pt-5 pb-2 font-semibold uppercase text-primary-800">
                  {item.groupName}
                </div>
                {item.contents.map((item, index) => (
                  <Sidebar key={`${index}`} {...item} />
                ))}
              </Fragment>
            ))}
          </div>
        </OverlayScrollbarsComponent>
      </div>
      <div className="w-full bg-neutral-100 flex justify-start items-stretch">
        <div className="hidden lg:block w-[300px]"></div>
        <div className="flex-1 relative flex flex-col min-h-screen">
          <div className="h-16 bg-white border-b border-neutral-300 flex justify-start items-center sticky top-0 left-0 z-10">
            <button
              type="button"
              className="px-5 mr-auto block lg:hidden text-xl"
              onClick={() => setSidebarShown(true)}
            >
              <MdMenu />
            </button>
            <h1 className="hidden lg:flex flex-1 px-5 font-montserrat font-bold text-neutral-900 text-lg lg:text-xl">
              {title}
            </h1>
            {accessories}
          </div>
          {children}
          <div className="mt-auto border-t border-neutral-300 p-5 flex justify-between text-sm">
            <span>2024 &copy; Kosha</span>
            <span>
              Crafted with ❤️ by{" "}
              <a
                href="https://akbaraditama.vercel.app"
                className="text-primary-700 hover:underline"
              >
                Akbar Aditama
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
