import { Layout, SidebarProps, Avatar } from "#kosha";
import { FC, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CgChevronDown } from "react-icons/cg";
import {
  PiBellBold,
  PiCardsDuotone,
  PiEmptyDuotone,
  PiEnvelopeBold,
  PiFireDuotone,
  PiGearBold,
  PiGridNineDuotone,
  PiLifebuoyDuotone,
  PiLightningBold,
  PiSignOutBold,
  PiStackDuotone,
  PiTextboxDuotone,
  PiUserCircleBold,
  PiUserSwitchDuotone,
  PiWarningDuotone,
} from "react-icons/pi";
import Popup from "reactjs-popup";

const sidebars = [
  {
    groupName: "Basic",
    contents: [
      {
        icon: PiFireDuotone,
        element: "Dashboard",
        onClick: () => {
          window.location.href = "/demo/index.html";
        },
      },
      {
        icon: PiStackDuotone,
        element: "Components",
        children: [
          {
            element: "Accordion",
            onClick: () => {
              window.location.href = "/demo/accordion.html";
            },
          },
          {
            element: "Alert",
            onClick: () => {
              window.location.href = "/demo/alert.html";
            },
          },
          {
            element: "Badge",
            onClick: () => {
              window.location.href = "/demo/badge.html";
            },
          },
          {
            element: "Breadcrumb",
            onClick: () => {
              window.location.href = "/demo/breadcrumb.html";
            },
          },
          {
            element: "Button",
            onClick: () => {
              window.location.href = "/demo/button.html";
            },
          },
          {
            element: "Card",
            onClick: () => {
              window.location.href = "/demo/card.html";
            },
          },
          { element: "Carousel" },
          { element: "Collapse" },
          { element: "Dropdown" },
          { element: "List Group" },
          { element: "Modal" },
          { element: "Navs" },
          { element: "Pagination" },
          { element: "Placeholder" },
          { element: "Progress" },
          { element: "Spinner" },
          { element: "Toasts" },
          { element: "Tooltip" },
        ],
      },
      {
        icon: PiCardsDuotone,
        element: "Extra Components",
        children: [
          { element: "Avatar" },
          { element: "Comment" },
          { element: "Divider" },
          { element: "Date Picker" },
          { element: "Flag" },
          { element: "Sweet Alert" },
          { element: "Toastify" },
          { element: "Rating" },
        ],
      },
      {
        icon: PiTextboxDuotone,
        element: "Form Elements",
        children: [
          { element: "Input" },
          { element: "Input Group" },
          { element: "Select" },
          { element: "Radio" },
          { element: "Checkbox" },
          { element: "Textarea" },
        ],
      },
      {
        icon: PiGridNineDuotone,
        element: "Data Grid",
      },
    ],
  },
  {
    groupName: "Pages",
    contents: [
      {
        icon: PiEmptyDuotone,
        element: "Blank Page",
        onClick: () => {
          window.location.href = "/demo/pages/blank.html";
        },
      },
      {
        icon: PiUserSwitchDuotone,
        element: "Authentication",
        children: [
          {
            element: "Login",
          },
          {
            element: "Register",
          },
          {
            element: "Forgot Password",
          },
        ],
      },
      {
        icon: PiWarningDuotone,
        element: "Errors",
        children: [
          {
            element: "403",
          },
          {
            element: "404",
          },
          {
            element: "500",
          },
        ],
      },
    ],
  },
  {
    groupName: "Support",
    contents: [
      {
        icon: PiLifebuoyDuotone,
        element: "Documentation",
      },
    ],
  },
];

const getChildren = (
  active: string[],
  iterationCount: number,
  childrens: SidebarProps["children"]
): SidebarProps["children"] => {
  return childrens?.map(({ children, ...item }) => ({
    ...item,
    active: active[iterationCount] === item.element,
    children: getChildren(active, iterationCount + 1, children),
  }));
};

export const getSidebar = (
  active: string[]
): {
  groupName?: string | undefined;
  contents: SidebarProps[];
}[] => {
  return sidebars.map(({ groupName, contents }) => ({
    groupName,
    contents: contents.map(({ children, ...item }) => ({
      ...item,
      active: active[0] === item.element,
      children: getChildren(active, 1, children),
    })),
  }));
};

export default function render(title: string, active: string[], App: FC) {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Layout
        header={
          <>
            <div className="w-8 h-8 bg-gradient-to-br from-primary-700 to-primary-800 rounded text-secondary-300 font-montserrat font-bold flex justify-center items-center shadow">
              K
            </div>
            <h1 className="ml-3 font-montserrat font-bold text-neutral-900">
              Kosha Admin
            </h1>
          </>
        }
        sidebars={getSidebar(active)}
        title={title}
        accessories={
          <div className="flex justify-start items-center px-2">
            <button
              type="button"
              className="py-2 px-3 text-2xl hover:text-primary-500"
            >
              <PiEnvelopeBold />
            </button>
            <button
              type="button"
              className="py-2 px-3 text-2xl hover:text-primary-500"
            >
              <PiBellBold />
            </button>
            <Popup
              position="bottom right"
              trigger={
                <div className="flex justify-start items-center p-3 rounded hover:bg-neutral-100 cursor-pointer">
                  <Avatar status="success" size="sm" />
                  <span className="ml-3 text-sm hidden lg:block">
                    Hi, Budiono Siregar!
                  </span>
                  <CgChevronDown className="ml-1 text-sm" />
                </div>
              }
            >
              <div className="w-72 p-5">
                <div className="text-xs tracking-widest uppercase text-neutral-700">
                  Logged in 5 min ago
                </div>
                <div className="flex flex-col mt-3">
                  <a
                    href="#"
                    className="text-neutral-800 flex justify-start items-center outline-none px-3 py-2 hover:bg-neutral-100 rounded"
                  >
                    <span className="mr-3 text-xl mb-0.5">
                      <PiUserCircleBold />
                    </span>
                    <span className="flex-1">Profile</span>
                  </a>
                  <a
                    href="#"
                    className="text-neutral-800 flex justify-start items-center outline-none px-3 py-2 hover:bg-neutral-100 rounded"
                  >
                    <span className="mr-3 text-xl mb-0.5">
                      <PiLightningBold />
                    </span>
                    <span className="flex-1">Activities</span>
                  </a>
                  <a
                    href="#"
                    className="text-neutral-800 flex justify-start items-center outline-none px-3 py-2 hover:bg-neutral-100 rounded"
                  >
                    <span className="mr-3 text-xl mb-0.5">
                      <PiGearBold />
                    </span>
                    <span className="flex-1">Settings</span>
                  </a>
                  <a
                    href="#"
                    className="mt-5 flex justify-start items-center outline-none px-3 py-2 hover:bg-neutral-100 rounded text-danger-600"
                  >
                    <span className="mr-3 text-xl mb-0.5">
                      <PiSignOutBold />
                    </span>
                    <span className="flex-1">Logout</span>
                  </a>
                </div>
              </div>
            </Popup>
          </div>
        }
      >
        <App />
      </Layout>
    </StrictMode>
  );
}
