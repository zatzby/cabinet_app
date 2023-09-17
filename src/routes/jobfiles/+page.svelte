<script lang='ts'>
    import { jobfilesLinks } from "$lib/data/jobfiles";
</script>

<h1>View job paperwork</h1>


{#each jobfilesLinks as linkList}
    <h2>{linkList.title}</h2>
    <ul>
        {#each linkList.links as link}
        <li>
            <a href={link.url} target="_blank">{link.title}</a> &ndash; {link.description}
        </li>
        {/each}
    </ul>
{/each}