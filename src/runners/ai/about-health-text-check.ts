import { getConfig } from "../../config/env.js";
import { runTextCheck } from "../../services/pageTextCheck.js";

const config = getConfig();

async function runAppleWatch(): Promise<void> {
  const response = await runTextCheck(`${config.baseUrlDev ?? ""}disease-management/`);
  console.log(response);
}

runAppleWatch();
