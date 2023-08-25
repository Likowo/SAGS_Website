import { Link } from 'react-router-dom'; //<Link>component that renders hyperlinks that when clicked, change the URL on client-side; only without triggering an HTTP request ( i.e without refreshing  the whole page).


function NavBar() {
  return (
     <nav>
      <Link to='/home'>HOME</Link>
      &nbsp; || &nbsp;
      <Link to='/foodtrainingpage'>FOOD TRAINING</ Link>
      &nbsp; || &nbsp;
      <Link to='/alcoholtrainingpage'>ALCOHOL TRAINING </ Link>
     </nav>
    
  )
}

export default NavBar