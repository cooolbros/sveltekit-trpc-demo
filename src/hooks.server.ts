import { appRouter } from "$lib/server/TRPCAppRouter"
import type { Handle } from "@sveltejs/kit"
import type { HTTPHeaders } from "@trpc/client"
import { resolveHTTPResponse } from "@trpc/server/http"

export const handle: Handle = async ({ event, resolve }) => {

	if (event.url.pathname.startsWith("/api/trpc/")) {

		const result = await resolveHTTPResponse({
			createContext: async () => ({ event }),
			path: event.url.pathname.substring("/api/trpc/".length),
			req: {
				body: await event.request.text(),
				headers: <HTTPHeaders><unknown>event.request.headers,
				method: event.request.method,
				query: event.url.searchParams
			},
			router: appRouter
		})

		return new Response(
			result.body,
			{
				headers: <HeadersInit><unknown>result.headers,
				status: result.status
			}
		)
	}

	return resolve(event)
}
