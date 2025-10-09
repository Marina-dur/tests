import { getConfig } from "../../config/env.js";
import { runTextCheck } from "../../services/pageTextCheck.js";

const config = getConfig();

async function runAppleWatch(): Promise<void> {
  const response = await runTextCheck(`https://contentv3.petpace.com/product/collar-v3/`);
  // const response = await runTextCheck(`${config.baseUrlDev ?? ""}product/collar-v3/`);
  console.log(response);
}

runAppleWatch();
