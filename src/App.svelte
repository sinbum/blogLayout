<script>
    import {Router, Route} from "svelte-navigator";
    import {Col, Container, Row} from 'sveltestrap';

    // export let name;
    import Header from "~/components/header/Header.svelte";
    import Footer from "@footer/Footer.svelte";

    import SectionBlog from "./components/main/SectionBlog.svelte";
    import SectionMain from "./components/main/SectionMain.svelte";

    // import Login from "@header/login/login.svelte"


    function createAnnouncement(route, location) {
        const viewName = route.meta.name;
        const {pathname} = location;
        return `Navigated to the ${viewName} view at ${pathname}`;
    }

    //그리드 브레이크 아웃포인트
    //     xs: 0,
    //     sm: 576px,
    //     md: 768px,
    //     lg: 992px,
    //     xl: 1200px,
    //     xxl: 1400px

</script>

<Router a11y="{{createAnnouncement}}">

    <Row>
        <Col sm="12" md={{ size: 10, offset: 1 }}>
            <Header/>

            <Route path="/" component="{SectionMain}"/>
            <!--            <Route path="blog" component="{SectionBlog}"/>-->

            <Route path="blog/*">
                <Route path="/" component="{SectionBlog}"/>
                <!--                <Route path=":id" component={BlogPost} />-->
            </Route>


            <Footer/>
        </Col>
    </Row>
</Router>
<style>

</style>