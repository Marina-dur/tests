import { getConfig } from "../config/env";
import { runTextCheck } from "../services/pageTextCheck";

const config = getConfig();

async function runHIW(): Promise<void> {
  const response = await runTextCheck(`${config.baseUrlDev ?? ""}how-it-works`);
  console.log(response);
}

runHIW();
