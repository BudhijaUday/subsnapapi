import {config} from 'dotenv';
config({path: `.env.${process.env.NODE_ENV || 'development'}.local`});

// export const PORT = process.env.PORT || 3000;
// export const NODE_ENV = process.env.NODE_ENV || 'development';
// export const DB_URI = process.env.DB_URI || process.env;

export const { 
    PORT, NODE_ENV,
    DB_URI,
    JWT_SECRET, JWT_EXPIRES_IN,
    ARCJET_ENV, ARCJET_API_KEY,
    QSTASH_TOKEN, QSTASH_URL,
    EMAIL_PASSWORD,
} = process.env;