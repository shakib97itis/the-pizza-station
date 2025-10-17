import React from "react";
import { useFetcher } from "react-router";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

const UpdateOrder = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary" disabled={fetcher.state === "submitting"}>
        Update Priority
      </Button>
    </fetcher.Form>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ params }) => {
  await updateOrder(params.orderId, { priority: true });
  return null;
};

export default UpdateOrder;
