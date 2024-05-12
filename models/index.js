const db = require('../config/db')
const dataColoumCompanyInformation = require('./CompanyInformation')
const dataColoumUser = require('./User')
const dataColomCompanyBranch = require('./CompanyBranches')
const dataColomCompanyDepartments = require('./CompanyDepartments')
const dataColomCompanyBranchCompanyDepartments = require('./CompanyBrancheCompanyDepartments')

const CompanyInformation = db.define('company_informations', dataColoumCompanyInformation)
const User = db.define('users', dataColoumUser)
const CompanyBranch = db.define('company_branches', dataColomCompanyBranch)
const CompanyDepartments = db.define('company_departments', dataColomCompanyDepartments)
const CompanyBrancheCompanyDepartments = db.define('company_branch_company_departments', dataColomCompanyBranchCompanyDepartments)

CompanyInformation.hasMany(User,{foreignKey: 'company_code'})
User.belongsTo(CompanyInformation, { foreignKey: 'company_code' });
CompanyBranch.belongsTo(CompanyInformation,{foreignKey: 'company_code'})
CompanyInformation.hasMany(CompanyBranch, {foreignKey: 'company_code', onDelete: 'CASCADE', hooks: true})

CompanyBranch.belongsToMany(CompanyDepartments, {through: CompanyBrancheCompanyDepartments, foreignKey: 'branch_id' , onDelete:'CASCADE', hooks: 
true})

CompanyBranch.hasMany(CompanyBrancheCompanyDepartments, {
    foreignKey: 'branch_id',
    onDelete: 'CASCADE',
    hooks: true,
    as: 'branchId' // New unique alias
  });
  
  CompanyBrancheCompanyDepartments.belongsTo(CompanyBranch, {
    foreignKey: 'branch_id',
  });
  

CompanyDepartments.belongsToMany(CompanyBranch, {foreignKey: 'departments_id' ,through: CompanyBrancheCompanyDepartments})


module.exports = {CompanyInformation, User, CompanyBranch, CompanyDepartments, CompanyBrancheCompanyDepartments}