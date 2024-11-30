import { Badge, Card } from "#kosha";
import { PiBellBold } from "react-icons/pi";
import Button from "../../lib/components/button";
import render from "../render-layout";

render("Badge", ["Components", "Badge"], () => {
  return (
    <>
      <div className="p-5 block lg:flex justify-start items-start space-x-0 lg:space-x-5 space-y-5 lg:space-y-0">
        <div className="flex-1 flex flex-col space-y-5">
          <Card>
            <Card.Head>Preview</Card.Head>
            <Card.Content>
              <div className="text-4xl mb-3">
                Lorem Ipsum <Badge>New</Badge>
              </div>
              <div className="text-3xl mb-3">
                Lorem Ipsum <Badge>New</Badge>
              </div>
              <div className="text-2xl mb-3">
                Lorem Ipsum <Badge>New</Badge>
              </div>
              <div className="text-xl mb-3">
                Lorem Ipsum <Badge>New</Badge>
              </div>
              <div className="text-lg mb-3">
                Lorem Ipsum <Badge>New</Badge>
              </div>
              <div className="text-base mb-3">
                Lorem Ipsum <Badge>New</Badge>
              </div>
              <div className="text-sm mb-3">
                Lorem Ipsum <Badge>New</Badge>
              </div>
              <div className="text-xs mb-3">
                Lorem Ipsum <Badge>New</Badge>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Head>Variation</Card.Head>
            <Card.Content>
              <h3 className="text-primary-800 font-bold mb-3">Basic</h3>
              <div className="mb-5 pb-5 border-b border-neutral-100 text-sm">
                <div className="mr-1 mb-3 inline-table">
                  <Badge color="primary">Primary</Badge>
                </div>
                <div className="mr-1 mb-3 inline-table">
                  <Badge color="secondary">Secondary</Badge>
                </div>
                <div className="mr-1 mb-3 inline-table">
                  <Badge color="info">Info</Badge>
                </div>
                <div className="mr-1 mb-3 inline-table">
                  <Badge color="warning">Warning</Badge>
                </div>
                <div className="mr-1 mb-3 inline-table">
                  <Badge color="danger">Danger</Badge>
                </div>
                <div className="mr-1 mb-3 inline-table">
                  <Badge color="success">Success</Badge>
                </div>
                <div className="mr-1 mb-3 inline-table">
                  <Badge color="dark">Dark</Badge>
                </div>
              </div>
              <h3 className="text-primary-800 font-bold mb-3">Light</h3>
              <div className="text-sm">
                <div className="mr-1 mb-3 inline-table">
                  <Badge appearance="light" color="primary">
                    Primary
                  </Badge>
                </div>
                <div className="mr-1 mb-3 inline-table">
                  <Badge appearance="light" color="secondary">
                    Secondary
                  </Badge>
                </div>
                <div className="mr-1 mb-3 inline-table">
                  <Badge appearance="light" color="info">
                    Info
                  </Badge>
                </div>
                <div className="mr-1 mb-3 inline-table">
                  <Badge appearance="light" color="warning">
                    Warning
                  </Badge>
                </div>
                <div className="mr-1 mb-3 inline-table">
                  <Badge appearance="light" color="danger">
                    Danger
                  </Badge>
                </div>
                <div className="mr-1 mb-3 inline-table">
                  <Badge appearance="light" color="success">
                    Success
                  </Badge>
                </div>
                <div className="mr-1 mb-3 inline-table">
                  <Badge appearance="light" color="dark">
                    Dark
                  </Badge>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>
        <div className="flex-1 flex flex-col space-y-5">
          <Card>
            <Card.Head>Button</Card.Head>
            <Card.Content>
              <h3 className="text-primary-800 font-bold mb-3">Simple</h3>
              <div className="mb-5 pb-5 border-b border-neutral-100">
                <Button
                  color="primary"
                  className="mr-3 mb-3"
                  accessories={<Badge button>4</Badge>}
                >
                  Notifications
                </Button>
                <Button
                  color="warning"
                  className="mr-3 mb-3"
                  accessories={<Badge button>4</Badge>}
                >
                  Notifications
                </Button>
                <Button
                  color="success"
                  className="mr-3 mb-3"
                  accessories={<Badge button>4</Badge>}
                >
                  Notifications
                </Button>
                <Button
                  color="danger"
                  className="mr-3 mb-3"
                  accessories={<Badge button>4</Badge>}
                >
                  Notifications
                </Button>
                <Button
                  color="dark"
                  className="mr-3 mb-3"
                  accessories={<Badge button>4</Badge>}
                >
                  Notifications
                </Button>
              </div>
              <h3 className="text-primary-800 font-bold mb-3">Icons</h3>
              <div>
                <Button
                  icon={PiBellBold}
                  color="primary"
                  className="mr-3 mb-3"
                  accessories={<Badge button>4</Badge>}
                >
                  Notifications
                </Button>
                <Button
                  icon={PiBellBold}
                  color="warning"
                  className="mr-3 mb-3"
                  accessories={<Badge button>4</Badge>}
                >
                  Notifications
                </Button>
                <Button
                  icon={PiBellBold}
                  color="success"
                  className="mr-3 mb-3"
                  accessories={<Badge button>4</Badge>}
                >
                  Notifications
                </Button>
                <Button
                  icon={PiBellBold}
                  color="danger"
                  className="mr-3 mb-3"
                  accessories={<Badge button>4</Badge>}
                >
                  Notifications
                </Button>
                <Button
                  icon={PiBellBold}
                  color="dark"
                  className="mr-3 mb-3"
                  accessories={<Badge button>4</Badge>}
                >
                  Notifications
                </Button>
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </>
  );
});
