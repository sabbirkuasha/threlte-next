import { get } from 'svelte/store';
import { useProgress } from '@threlte/extras';
import { tweened } from 'svelte/motion';

const { progress } = useProgress();
export const tweenedProgress = tweened(get(progress), {
	duration: 800
});
