import "dotenv/config"
import "reflect-metadata"
import { DataSource } from "typeorm";

const port = process.env.PORT as number | undefined

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST,
    port: port,
    username: process.env.USER,
    password: process.env.PASS,
    database: process.env.NAME
})