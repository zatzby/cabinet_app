<script lang='ts'>
  import { Fileupload, Label } from 'flowbite-svelte'
  let value;
</script>


<Label class="space-y-2 mb-2">
  <span>Upload file</span>
  <Fileupload bind:value/>
</Label>

<Label>File: {value }</Label>





