import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import MenuIcon from '@mui/icons-material/Menu';
import { signOut } from '../Login/Login';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

export default function MenuListComposition() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const cachedUser = localStorage.getItem('usuario');
    const navigate = useNavigate();

    const handleAuth = () => {
        if (cachedUser) {
            signOut();
        }
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    };


    return (
        <div>
            <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <MenuIcon sx={{ color: 'blueviolet' }} />
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                placement="bottom-start"
                transition
            >
                {({ TransitionProps }) => (
                    <Grow {...TransitionProps}>
                        {cachedUser ? (
                            <Paper className='paper'>

                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        className='menulist'
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        <MenuItem className='menu' onClick={() => { navigate('/myaccount'); handleClose(); }}>
                                            My account
                                        </MenuItem>
                                        <MenuItem className='menu' onClick={() => { handleAuth(); }}>
                                            Sign Out
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        ) : (

                            <Paper className='paper'>

                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        className='menulist'
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        <MenuItem className='menu' onClick={() => { navigate('/login'); }}>
                                            Login
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        )}
                    </Grow>
                )}
            </Popper>
        </div>
    );
}