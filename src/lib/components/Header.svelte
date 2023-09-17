<script lang="ts">
    import ProfileMenu from "./ProfileMenu.svelte";
    import { page } from '$app/stores';
</script>

<div class="container border-b border-black/20 dark:border-white/20 mx-auto py-6 flex flex-col gap-6 md:flex-row md:gap-0 items-center justify-between">
    <a href="/" class="no-underline"><h1 class="whitespace-nowrap text-3xl font-black">Shop App</h1></a>
    <div class="flex flex-row gap-6 items-center">
        <div class="flex flex-row gap-4 items-center">
            <a class="navLink no-underline md:text-xl font-semibold {$page.url.pathname.includes('jobfiles') ? 'active' : ''}" href="/jobfiles">Job Files</a>
            <a class="navLink no-underline md:text-xl font-semibold {$page.url.pathname.includes('order') ? 'active' : ''}" href="/order">Order</a>
            <a class="navLink no-underline md:text-xl font-semibold
            {$page.url.pathname.includes('upload') ? 'active' : ''}"
            href="/guides">Guides</a>
            <a class="navLink no-underline md:text-xl font-semibold
            {$page.url.pathname.includes('chat') ? 'active' : ''}"
            href="/chat">Chat</a>
            <a class="navLink no-underline md:text-xl font-semibold
            {$page.url.pathname.includes('admin') ? 'active' : ''}"
            href="/admin">Admin</a>
        </div>
        <!-- <ProfileMenu on:logout on:login /> -->
    </div>
</div>
