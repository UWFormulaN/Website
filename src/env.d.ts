/// <reference path="../.astro/types.d.ts" />

type ENV = {
  DISCORD_WEBHOOK_URL: string;
  NOTION_TOKEN: string;
  NOTION_DATABASE_ID: string;
};

type Runtime = import("@astrojs/cloudflare").Runtime<ENV>;

declare namespace App {
  interface Locals extends Runtime {}
}
