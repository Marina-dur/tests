import { getConfig } from "../../config/env.js";
import { runTextCheck } from "../../services/pageTextCheck.js";

const config = getConfig();

async function runHIW(): Promise<void> {
  const response = await runTextCheck(`${config.baseUrlDev ?? ""}how-it-works`);
  console.log(response);
}

runHIW();
