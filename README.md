# SvelteKit tRPC Demo Application

A SvelteKit application using tRPC

### Files

| File                                                               | Location | Info                                                                                                             | External Documentation                                    |
|--------------------------------------------------------------------|----------|------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [src/lib/server/TRPCServer.ts](src/lib/server/TRPCServer.ts)       | Server   | Intialises the tRPC server                                                                                       | https://trpc.io/docs/v10/router#initialize-trpc           |
| [src/lib/server/TRPCAppRouter.ts](src/lib/server/TRPCAppRouter.ts) | Server   | Declares and exports the `appRouter` and type `AppRouter`                                                        | https://trpc.io/docs/v10/router#defining-a-router         |
| [src/routes/api/trpc/hello.ts](src/routes/api/trpc/hello.ts)       | Server   | Exports a tRPC greeting procedure that accepts a `{ name: string }` returns a `{ message: string }`              | https://trpc.io/docs/v10/procedures#with-zod              |
| [src/lib/client/TRPCClient.ts](src/lib/client/TRPCClient.ts)       | Client   | Imports the `AppRouter` **type** and creates the tRPC client                                                     | https://trpc.io/docs/v10/vanilla#initialize-a-trpc-client |
| [src/routes/+page.svelte](src/routes/%2Bpage.svelte)               | Client   | Displays an input box and button to invoke a tRPC client request then alert the result                           | https://kit.svelte.dev/docs/routing#page-page-svelte      |
| [src/hooks.server.ts](src/hooks.server.ts)                         | Server   | Runs when SvelteKit recieves a request and and redirects requests to the tRPC server if the url path `/api/trpc` | https://kit.svelte.dev/docs/hooks#server-hooks            |
