<script>
	import { Canvas } from '@threlte/core';
	import { Theatre } from '@threlte/theatre';

	import { useProgress } from '@threlte/extras';
	import { tweened } from 'svelte/motion';
	import WovenElasticScene from '../../lib/Scene/WovenElasticScene.svelte';

	const { progress } = useProgress();
	const tweenedProgress = tweened($progress, {
		duration: 800
	});

	$: tweenedProgress.set($progress);

	import { Studio } from '@threlte/theatre';
	// Using SvelteKit
	import { dev } from '$app/environment';
</script>

<svelte:head>
	<title>Woven Elastic</title>
</svelte:head>

{#if $tweenedProgress < 1}
	<progress class="progress progress-warning w-56" value={$tweenedProgress} max="1" />
{/if}

<Studio enabled={dev} />
<section class="p-5">
	<div class=" ring w-full h-[800px]">
		<Canvas>
			<Theatre>
				<WovenElasticScene />
			</Theatre>
		</Canvas>
	</div>
</section>
