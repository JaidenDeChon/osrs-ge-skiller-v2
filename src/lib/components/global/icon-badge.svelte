<script lang="ts">
    import { Badge } from '../ui/badge';
    import type { Snippet } from 'svelte';

    const { icon, text }: { icon: Snippet; text?: string } = $props();
</script>

<Badge class="gap-2" variant="secondary">
    {@render icon()}
    {text}
</Badge>
