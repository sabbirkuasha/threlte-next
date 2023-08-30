<script>
	import { Canvas } from '@threlte/core';
	import Scene1 from '../lib/Scene/Scene1.svelte';
	import { useProgress } from '@threlte/extras';
	import { tweened } from 'svelte/motion';
	import { fade } from 'svelte/transition';

	const { progress } = useProgress();
	const tweenedProgress = tweened($progress, {
		duration: 800
	});

	$: tweenedProgress.set($progress);
</script>

{#if $tweenedProgress < 1}
	<progress class="progress progress-warning w-56" value={$tweenedProgress} max="1" />
{/if}
<div class=" w-full h-[800px]">
	<Canvas>
		<Scene1 />
	</Canvas>
</div>
