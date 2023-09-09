<script>
	import '../app.postcss';
</script>

<svelte:head>
	<title>Threlte NEXT</title>
</svelte:head>

<main class="p-5">
	<nav>
		<a class="w-8 h-8 rounded p-2 bg-gray-700" href="/">Home</a>
		<a class="w-8 h-8 rounded p-2 bg-gray-700" href="/cloth2">cloth2</a>
		<a class="w-8 h-8 rounded p-2 bg-gray-700" href="/clothFolded">clothFolded</a>
		<a class="w-8 h-8 rounded p-2 bg-gray-700" href="/drawCord">drawCord</a>
		<a class="w-8 h-8 rounded p-2 bg-gray-700" href="/wovenElastic">wovenElastic</a>
		<a class="w-8 h-8 rounded p-2 bg-gray-700" href="/overRider">overRider</a>
	</nav>
	<slot />
</main>
