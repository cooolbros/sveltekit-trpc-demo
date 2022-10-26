<script lang="ts">
	import { trpc } from "$lib/client/TRPCClient"

	let name = ""

	async function click() {
		const greeting = await trpc.hello.query({ name: name })
		alert(greeting.message)
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<label for="name">Name:</label>
<input id="name" bind:value={name} />

<button on:click={click}>Get greeting from tRPC</button>
