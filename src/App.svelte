<script>
    import {Router, Route} from "svelte-navigator";

    export let name;
    import Header from "~/components/header/Header.svelte";
    import Nav from "@nav/Nav.svelte";
    import Aside from "@side/sidebar.svelte";
    import SectionSample from "@section/sectionSample.svelte";
    // import Login from "@header/login/login.svelte"
</script>


<Router>

    <Nav/>
    <Header/>
    <Aside/>

    <main>
        <Route path="/">
<!--            <SectionSample/>-->
        </Route>

        <Route path="/blog">
            <SectionSample/>
        </Route>

    </main>


</Router>


<style>

</style>