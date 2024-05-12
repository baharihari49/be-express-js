
const express = require('express');
const cors = require('cors');
const app = express();
const verifyToken = require('./middelware/verifyToken');
const userRoutes = require('./routes/userRoutes')
const companyInformationRoutes = require('./routes/companyInformationRutes')
const companyBranchRoutes = require('./routes/companyBranchesRoutes')
const companyaDepartmentsRoutes = require('./routes/companyDepartmentsRoutes')
const CompanyBrancheCompanyDepartments = require('./routes/companyBranchCompanyDepartments')

app.use(express.json())
app.use(cors());
// app.use(cors({
//     origin: 'https://www.example.com'
//   }));
  

app.use('/api' ,userRoutes)
app.use('/api' ,companyInformationRoutes)
app.use('/api' ,companyBranchRoutes)
app.use('/api' ,companyaDepartmentsRoutes)
app.use('/api' ,CompanyBrancheCompanyDepartments)

app.listen(3001, () => {
    console.log('server berjalan di localhost 3001');
})