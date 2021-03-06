import { storiesOf } from "@storybook/react";
import * as React from "react";

import OrderHistory from "../../../orders/components/OrderHistory";
import { order as orderFixture } from "../../../orders/fixtures";
import Decorator from "../../Decorator";

const order = orderFixture("");

storiesOf("Orders / OrderHistory", module)
  .addDecorator(Decorator)
  .add("default", () => (
    <OrderHistory
      user={{ email: "admin@example.com" }}
      history={order.events}
    />
  ));
