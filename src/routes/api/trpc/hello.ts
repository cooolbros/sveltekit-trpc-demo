import { t } from "$lib/server/TRPCServer"
import { z } from "zod"

export const helloProcedure = t
	.procedure
	.input(z.object({ name: z.string() }))
	.query(({ input }) => {
		return {
			message: `Hello ${input.name}`
		}
	})
