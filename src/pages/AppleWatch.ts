import { getConfig } from "../config/env";
import { runTextCheck } from "../services/pageTextCheck";

const config = getConfig();

async function runAppleWatch(): Promise<void> {
  const response = await runTextCheck(`${config.baseUrlDev ?? ""}what-you-get/apple-watch`);
  console.log(response);
}

runAppleWatch();
