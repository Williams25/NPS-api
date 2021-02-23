export default {
  "type": "sqlite",
  "database": "./src/database/database.sqlite",
  "migrations": [
    "./src/migrations/**.ts"
  ],
  "entities": [
    "./src/models/**ts"
  ],
  "cli": {
    "migrationsDir": "./src/migrations"
  }
}