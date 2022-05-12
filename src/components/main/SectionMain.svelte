<script>
    import {Col, Row} from 'sveltestrap';
</script>
<Row>
    <Col md="9" xl="10">
        <div class="ad-top">ad-top</div>
        <div class="ad-top-second">ad-top</div>
        <Row>
            <Col sm="4">
                <div class="menu-left">a</div>
            </Col>
            <Col sm="4">
                <div class="menu-center">b
                </div>
            </Col>
            <Col sm="4">
                <div class="menu-right">

                </div>
                <div class="menu-right-bottom">d</div>
            </Col>
        </Row>
    </Col>

    <Col md="3" xl="2">
        <div class="ad-side">
            ChapterList
        </div>
    </Col>


</Row>

<style>
    div {
        border: solid 1px;
    }

    .ad-side {
        height: 650px;
    }

    .ad-top {
        height: 130px;
    }

    .ad-top-second {
        height: 180px;
    }

    .menu-left{
        height: 500px;
    }

    .menu-center{
        height: 500px;
    }

    .menu-right{
        height: 300px;
    }

</style>