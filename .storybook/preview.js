import { addParameters } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";


// Changes below are causing a WSOD

// addParameters({
//   backgrounds: [
//     { name: "Default theme", value: "#ffffff", default: true },
//     { name: "Dark theme", value: "#050449" }
//   ]
// });

addDecorator(withContexts(contexts));
