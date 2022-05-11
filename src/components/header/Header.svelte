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

   import {Link} from 'svelte-navigator';

</script>

<Navbar color="light" light expand="md">

   <NavbarBrand><Link to="/" style="text-decoration: none;">기록보단 기억을</Link></NavbarBrand>
   <NavbarToggler on:click={() => (isOpen = !isOpen)} />
   <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar>
         <NavItem>
            <NavLink><Link to="/blog" style="text-decoration: none;" >기록</Link></NavLink>
         </NavItem>
         <NavItem>
            <NavLink href="https://github.com/sinbum">깃헙</NavLink>
         </NavItem>
         <Dropdown nav inNavbar>
            <DropdownToggle nav caret>선택</DropdownToggle>
            <DropdownMenu end>
               <DropdownItem>Option 1</DropdownItem>
               <DropdownItem>Option 2</DropdownItem>
               <DropdownItem divider />
               <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
         </Dropdown>
      </Nav>
   </Collapse>
</Navbar>

<style>






</style>