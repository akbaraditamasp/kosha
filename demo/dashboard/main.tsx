import { Avatar, Card, StatsCard } from "#kosha";
import {
  PiBookmarkDuotone,
  PiDeviceMobileDuotone,
  PiEyeDuotone,
  PiHeadphonesDuotone,
  PiRocketDuotone,
  PiUserCircleDuotone,
  PiUserPlusDuotone,
} from "react-icons/pi";
import render from "../render-layout";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useMemo } from "react";
import { AxisOptions, Chart } from "react-charts";
import generateSequentialData, { DailyData, Series } from "./chart-data";

render("Dashboard", ["Dashboard"], () => {
  const primaryAxis = useMemo(
    (): AxisOptions<DailyData> => ({
      getValue: (datum) => datum.date,
    }),
    []
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<DailyData>[] => [
      {
        getValue: (datum) => datum.count,
      },
    ],
    []
  );

  return (
    <>
      <div className="p-5 grid grid-flow-row grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-5">
        <StatsCard icon={PiEyeDuotone} color="info" label="Profile Views">
          112.000
        </StatsCard>
        <StatsCard icon={PiUserCircleDuotone} color="success" label="Followers">
          183.000
        </StatsCard>
        <StatsCard icon={PiUserPlusDuotone} color="warning" label="Following">
          80.000
        </StatsCard>
        <StatsCard icon={PiBookmarkDuotone} color="danger" label="Saved Post">
          112
        </StatsCard>
      </div>
      <div className="h-auto lg:h-[28rem] px-5 pb-5 block lg:flex justify-start items-stretch space-x-0 lg:space-x-5 space-y-5 lg:space-y-0">
        <Card className="h-96 lg:h-full w-full lg:w-2/3 flex flex-col">
          <Card.Head>
            <h3>Statistics</h3>
          </Card.Head>
          <Card.Content className="flex-1">
            <div className="h-full">
              <Chart
                options={{
                  data: [
                    {
                      label: "Profile Visits",
                      data: generateSequentialData(10, 10000, 50000),
                    },
                    {
                      label: "Likes",
                      data: generateSequentialData(10, 10000, 50000),
                    },
                  ] as Series[],
                  primaryAxis,
                  secondaryAxes,
                }}
              />
            </div>
          </Card.Content>
        </Card>
        <Card className="h-auto lg:h-full flex-1 flex flex-col">
          <Card.Head>
            <h3>Recent Activities</h3>
          </Card.Head>
          <OverlayScrollbarsComponent
            defer
            className="flex-1"
            options={{ scrollbars: { autoHide: "leave" } }}
          >
            <div className="flex flex-col">
              <div className="border-b border-neutral-200 flex justify-start items-start p-5 space-x-3">
                <Avatar url="https://randomuser.me/api/portraits/men/70.jpg" />
                <div className="flex-1">
                  <div className="flex justify-start items-center mb-2">
                    <h4 className="font-semibold text-sm flex-1">
                      Farhan A Mujib
                    </h4>
                    <span className="text-xs text-neutral-700">Now</span>
                  </div>
                  <p className="text-sm">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin.
                  </p>
                </div>
              </div>
              <div className="border-b border-neutral-200 flex justify-start items-start p-5 space-x-3">
                <Avatar url="https://randomuser.me/api/portraits/men/64.jpg" />
                <div className="flex-1">
                  <div className="flex justify-start items-center mb-2">
                    <h4 className="font-semibold text-sm flex-1">
                      Ujang Maman
                    </h4>
                    <span className="text-xs text-neutral-700">17m</span>
                  </div>
                  <p className="text-sm">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin.
                  </p>
                </div>
              </div>
              <div className="border-b border-neutral-200 flex justify-start items-start p-5 space-x-3">
                <Avatar url="https://randomuser.me/api/portraits/men/53.jpg" />
                <div className="flex-1">
                  <div className="flex justify-start items-center mb-2">
                    <h4 className="font-semibold text-sm flex-1">
                      Rizal Fakhri
                    </h4>
                    <span className="text-xs text-neutral-700">25m</span>
                  </div>
                  <p className="text-sm">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin.
                  </p>
                </div>
              </div>
              <div className="border-b border-neutral-200 flex justify-start items-start p-5 space-x-3">
                <Avatar url="https://randomuser.me/api/portraits/men/26.jpg" />
                <div className="flex-1">
                  <div className="flex justify-start items-center mb-2">
                    <h4 className="font-semibold text-sm flex-1">
                      Alif Zulkarnain
                    </h4>
                    <span className="text-xs text-neutral-700">36m</span>
                  </div>
                  <p className="text-sm">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin.
                  </p>
                </div>
              </div>
            </div>
          </OverlayScrollbarsComponent>
        </Card>
      </div>
      <div className="px-5 pb-5 block lg:flex justify-start items-start space-x-0 lg:space-x-5 space-y-5 lg:space-y-0">
        <Card className="w-full lg:w-1/2">
          <Card.Head>
            <h3>Refferal URL</h3>
          </Card.Head>
          <Card.Content>
            <div className="flex flex-col space-y-5 pb-5">
              <div>
                <div className="flex justify-start items-center">
                  <h4 className="flex-1 font-semibold text-sm">Google</h4>
                  <span className="text-xs">2.100</span>
                </div>
                <div className="w-full bg-neutral-200 h-1 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-primary-600"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-start items-center">
                  <h4 className="flex-1 font-semibold text-sm">Facebook</h4>
                  <span className="text-xs">1.880</span>
                </div>
                <div className="w-full bg-neutral-200 h-1 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-primary-600"
                    style={{ width: "60%" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-start items-center">
                  <h4 className="flex-1 font-semibold text-sm">Bing</h4>
                  <span className="text-xs">1.520</span>
                </div>
                <div className="w-full bg-neutral-200 h-1 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-primary-600"
                    style={{ width: "50%" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-start items-center">
                  <h4 className="flex-1 font-semibold text-sm">Yahoo</h4>
                  <span className="text-xs">884</span>
                </div>
                <div className="w-full bg-neutral-200 h-1 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-primary-600"
                    style={{ width: "40%" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-start items-center">
                  <h4 className="flex-1 font-semibold text-sm">WhatsApp</h4>
                  <span className="text-xs">720</span>
                </div>
                <div className="w-full bg-neutral-200 h-1 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-primary-600"
                    style={{ width: "30%" }}
                  />
                </div>
              </div>
            </div>
          </Card.Content>
        </Card>
        <Card className="flex-1">
          <Card.Head>
            <h3>This Weeks Stats</h3>
          </Card.Head>
          <div className="h-48 bg-success-100 flex flex-col justify-center items-center">
            <div className="text-3xl font-montserrat font-medium text-primary-800">
              $1,053
            </div>
            <div className="text-sm text-neutral-700">
              Sold 3 items on 2 customers
            </div>
            <a
              href="#"
              className="hover:underline mt-5 text-sm text-primary-500"
            >
              View All
            </a>
          </div>
          <Card.Content>
            <div className="text-sm font-ubuntu pb-5 mb-5 flex justify-between items-center border-b border-neutral-100">
              <span className="font-semibold">Item List</span>
              <span className="text-neutral-700">3 items</span>
            </div>
            <div className="flex flex-col space-y-5">
              <div className="flex justify-start items-center space-x-5">
                <div className="w-12 h-12 bg-warning-500 rounded flex justify-center items-center">
                  <PiHeadphonesDuotone className="text-3xl" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-neutral-900 text-sm">
                    PlayStation 5
                  </h4>
                  <div className="text-xs">by Akbar Aditama</div>
                </div>
                <div className="text-primary-700 text-sm">$405</div>
              </div>
              <div className="flex justify-start items-center space-x-5">
                <div className="w-12 h-12 bg-success-100 rounded flex justify-center items-center">
                  <PiRocketDuotone className="text-3xl text-success-700" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-neutral-900 text-sm">
                    RocketZ
                  </h4>
                  <div className="text-xs">by Akbar Aditama</div>
                </div>
                <div className="text-primary-700 text-sm">$499</div>
              </div>
              <div className="flex justify-start items-center space-x-5">
                <div className="w-12 h-12 bg-danger-100 rounded flex justify-center items-center">
                  <PiDeviceMobileDuotone className="text-3xl text-danger-700" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-neutral-900 text-sm">
                    iPhone 20 Pro Max
                  </h4>
                  <div className="text-xs">by Akbar Aditama</div>
                </div>
                <div className="text-primary-700 text-sm">$149</div>
              </div>
            </div>
          </Card.Content>
        </Card>
      </div>
    </>
  );
});
