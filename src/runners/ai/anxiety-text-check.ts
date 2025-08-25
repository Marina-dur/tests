import { getConfig } from "../../config/env.js";
import { runTextCheck } from "../../services/pageTextCheck.js";

const config = getConfig();

async function runAppleWatch(): Promise<void> {
  const response = await runTextCheck(`${config.baseUrlDev ?? ""}use-cases/anxiety-stress/`);
  console.log(response);
}

runAppleWatch();
