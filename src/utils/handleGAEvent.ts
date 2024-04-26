import ReactGA from "react-ga4";

export interface IGAEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
  transport?: "beacon" | "xhr" | "image";
}

const handleGAEvent = (event: IGAEvent) => {
  ReactGA.event({
    category: event.category,
    action: event.action,
    label: event.label, // optional
    value: event.value, // optional, must be a number
    nonInteraction: event.nonInteraction, // optional, true/false
    transport: event.transport, // optional, beacon/xhr/image
  });
};

export default handleGAEvent;
