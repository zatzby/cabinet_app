import { writable } from 'svelte/store';
import NDK from '@nostr-dev-kit/ndk';

const ndk = new NDK({
    explicitRelayUrls: [
        // 'ws://localhost:8080'
        'wss://purplepag.es',
        'wss://relay.nostr.band',
        'wss://nos.lol',
        'wss://relay.snort.social',
        'wss://relay.damus.io'
    ],
    debug: false
});

ndk.connect()
    // .then(() => console.log('Connected'))
    .catch((e) => console.error(e));

// Create a singleton instance that is the default export
const ndkStore = writable(ndk);

export default ndkStore;
