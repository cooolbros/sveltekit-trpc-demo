import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import type { AppRouter } from "../server/TRPCAppRouter"

export const trpc = createTRPCProxyClient<AppRouter>({
	links: [
		httpBatchLink({
			url: "/api/trpc"
		})
	]
})
