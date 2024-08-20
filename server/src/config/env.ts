require('dotenv').config();


const config: { [key: string]: any } = {
    PORT: process.env.PORT,

    // firebase config
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    FIREBASE_COLLECTION_NAME: process.env.FIREBASE_COLLECTION_NAME,

    // jwt secret
    JWT_SECRET: process.env.JWT_SECRET,

    // mongodb config
    MONGO_URI: process.env.MONGO_URI,
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,
    MONGO_COLLECTION_NAME: process.env.MONGO_COLLECTION_NAME,
    MONGO_COLLECTION_NAME2: process.env.MONGO_COLLECTION_NAME2,

    // supabase config
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    SUPABASE_TABLE_NAME: process.env.SUPABASE_TABLE_NAME,   

    // mysql config
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,

    // s3 config
    S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
    S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
    S3_SECRET_KEY: process.env.S3_SECRET_KEY,
    S3_REGION: process.env.S3_REGION,


    // cors origin
    CORS_ORIGIN: process.env.CORS_ORIGIN,


    // ai chatbot config    
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,


    // mailing service config
    // smtp, sendgrid, mailgun etc
    MAIL_PROVIDER: process.env.MAIL_PROVIDER,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASS: process.env.MAIL_PASS,
    MAIL_FROM: process.env.MAIL_FROM,
    MAIL_DOMAIN: process.env.MAIL_DOMAIN,
    MAIL_API_KEY: process.env.MAIL_API_KEY,
    

    // apis
    NYTIMES_API_KEY: process.env.NYTIMES_API_KEY,

    // googleapis
    GOOGLE_PROJECT_KEY: process.env.GOOGLE_PROJECT_KEY,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    GOOGLE_CX: process.env.GOOGLE_CX,
}

Object.keys(config).forEach((key) => {
    if (!config[key]) {
        throw new Error(`Environment variable ${key} is missing`);
    }
});


export default config;