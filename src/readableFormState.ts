import type { FormApi, FormState, FormSubscription } from "final-form";
import { writable, Readable } from "svelte/store";
import { getFullFormSubscription } from "./util/getFullFormSubscription";

export const readableFormState = <T>(
  form: FormApi<T>,
  subscription: FormSubscription = getFullFormSubscription()
) => {
  const initialValue = form.getState();

  const formStateStore = writable<FormState<T>>(initialValue);

  return {
    subscribe(...args: Parameters<Readable<FormState<T>>["subscribe"]>) {
      const unsubscribeformStateStore = formStateStore.subscribe(...args);
      const unsubscribeForm = form.subscribe(
        (formState) => formStateStore.set(formState),
        subscription
      );

      return () => {
        unsubscribeformStateStore();
        unsubscribeForm();
      };
    },
  };
};
