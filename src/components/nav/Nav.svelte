<script>
    import {Link} from 'svelte-navigator';

</script>

<!--<ul class="navbar navbar-light" style="background-color: #e3f2fd;">-->
<!--    <li class="nav-item">-->
<!--        <Link to="/" class="nav-link">Home</Link>-->
<!--    </li>-->
<!--    <li class="nav-item">-->
<!--        <Link to="about" class="nav-link">About</Link>-->
<!--    </li>-->
<!--    &lt;!&ndash;    <li class="nav-item"><Link to="login" class="nav-link">Login</Link></li>&ndash;&gt;-->
<!--</ul>-->

<!--<nav class="navbar navbar-expand-lg navbar-light bg-light">-->
<!--    <div class="container-fluid">-->
<!--        <Link to="/" class="nav-link">기록보단 기억을</Link>-->
<!--        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"-->
<!--                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">-->
<!--            <span class="navbar-toggler-icon"></span>-->
<!--        </button>-->

<!--        <div class="collapse navbar-collapse" id="navbarText">-->

<!--            <ul class="navbar-nav me-auto mb-2 mb-lg-0">-->
<!--&lt;!&ndash;                <li class="nav-item">&ndash;&gt;-->
<!--&lt;!&ndash;                    <a class="nav-link active" aria-current="page" href="#">Home</a>&ndash;&gt;-->
<!--&lt;!&ndash;                </li>&ndash;&gt;-->
<!--                <li class="nav-item">-->
<!--                    <Link to="about" class="nav-link">About</Link>-->
<!--                </li>-->

<!--                <li class="nav-item">-->
<!--                    <Link to="blog" class="nav-link">Blog</Link>-->
<!--                </li>-->
<!--            </ul>-->
<!--            <span class="navbar-text">-->
<!--                Sinbum's Dev NotionLink.-->
<!--             </span>-->

<!--        </div>-->
<!--    </div>-->
<!--</nav>-->

<!--<Link to="about" class="nav-link">About</Link>-->
<!--<Link to="blog" class="nav-link">Blog</Link>-->


    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
            <span class="fs-4">기록보단 기억을</span>
        </a>

        <ul class="nav nav-pills">
            <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Features</a></li>


            <li class="nav-item"><Link to="blog" class="nav-link">Blog</Link></li>
            <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
            <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        </ul>
    </header>



<style>
    /*.bd-placeholder-img {*/
    /*    font-size: 1.125rem;*/
    /*    text-anchor: middle;*/
    /*    -webkit-user-select: none;*/
    /*    -moz-user-select: none;*/
    /*    user-select: none;*/
    /*}*/

    /*@media (min-width: 768px) {*/
    /*    .bd-placeholder-img-lg {*/
    /*        font-size: 3.5rem;*/
    /*    }*/
    /*}*/

    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
    }

    @media (min-width: 768px) {
        .bd-placeholder-img-lg {
            font-size: 3.5rem;
        }
    }

</style>

