import { Nav, NavigationLink } from './Navigation.styled';

function Navigation() {
  return (
    <Nav>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/movies">Movies</NavigationLink>
    </Nav>
  );
}

export default Navigation;
