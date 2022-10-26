import type { RequestEvent } from "@sveltejs/kit";
import { initTRPC } from "@trpc/server";

type Context = { event: RequestEvent }

export const t = initTRPC.context<Context>().create()
