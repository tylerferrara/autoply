<script>
    import planet from '$lib/images/planet.svg';
	import './styles.css';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home page" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700;900&display=swap" rel="stylesheet">

</svelte:head>

<section class="center fill">

    <img src={planet} alt="" class="logo" />

    <div class="welcome-header">
        <h1>Be the first to apply to jobs</h1>
        <h1 class="center-text">with Autoply</h1>
    </div>
    
    
    <h3>1. Create your application</h3>
    <h3>2. Choose job criteria</h3>
    <h3>3. Auto apply!</h3>

    <div id="g_id_onload"
    data-client_id="654778206290-ent7ius2br35huf06t5pcuutirf6fmo1.apps.googleusercontent.com"
    data-context="signin"
    data-ux_mode="popup"
    data-login_uri="https://localhost:5173/api"
    data-auto_prompt="false">
</div>

<div class="g_id_signin"
    data-type="standard"
    data-shape="pill"
    data-theme="filled_black"
    data-text="signin_with"
    data-size="large"
    data-logo_alignment="left">
</div>
    
    <a style="margin-top: 1rem;" href="/begin">
        <button class="action-btn">Let's go</button>
    </a>

</section>

<style>
    .logo {
        width: 14rem;
    }
    .welcome-header > * {
        margin: 0;
        padding: 0;
    }
</style>
