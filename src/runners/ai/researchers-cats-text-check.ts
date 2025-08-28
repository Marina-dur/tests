import { getConfig } from "../../config/env.js";
import { runTextCheck } from "../../services/pageTextCheck.js";

const config = getConfig();

async function runHome(): Promise<void> {
  const response = await runTextCheck(`${config.baseUrlDevCats ?? ""}researchers`);
  console.log(response);
}

runHome();
