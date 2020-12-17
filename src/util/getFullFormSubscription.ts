import { FormSubscription, formSubscriptionItems } from "final-form";

export function getFullFormSubscription(): FormSubscription {
  return formSubscriptionItems.reduce((result, key) => {
    result[key] = true;
    return result;
  }, {});
}
