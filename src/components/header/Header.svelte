<script lang="ts">
    import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        Dropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem
    } from 'sveltestrap';

    let isOpen = false;

    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }

    import {Router, Link, Route} from 'svelte-navigator';

</script>

<Router primary="{false}">

    <Navbar light expand="md" style="min-height: 150px">
        <NavbarBrand>
            <Link to="/" style="text-decoration: none;"><h1>기 록 일 보</h1></Link>
        </NavbarBrand>
        <NavbarToggler on:click={() => (isOpen = !isOpen)}/>
        <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
            <Nav class="ms-auto" navbar>
                <NavItem>
                    <NavLink>
                        <Link to="/" style="text-decoration: none;">1면</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="blog" style="text-decoration: none;">기록</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/sinbum">깃헙</NavLink>
                </NavItem>
                <Dropdown nav inNavbar>
                    <DropdownToggle nav caret>선택</DropdownToggle>
                    <DropdownMenu end>
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Nav>
        </Collapse>
    </Navbar>

<!--<Link to="blog" component="{BlogList}" style="text-decoration: none;">기록클릭</Link>-->


</Router>
<style>


    h1 {
        font-family: ChosunLo;
        font-weight: bold;
        font-size: 54px;
    }

</style>