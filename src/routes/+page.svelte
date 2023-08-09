<script lang="ts">
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import Typed from 'typed.js'

    onMount(() => {
        if(browser) {
            const typewriter = new Typed("#typewriter", {
                strings: [
                    ' a team.',
                    ' motivated.',
                    ' innovaters.',
                    ' builders.',
                    ' doers.',
                    ' craftsmen.',
                    ' woodworkers.',
                    ' designers.',
                    ' creative.',
                    ' bold.',
                    ' daring.',
                    ' unstoppable.',
                    ' a community.',
                    ' evolving.',
                    ' customm',
                ],
                typeSpeed: 75,
                backSpeed: 25,
                backDelay: 1000,
                loop: true
            });
        }
    });

</script>

<h1 class="flex flex-col md:flex-row"><span>We are...</span><span><span id="typewriter" class="text-purple-700"></span></span></h1>
<h2>This application has been created to assist with the following tasks (Esta aplicación ha sido creada para ayudar con las siguientes tareas:):</h2>
<div>
    <p><a href="/order">Order</a> parts and supplies.</p>

    <p>View job <a href="/paperwork">paperwork</a></p>

    <p>View job and machinery photo and video <a href="/media">media</a></p>
</div>
