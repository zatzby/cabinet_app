<script lang="ts">
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import Typed from 'typed.js'

    // onMount(() => {
    //     if(browser) {
    //         const typewriter = new Typed("#typewriter", {
    //             strings: [
    //                 ' a team.',
    //                 ' motivated.',
    //                 ' innovaters.',
    //                 ' builders.',
    //                 ' doers.',
    //                 ' craftsmen.',
    //                 ' woodworkers.',
    //                 ' designers.',
    //                 ' creative.',
    //                 ' bold.',
    //                 ' daring.',
    //                 ' unstoppable.',
    //                 ' a community.',
    //                 ' evolving.',
    //                 ' customm',
    //             ],
    //             typeSpeed: 75,
    //             backSpeed: 25,
    //             backDelay: 1000,
    //             loop: true
    //         });
    //     }
    // });

</script>

<!-- <h1 class="flex flex-col md:flex-row"><span>We are...</span><span><span id="typewriter" class="text-purple-700"></span></span></h1> -->
<h2>Choose a resource from below:</h2>
<div>
    <p>View <a href="/jobfiles">job files</a>.</p>
    
    <p><a href="/order">Order</a> parts and supplies.</p>

    <p><a href="/upload">Upload</a> files.</p>

    <p>View machinery <a href="/guides">guides</a>.</p>
    
    <p><a href="/chat">Chat</a> with coworkers.</p>

</div>


