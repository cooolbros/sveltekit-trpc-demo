import { appRouter } from "$lib/server/TRPCAppRouter"
import type { Handle } from "@sveltejs/kit"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

export const handle: Handle = async ({ event, resolve }) => {

	if (event.url.pathname.startsWith("/api/trpc/")) {
		return await fetchRequestHandler<typeof appRouter>({
			router: appRouter,
			createContext: () => ({ event }),
			req: event.request,
			endpoint: "api/trpc"
		})
	}

	return resolve(event)
}
