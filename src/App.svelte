<script>
    import {Router, Route} from "svelte-navigator";
    import {Col, Container, Row} from 'sveltestrap';

    // export let name;
    import Header from "~/components/header/Header.svelte";
    import Article from "./components/main/section/Article.svelte";
    import Aside from "@side/Aside.svelte";
    import Footer from "@footer/Footer.svelte";
    // import Login from "@header/login/login.svelte"

</script>


<Container>
    <Router>
        <Header/>

        <main>

            <!--            //메인 페이지-->
                        <Route path="/">
                            <Row>
                                <Col sm="9">
                                    <div>main</div>

                                </Col>
                                <Col sm="3">
                                    <div>
                                        ChapterList
                                    </div>
                                </Col>
                            </Row>

<!--                            <Article/>-->
                        </Route>

            <!--            //블로그페이지-->
            <Route path="/blog">
                <Row class="mt-3">
                        <Col>
                            <Aside/>
                        </Col>
                        <Col md="9">
                            <Article/>
                        </Col>
                </Row>
            </Route>
        </main>
        <Footer/>

    </Router>
</Container>

<style>

</style>