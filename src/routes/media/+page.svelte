<script lang='ts'>
  import { mediaLinks } from "$lib/data/media";
</script>

<h1>Job and Machinery Media</h1>

{#each mediaLinks as linkList}
  <h2>{linkList.title}</h2>
  <ul>
      {#each linkList.links as link}
      <li>
          <a href={link.url} target="_blank">{link.title}</a> &ndash; {link.description}
      </li>
      {/each}
  </ul>
{/each}