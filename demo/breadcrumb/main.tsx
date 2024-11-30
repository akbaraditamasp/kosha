import { Breadcrumb, Card } from "#kosha";
import render from "../render-layout";

render("Breadcrumb", ["Components", "Breadcrumb"], () => (
  <>
    <div className="p-5">
      <Card>
        <Card.Head>Preview</Card.Head>
        <Card.Content>
          <div className="mb-3">
            <Breadcrumb>Dashboard</Breadcrumb>
          </div>
          <div className="mb-3">
            <Breadcrumb as="a" href="#">
              Dashboard
            </Breadcrumb>
            <Breadcrumb>Components</Breadcrumb>
          </div>
          <div>
            <Breadcrumb as="a" href="#">
              Dashboard
            </Breadcrumb>
            <Breadcrumb as="a" href="#">
              Components
            </Breadcrumb>
            <Breadcrumb>Breadcrumb</Breadcrumb>
          </div>
        </Card.Content>
      </Card>
    </div>
  </>
));
