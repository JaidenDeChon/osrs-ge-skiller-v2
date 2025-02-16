import type { PageLoad } from './$types';
import type { GameItem } from '$lib/models/game-item';

export const load: PageLoad = async ({ fetch, url }) => {
    const pathname = url.pathname;

    const response = await fetch('/api/game-items');
    const gameItems: GameItem[] = await response.json();

    return { gameItems, pathname };
};
