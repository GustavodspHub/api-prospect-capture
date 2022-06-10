import "dotenv/config"

export const SERVER = {
    port: process.env.PORT||9090,
    BASE_URI: process.env.BASE_URI || '',
};

export const DATABASE = {
    HOST: process.env.DATABASE_HOST||"",
    PORT: process.env.DATABASE_PORT||0,
    USERNAME: process.env.DATABASE_USERNAME||"",
    PASSWORD: process.env.DATABASE_PASSWORD||"",
    NAME: process.env.DATABASE_NAME||"",
    DIALECT: process.env.DATABASE_DIALECT||""
}