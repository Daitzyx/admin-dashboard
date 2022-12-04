import { Route, Routes } from 'react-router-dom'

import {
  Dashboard,
  Team,
  Contacts,
  Invoices,
  Form,
  FAQ,
  Calendar,
  Bar,
  Pie,
  Line
} from '../scenes'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/form" element={<Form />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/pie" element={<Pie />} />
      <Route path="/line" element={<Line />} />
    </Routes>
  )
}
