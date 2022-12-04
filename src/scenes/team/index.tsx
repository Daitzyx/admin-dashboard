import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { tokens } from '../../theme'

import { Header } from '../../components/Header'
import { mockDataTeam } from '../../data/mockData'

import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'

export const Team = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns: Array<object> = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClasName: 'name-collumn-cell'
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlight: 'left',
      align: 'left'
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1
    },
    {
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }: GridRenderCellParams) => {
        return (
          <Box
            width="60%"
            m=" 0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            sx={{
              backgroundColor:
                access === 'admin'
                  ? colors.greenAccent[600]
                  : colors.greenAccent[700]
            }}
            borderRadius="4px"
          >
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'user' && <LockOpenOutlinedIcon />}
            <Typography
              color={colors.grey[100]}
              sx={{
                ml: '5px'
              }}
            >
              {access}
            </Typography>
          </Box>
        )
      }
    }
  ]

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none'
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none'
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300]
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700]
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400]
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700]
          }
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns as GridColDef[]} />
      </Box>
    </Box>
  )
}