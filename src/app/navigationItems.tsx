import {FC} from 'react'
import Link from 'next/link'

import DashboardIcon from '@mui/icons-material/Dashboard'
import SettingsIcon from '@mui/icons-material/Settings'
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";

export const SidebarItems: FC = () => {
  return (
    <>
      <Link href="snippets">
          <ListItem>
              <ListItemIcon>
                  <DashboardIcon/>
              </ListItemIcon>
              <ListItemText primary="Snippets"/>
          </ListItem>
      </Link>
      <Link href="settings">
          <ListItem>
              <ListItemIcon>
                  <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings"/>
          </ListItem>
      </Link>
    </>
  )
}
