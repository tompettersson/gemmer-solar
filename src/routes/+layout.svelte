<script>
	import '../app.css';
	import Footer from '../lib/Footer.svelte';
	import Navbar from '../lib/Navbar.svelte';
    import Message from '../lib/Message.svelte';
</script>
<Message />
<Navbar />
<slot />
<Footer />
