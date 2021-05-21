import './Nav.component.scss';
import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import HelpIcon from '@material-ui/icons/Help';	
import { WbSunny, NightsStay } from '@material-ui/icons';
import Context from '../../context';

export default function Nav() { 
  const [value, setValue] = React.useState(0);
  const context = useContext(Context);

  const hazDia=()=>{context.hazDia();}
  const hazNoche=()=>{context.hazNoche();}

  return (
    <Context.Consumer>
    {context => (
      <BottomNavigation
        value={value} onChange={(event, newValue) => {setValue(newValue);}} 
        showLabels
        className={context.isDeDia?"Nav navDia":"Nav navNoche"}
      >
        <Link to='/'>
          <BottomNavigationAction className="Nav-link" label="Home" icon={<HomeIcon />} />
        </Link>
        <Link to='/store'><BottomNavigationAction className="Nav-link" label="Favorites" icon={<WorkIcon />} /></Link>
        <Link to='/about'><BottomNavigationAction className="Nav-link" label="About" icon={<HelpIcon />} /></Link>
        {context.isDeDia?
          <BottomNavigationAction onClick={hazNoche} className="Nav-link" label="Noche/Día" icon={<NightsStay />} />:
          <BottomNavigationAction onClick={hazDia} className="Nav-link" label="Noche/Día" icon={<WbSunny />} />}
      </BottomNavigation> 
    )}
    </Context.Consumer>
  );
}