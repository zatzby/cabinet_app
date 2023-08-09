<script lang='ts'>
    import { orderLinks } from "$lib/data/order";
</script>

<h1>Order parts and supplies:</h1>

{#each orderLinks as linkList}
    <h2>{linkList.title}</h2>
    <ul>
        {#each linkList.links as link}
        <li>
            <a href={link.url} target="_blank">{link.title}</a> &ndash; {link.description}
        </li>
        {/each}
    </ul>
{/each}