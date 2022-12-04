import { Box } from '@mui/material'

import { Header, BarChart } from '../../components'

export const Bar = ({ isDashboard = false }) => {
  return (
    <Box m="20px">
      <Header title="Bar CHart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  )
}
