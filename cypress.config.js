const { defineConfig } = require("cypress");
const XLSX = require('xlsx')
const path = require('path')
require('dotenv').config()

module.exports = defineConfig({
  allowCypressEnv: false,
  env: {
    EMAIL: process.env.email,
    PASSWORD: process.env.password,
  },

  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        readExcel(fileName) {
          const filePath = path.join(
            config.projectRoot,
            'test-data',
            fileName
          )

          const workbook = XLSX.readFile(filePath)

          const sheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[sheetName]

          return XLSX.utils.sheet_to_json(worksheet)
        }
      })

      return config
    }
  }
});