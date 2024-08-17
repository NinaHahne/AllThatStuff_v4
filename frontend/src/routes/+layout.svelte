<script>
    // Import global styles
    import '../styles/colors.css';
    import '../styles/app.css';
</script>
  
<header>
    <nav>
        <!-- Add navigation links here -->
        <a href="/">Home</a>
        <a href="/info" target="_blank">Info</a>
        <a href="/history" target="_blank">History</a>
    </nav>
</header>

<slot />
  
<!-- <footer>
    <p>Footer content here</p>
</footer> -->
  
<style>
    header {
        color: black;
        padding: 1rem;
    }
    nav a {
        color: var(--grey);
        margin-right: 1rem;
    }
    footer {
        color: black;
        padding: 1rem;
        text-align: center;
    }
</style>
  