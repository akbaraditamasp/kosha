import { Button, Card } from "#kosha";
import render from "../render-layout";

render("Card", ["Components", "Card"], () => {
  return (
    <>
      <div className="p-5 grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-5">
        <Card className="flex-1">
          <Card.Head color="default">Default Card</Card.Head>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Content>
          <Card.Footer>Card Footer</Card.Footer>
        </Card>
        <Card className="flex-1">
          <Card.Head color="primary">Primary Card</Card.Head>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Content>
          <Card.Footer>Card Footer</Card.Footer>
        </Card>
        <Card className="flex-1">
          <Card.Head color="secondary">Secondary Card</Card.Head>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Content>
          <Card.Footer>Card Footer</Card.Footer>
        </Card>
        <Card className="flex-1">
          <Card.Head color="info">Info Card</Card.Head>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Content>
          <Card.Footer>Card Footer</Card.Footer>
        </Card>
        <Card className="flex-1">
          <Card.Head color="warning">Warning Card</Card.Head>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Content>
          <Card.Footer>Card Footer</Card.Footer>
        </Card>
        <Card className="flex-1">
          <Card.Head color="danger">Danger Card</Card.Head>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Content>
          <Card.Footer>Card Footer</Card.Footer>
        </Card>
        <Card className="flex-1">
          <Card.Head color="success">Success Card</Card.Head>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Content>
          <Card.Footer>Card Footer</Card.Footer>
        </Card>
        <Card className="flex-1">
          <Card.Head color="light">Light Card</Card.Head>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Content>
          <Card.Footer>Card Footer</Card.Footer>
        </Card>
        <Card className="flex-1">
          <Card.Head color="dark">Dark Card</Card.Head>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Content>
          <Card.Footer>Card Footer</Card.Footer>
        </Card>
      </div>
      <div className="p-5 grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-5">
        <Card className="flex-1">
          <Card.Head>Basic Card</Card.Head>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Card.Content>
          <Card.Footer className="flex justify-start items-center space-x-5">
            <a href="#">Card Link</a>
            <a href="#">Another Link</a>
          </Card.Footer>
        </Card>
        <Card className="flex-1">
          <Card.Head>Card with Action Button</Card.Head>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Card.Content>
          <Card.Footer className="flex justify-end">
            <Button type="button">Submit</Button>
          </Card.Footer>
        </Card>
        <Card className="flex-1">
          <Card.Head>Card Footer Background</Card.Head>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Card.Content>
          <Card.Footer className="bg-neutral-50">Card Footer</Card.Footer>
        </Card>
      </div>
    </>
  );
});
