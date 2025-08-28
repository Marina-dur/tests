import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export type AppConfig = {
  baseUrlDev?: string;
  openAiKey?: string;
  baseUrlDevCats?: string;
};

export function getConfig(): AppConfig {
  return {
    baseUrlDev: process.env.BASE_URL_DEV,
    openAiKey: process.env.OPENAI_API_KEY,
    baseUrlDevCats: process.env.BASE_URL_DEV_CATS,
  };
}
