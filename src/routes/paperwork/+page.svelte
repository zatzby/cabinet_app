<script lang='ts'>
    import { paperworkLinks } from "$lib/data/paperwork";
</script>

<h1>View job paperwork</h1>
<h3>FILLER: BUTTON TO ADD NEW JOB PROJECT</h3>

{#each paperworkLinks as linkList}
    <h2>{linkList.title}</h2>
    <ul>
        {#each linkList.links as link}
        <li>
            <a href={link.url} target="_blank">{link.title}</a> &ndash; {link.description}
        </li>
        {/each}
    </ul>
{/each}