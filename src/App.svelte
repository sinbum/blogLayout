<script>
    import {Router, Route} from "svelte-navigator";

    export let name;
    import Header from "~/components/header/Header.svelte";
    import Nav from "@nav/Nav.svelte";
    import Aside from "@side/sidebar.svelte"
    // import Login from "@header/login/login.svelte"
</script>


<Router>
    <nav>
        <Nav/>
    </nav>
    <header>
        <Header/>
    </header>


    <aside>
        <Aside/>
    </aside>


    <div class="container">
        <main>
            <Route path="/">
            </Route>
        </main>
    </div>

</Router>


<style>

</style>