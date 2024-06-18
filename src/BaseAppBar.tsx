import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const headerNav = [
  {
    role: "inspector",
    title: "Проверяющий"
  },
  {
    role: "general-manager",
    title: "Главный менеджер"
  },
  {
    role: "projects",
    title: "Назначение проектов и форм"
  },
  {
    role: "manager",
    title: "Менеджер"
  },
  {
    role: "web-engineer",
    title: "Веб-инженер"
  },
]

interface Props {
  onSelectRole: (role: string) => void;
}

export const BaseAppBar: React.FC<Props> = ({onSelectRole}) => {
  // const handleCloseNavMenu = () => {}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {headerNav.map((page) => (
              <Button
                key={page.role}
                onClick={() => onSelectRole(page.role)}
                style={{marginRight: "15px"}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

