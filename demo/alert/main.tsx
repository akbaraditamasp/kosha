import { Alert, Card } from "#kosha";
import {
  PiBookBold,
  PiCheckCircleBold,
  PiHeartBold,
  PiInfoBold,
  PiKeyBold,
  PiStarBold,
  PiWarningBold,
  PiXCircleBold,
} from "react-icons/pi";
import render from "../render-layout";

render("Alert", ["Components", "Alert"], () => {
  return (
    <div className="p-5 space-x-0 lg:space-x-5 space-y-5 lg:space-y-0 block lg:flex justify-start items-start">
      <div className="flex-1 flex flex-col space-y-5">
        <Card>
          <Card.Head>
            <h2>Basic</h2>
          </Card.Head>
          <Card.Content>
            <Alert className="mb-3" appearance="basic" color="primary">
              This is primary alert.
            </Alert>
            <Alert className="mb-3" appearance="basic" color="success">
              This is success alert.
            </Alert>
            <Alert className="mb-3" appearance="basic" color="warning">
              This is warning alert.
            </Alert>
            <Alert className="mb-3" appearance="basic" color="danger">
              This is danger alert.
            </Alert>
            <Alert className="mb-3" appearance="basic" color="dark">
              This is dark alert.
            </Alert>
            <Alert className="mb-3" appearance="basic" color="secondary">
              This is secondary alert.
            </Alert>
            <Alert className="mb-3" appearance="basic" color="light">
              This is light alert.
            </Alert>
            <Alert className="mb-3" appearance="basic" color="info">
              This is info alert.
            </Alert>
          </Card.Content>
        </Card>
        <Card>
          <Card.Head>
            <h2>With Icon</h2>
          </Card.Head>
          <Card.Content>
            <Alert
              className="mb-3"
              appearance="basic"
              color="primary"
              icon={PiStarBold}
            >
              This is primary alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="success"
              icon={PiCheckCircleBold}
            >
              This is success alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="warning"
              icon={PiWarningBold}
            >
              This is warning alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="danger"
              icon={PiXCircleBold}
            >
              This is danger alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="dark"
              icon={PiHeartBold}
            >
              This is dark alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="secondary"
              icon={PiBookBold}
            >
              This is secondary alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="light"
              icon={PiKeyBold}
            >
              This is light alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="info"
              icon={PiInfoBold}
            >
              This is info alert.
            </Alert>
          </Card.Content>
        </Card>
        <Card>
          <Card.Head>
            <h2>Dismissable</h2>
          </Card.Head>
          <Card.Content>
            <Alert
              className="mb-3"
              appearance="basic"
              color="primary"
              icon={PiStarBold}
              dismissable
            >
              This is primary alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="success"
              icon={PiCheckCircleBold}
              dismissable
            >
              This is success alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="warning"
              icon={PiWarningBold}
              dismissable
            >
              This is warning alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="danger"
              icon={PiXCircleBold}
              dismissable
            >
              This is danger alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="dark"
              icon={PiHeartBold}
              dismissable
            >
              This is dark alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="secondary"
              icon={PiBookBold}
              dismissable
            >
              This is secondary alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="light"
              icon={PiKeyBold}
              dismissable
            >
              This is light alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="info"
              icon={PiInfoBold}
              dismissable
            >
              This is info alert.
            </Alert>
          </Card.Content>
        </Card>
      </div>
      <div className="flex-1 flex flex-col space-y-5">
        <Card>
          <Card.Head>
            <h2>Light</h2>
          </Card.Head>
          <Card.Content>
            <Alert className="mb-3" appearance="light" color="primary">
              This is primary alert.
            </Alert>
            <Alert className="mb-3" appearance="light" color="success">
              This is success alert.
            </Alert>
            <Alert className="mb-3" appearance="light" color="warning">
              This is warning alert.
            </Alert>
            <Alert className="mb-3" appearance="light" color="danger">
              This is danger alert.
            </Alert>
            <Alert className="mb-3" appearance="light" color="secondary">
              This is secondary alert.
            </Alert>
            <Alert className="mb-3" appearance="light" color="info">
              This is info alert.
            </Alert>
          </Card.Content>
        </Card>
        <Card>
          <Card.Head>
            <h2>With Title</h2>
          </Card.Head>
          <Card.Content>
            <Alert
              className="mb-3"
              appearance="basic"
              color="primary"
              title="Primary"
            >
              This is primary alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="success"
              title="Success"
            >
              This is success alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="warning"
              title="Warning"
            >
              This is warning alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="danger"
              title="Danger"
            >
              This is danger alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="dark"
              title="Dark"
            >
              This is dark alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="secondary"
              title="Secondary"
            >
              This is secondary alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="light"
              title="Light"
            >
              This is light alert.
            </Alert>
            <Alert
              className="mb-3"
              appearance="basic"
              color="info"
              title="Info"
            >
              This is info alert.
            </Alert>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
});
