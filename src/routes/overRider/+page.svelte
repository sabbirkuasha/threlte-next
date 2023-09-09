<script>
	import { Canvas } from '@threlte/core';

	import { useProgress } from '@threlte/extras';
	import { tweened } from 'svelte/motion';
	import OverRiderScene from '../../lib/Scene/overRiderScene.svelte';

	const { progress } = useProgress();
	const tweenedProgress = tweened($progress, {
		duration: 800
	});

	$: tweenedProgress.set($progress);
</script>

{#if $tweenedProgress < 1}
	<progress class="progress progress-warning w-56" value={$tweenedProgress} max="1" />
{/if}

<section class="p-5">
	<div class=" ring w-full h-[800px]">
		<Canvas>
			<OverRiderScene />
		</Canvas>
	</div>
</section>
