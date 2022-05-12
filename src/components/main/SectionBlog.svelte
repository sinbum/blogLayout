<script>
    import {Router,Route} from "svelte-navigator";
    import {Col, Row} from 'sveltestrap';
    import Aside from "./sidebar/Aside.svelte";
    import BlogList from "./blogListPage/BlogList.svelte";

</script>
<!--            //블로그페이지-->
    <!--            <Route path="/">-->

    <Row class="mt-2">
        <Col lg="2" md="12">
            <Aside/>
        </Col>
        <Col lg="10" md="12" >
            <!--                            <Article/>-->
            <BlogList/>
        </Col>
    </Row>
