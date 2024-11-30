import { Button, Card } from "#kosha";
import {
  PiCheckCircleBold,
  PiFileBold,
  PiInfoBold,
  PiPencilBold,
  PiStarBold,
  PiUserBold,
  PiWarningBold,
  PiWarningCircleBold,
} from "react-icons/pi";
import render from "../render-layout";

render("Button", ["Components", "Button"], () => {
  return (
    <>
      <div className="p-5">
        <Card>
          <Card.Head>
            <h2>Appearance</h2>
          </Card.Head>
          <Card.Content>
            <h2 className="font-bold text-primary-800 mb-3">Basic</h2>
            <div className="mb-5 pb-5 border-b border-neutral-200">
              <Button appearance="basic" color="primary" className="mr-3 mb-3">
                Primary
              </Button>
              <Button
                appearance="basic"
                color="secondary"
                className="mr-3 mb-3"
              >
                Secondary
              </Button>
              <Button appearance="basic" color="info" className="mr-3 mb-3">
                Info
              </Button>
              <Button appearance="basic" color="warning" className="mr-3 mb-3">
                Warning
              </Button>
              <Button appearance="basic" color="danger" className="mr-3 mb-3">
                Danger
              </Button>
              <Button appearance="basic" color="success" className="mr-3 mb-3">
                Success
              </Button>
              <Button appearance="basic" color="light" className="mr-3 mb-3">
                Light
              </Button>
              <Button appearance="basic" color="dark" className="mr-3 mb-3">
                Dark
              </Button>
            </div>
            <h2 className="font-bold text-primary-800 mb-3">Rounded</h2>
            <div className="mb-5 pb-5 border-b border-neutral-200">
              <Button
                appearance="rounded"
                color="primary"
                className="mr-3 mb-3"
              >
                Primary
              </Button>
              <Button
                appearance="rounded"
                color="secondary"
                className="mr-3 mb-3"
              >
                Secondary
              </Button>
              <Button appearance="rounded" color="info" className="mr-3 mb-3">
                Info
              </Button>
              <Button
                appearance="rounded"
                color="warning"
                className="mr-3 mb-3"
              >
                Warning
              </Button>
              <Button appearance="rounded" color="danger" className="mr-3 mb-3">
                Danger
              </Button>
              <Button
                appearance="rounded"
                color="success"
                className="mr-3 mb-3"
              >
                Success
              </Button>
              <Button appearance="rounded" color="light" className="mr-3 mb-3">
                Light
              </Button>
              <Button appearance="rounded" color="dark" className="mr-3 mb-3">
                Dark
              </Button>
            </div>
            <h2 className="font-bold text-primary-800 mb-3">Outlined</h2>
            <div className="mb-5 pb-5 border-b border-neutral-200">
              <Button
                appearance="outlined"
                color="primary"
                className="mr-3 mb-3"
              >
                Primary
              </Button>
              <Button
                appearance="outlined"
                color="secondary"
                className="mr-3 mb-3"
              >
                Secondary
              </Button>
              <Button appearance="outlined" color="info" className="mr-3 mb-3">
                Info
              </Button>
              <Button
                appearance="outlined"
                color="warning"
                className="mr-3 mb-3"
              >
                Warning
              </Button>
              <Button
                appearance="outlined"
                color="danger"
                className="mr-3 mb-3"
              >
                Danger
              </Button>
              <Button
                appearance="outlined"
                color="success"
                className="mr-3 mb-3"
              >
                Success
              </Button>
              <Button appearance="outlined" color="light" className="mr-3 mb-3">
                Light
              </Button>
              <Button appearance="outlined" color="dark" className="mr-3 mb-3">
                Dark
              </Button>
            </div>
            <h2 className="font-bold text-primary-800 mb-3">
              Outlined + Rounded
            </h2>
            <div>
              <Button
                appearance="outlined rounded"
                color="primary"
                className="mr-3 mb-3"
              >
                Primary
              </Button>
              <Button
                appearance="outlined rounded"
                color="secondary"
                className="mr-3 mb-3"
              >
                Secondary
              </Button>
              <Button
                appearance="outlined rounded"
                color="info"
                className="mr-3 mb-3"
              >
                Info
              </Button>
              <Button
                appearance="outlined rounded"
                color="warning"
                className="mr-3 mb-3"
              >
                Warning
              </Button>
              <Button
                appearance="outlined rounded"
                color="danger"
                className="mr-3 mb-3"
              >
                Danger
              </Button>
              <Button
                appearance="outlined rounded"
                color="success"
                className="mr-3 mb-3"
              >
                Success
              </Button>
              <Button
                appearance="outlined rounded"
                color="light"
                className="mr-3 mb-3"
              >
                Light
              </Button>
              <Button
                appearance="outlined rounded"
                color="dark"
                className="mr-3 mb-3"
              >
                Dark
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
      <div className="p-5 pt-0 space-x-0 lg:space-x-5 space-y-5 lg:space-y-0 block lg:flex justify-start items-start">
        <div className="flex-1 flex flex-col space-y-5">
          <Card>
            <Card.Head>
              <h2>Sizes</h2>
            </Card.Head>
            <Card.Content>
              <div className="flex flex-wrap justify-start items-center">
                <Button
                  appearance="basic"
                  color="primary"
                  size="xs"
                  className="mr-3 mb-3"
                >
                  Extra Small
                </Button>
                <Button
                  appearance="basic"
                  color="secondary"
                  size="sm"
                  className="mr-3 mb-3"
                >
                  Small
                </Button>
                <Button
                  appearance="basic"
                  color="danger"
                  size="base"
                  className="mr-3 mb-3"
                >
                  Base
                </Button>
                <Button
                  appearance="basic"
                  color="success"
                  size="lg"
                  className="mr-3 mb-3"
                >
                  Large
                </Button>
              </div>
              <div className="flex flex-wrap justify-start items-center">
                <Button
                  appearance="outlined"
                  color="primary"
                  size="xs"
                  className="mr-3 mb-3"
                >
                  Extra Small
                </Button>
                <Button
                  appearance="outlined"
                  color="secondary"
                  size="sm"
                  className="mr-3 mb-3"
                >
                  Small
                </Button>
                <Button
                  appearance="outlined"
                  color="danger"
                  size="base"
                  className="mr-3 mb-3"
                >
                  Base
                </Button>
                <Button
                  appearance="outlined"
                  color="success"
                  size="lg"
                  className="mr-3 mb-3"
                >
                  Large
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Head>
              <h2>With Icon</h2>
            </Card.Head>
            <Card.Content>
              <div className="mb-5">
                <Button
                  icon={PiPencilBold}
                  appearance="basic"
                  color="primary"
                  className="mr-3 mb-3"
                >
                  Primary
                </Button>
                <Button
                  icon={PiUserBold}
                  appearance="basic"
                  color="secondary"
                  className="mr-3 mb-3"
                >
                  Secondary
                </Button>
                <Button
                  icon={PiInfoBold}
                  appearance="basic"
                  color="info"
                  className="mr-3 mb-3"
                >
                  Info
                </Button>
                <Button
                  icon={PiWarningBold}
                  appearance="basic"
                  color="warning"
                  className="mr-3 mb-3"
                >
                  Warning
                </Button>
                <Button
                  icon={PiWarningCircleBold}
                  appearance="basic"
                  color="danger"
                  className="mr-3 mb-3"
                >
                  Danger
                </Button>
                <Button
                  icon={PiCheckCircleBold}
                  appearance="basic"
                  color="success"
                  className="mr-3 mb-3"
                >
                  Success
                </Button>
                <Button
                  icon={PiStarBold}
                  appearance="basic"
                  color="light"
                  className="mr-3 mb-3"
                >
                  Light
                </Button>
                <Button
                  icon={PiFileBold}
                  appearance="basic"
                  color="dark"
                  className="mr-3 mb-3"
                >
                  Dark
                </Button>
              </div>
              <div>
                <Button
                  icon={PiPencilBold}
                  appearance="outlined rounded"
                  color="primary"
                  className="mr-3 mb-3"
                >
                  Primary
                </Button>
                <Button
                  icon={PiUserBold}
                  appearance="outlined rounded"
                  color="secondary"
                  className="mr-3 mb-3"
                >
                  Secondary
                </Button>
                <Button
                  icon={PiInfoBold}
                  appearance="outlined rounded"
                  color="info"
                  className="mr-3 mb-3"
                >
                  Info
                </Button>
                <Button
                  icon={PiWarningBold}
                  appearance="outlined rounded"
                  color="warning"
                  className="mr-3 mb-3"
                >
                  Warning
                </Button>
                <Button
                  icon={PiWarningCircleBold}
                  appearance="outlined rounded"
                  color="danger"
                  className="mr-3 mb-3"
                >
                  Danger
                </Button>
                <Button
                  icon={PiCheckCircleBold}
                  appearance="outlined rounded"
                  color="success"
                  className="mr-3 mb-3"
                >
                  Success
                </Button>
                <Button
                  icon={PiStarBold}
                  appearance="outlined rounded"
                  color="light"
                  className="mr-3 mb-3"
                >
                  Light
                </Button>
                <Button
                  icon={PiFileBold}
                  appearance="outlined rounded"
                  color="dark"
                  className="mr-3 mb-3"
                >
                  Dark
                </Button>
              </div>
            </Card.Content>
          </Card>
        </div>
        <div className="flex-1 flex flex-col space-y-5">
          <Card>
            <Card.Head>
              <h2>States</h2>
            </Card.Head>
            <Card.Content>
              <div>
                <Button
                  icon={PiPencilBold}
                  appearance="basic"
                  color="primary"
                  className="mr-3 mb-3"
                >
                  Normal
                </Button>
                <Button
                  icon={PiPencilBold}
                  appearance="basic"
                  color="primary"
                  className="mr-3 mb-3"
                  disabled
                >
                  Disabled
                </Button>
              </div>
              <div>
                <Button
                  icon={PiPencilBold}
                  appearance="outlined rounded"
                  color="primary"
                  className="mr-3 mb-3"
                >
                  Normal
                </Button>
                <Button
                  icon={PiPencilBold}
                  appearance="outlined rounded"
                  color="primary"
                  className="mr-3 mb-3"
                  disabled
                >
                  Disabled
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Head>
              <h2>Icon Only</h2>
            </Card.Head>
            <Card.Content>
              <div className="mb-5">
                <Button
                  icon={PiPencilBold}
                  appearance="basic"
                  color="primary"
                  className="mr-3 mb-3"
                />
                <Button
                  icon={PiUserBold}
                  appearance="basic"
                  color="secondary"
                  className="mr-3 mb-3"
                />
                <Button
                  icon={PiInfoBold}
                  appearance="basic"
                  color="info"
                  className="mr-3 mb-3"
                />
                <Button
                  icon={PiWarningBold}
                  appearance="basic"
                  color="warning"
                  className="mr-3 mb-3"
                />
                <Button
                  icon={PiWarningCircleBold}
                  appearance="basic"
                  color="danger"
                  className="mr-3 mb-3"
                />
                <Button
                  icon={PiCheckCircleBold}
                  appearance="basic"
                  color="success"
                  className="mr-3 mb-3"
                />
                <Button
                  icon={PiStarBold}
                  appearance="basic"
                  color="light"
                  className="mr-3 mb-3"
                />
                <Button
                  icon={PiFileBold}
                  appearance="basic"
                  color="dark"
                  className="mr-3 mb-3"
                />
              </div>
              <div className="mb-5">
                <Button
                  icon={PiPencilBold}
                  appearance="outlined rounded"
                  color="primary"
                  className="mr-3 mb-3"
                />
                <Button
                  icon={PiUserBold}
                  appearance="outlined rounded"
                  color="secondary"
                  className="mr-3 mb-3"
                />
                <Button
                  icon={PiInfoBold}
                  appearance="outlined rounded"
                  color="info"
                  className="mr-3 mb-3"
                />
                <Button
                  icon={PiWarningBold}
                  appearance="outlined rounded"
                  color="warning"
                  className="mr-3 mb-3"
                />
                <Button
                  icon={PiWarningCircleBold}
                  appearance="outlined rounded"
                  color="danger"
                  className="mr-3 mb-3"
                />
                <Button
                  icon={PiCheckCircleBold}
                  appearance="outlined rounded"
                  color="success"
                  className="mr-3 mb-3"
                />
                <Button
                  icon={PiStarBold}
                  appearance="outlined rounded"
                  color="light"
                  className="mr-3 mb-3"
                />
                <Button
                  icon={PiFileBold}
                  appearance="outlined rounded"
                  color="dark"
                  className="mr-3 mb-3"
                />
              </div>
              <div className="flex justify-center items-center">
                <Button
                  icon={PiPencilBold}
                  appearance="basic"
                  color="primary"
                  size="xs"
                  className="mr-3 mb-3"
                />
                <Button
                  icon={PiWarningCircleBold}
                  appearance="basic"
                  color="danger"
                  size="sm"
                  className="mr-3 mb-3"
                />
                <Button
                  icon={PiCheckCircleBold}
                  appearance="basic"
                  color="success"
                  size="base"
                  className="mr-3 mb-3"
                />
                <Button
                  icon={PiFileBold}
                  appearance="basic"
                  color="dark"
                  size="lg"
                  className="mr-3 mb-3"
                />
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Head>
              <h2>Dropdown Trigger</h2>
            </Card.Head>
            <Card.Content>
              <div className="mb-5">
                <Button
                  dropdown
                  appearance="basic"
                  color="primary"
                  className="mr-3 mb-3"
                >
                  Primary
                </Button>
                <Button
                  dropdown
                  appearance="basic"
                  color="secondary"
                  className="mr-3 mb-3"
                >
                  Secondary
                </Button>
                <Button
                  dropdown
                  appearance="basic"
                  color="info"
                  className="mr-3 mb-3"
                >
                  Info
                </Button>
                <Button
                  dropdown
                  appearance="basic"
                  color="warning"
                  className="mr-3 mb-3"
                >
                  Warning
                </Button>
                <Button
                  dropdown
                  appearance="basic"
                  color="danger"
                  className="mr-3 mb-3"
                >
                  Danger
                </Button>
                <Button
                  dropdown
                  appearance="basic"
                  color="success"
                  className="mr-3 mb-3"
                >
                  Success
                </Button>
                <Button
                  dropdown
                  appearance="basic"
                  color="light"
                  className="mr-3 mb-3"
                >
                  Light
                </Button>
                <Button
                  dropdown
                  appearance="basic"
                  color="dark"
                  className="mr-3 mb-3"
                >
                  Dark
                </Button>
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </>
  );
});
