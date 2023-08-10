import {FC} from 'react'
import Link from 'next/link'

import DashboardIcon from '@mui/icons-material/Dashboard'
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {BugReport, FormatAlignJustify} from "@mui/icons-material";

export const SidebarItems: FC = () => {
  return (
    <>
      <Link href="/snippets">
          <ListItem>
              <ListItemIcon>
                  <DashboardIcon/>
              </ListItemIcon>
              <ListItemText primary="Snippets"/>
          </ListItem>
      </Link>
      <Link href="/formatter">
          <ListItem>
              <ListItemIcon>
                  <FormatAlignJustify />
              </ListItemIcon>
              <ListItemText primary="Formatter"/>
          </ListItem>
      </Link>
        <Link href="/linter">
            <ListItem>
                <ListItemIcon>
                    <BugReport />
                </ListItemIcon>
                <ListItemText primary="Linter"/>
            </ListItem>
        </Link>
    </>
  )
}
