import { Box, useTheme } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { tokens } from '../../theme'
import { Header } from '../../components'

export const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Freequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            debitis molestiae, vero exercitationem quibusdam omnis rerum dolor,
            voluptates esse dolorum mollitia vitae enim dolorem accusantium ab
            incidunt tempora. Quidem, consectetur?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            debitis molestiae, vero exercitationem quibusdam omnis rerum dolor,
            voluptates esse dolorum mollitia vitae enim dolorem accusantium ab
            incidunt tempora. Quidem, consectetur?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            debitis molestiae, vero exercitationem quibusdam omnis rerum dolor,
            voluptates esse dolorum mollitia vitae enim dolorem accusantium ab
            incidunt tempora. Quidem, consectetur?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            debitis molestiae, vero exercitationem quibusdam omnis rerum dolor,
            voluptates esse dolorum mollitia vitae enim dolorem accusantium ab
            incidunt tempora. Quidem, consectetur?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
