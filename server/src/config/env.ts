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

    // supabase config
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    SUPABASE_TABLE_NAME: process.env.SUPABASE_TABLE_NAME,   

    // redis config
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,

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
    AI_KEY: process.env.AI_KEY, // chatpgt, gemeni, groqcloud keys etc


    // mailing service config
    // smtp, sendgrid, mailgun etc
    MAIL_SERVICE: process.env.MAIL_SERVICE,
    MAIL_PROVIDER: process.env.MAIL_PROVIDER,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASS: process.env.MAIL_PASS,
    MAIL_FROM: process.env.MAIL_FROM,
    MAIL_DOMAIN: process.env.MAIL_DOMAIN,
    MAIL_API_KEY: process.env.MAIL_API_KEY,
    
    // add more environment variables here
}

Object.keys(config).forEach((key) => {
    if (!config[key]) {
        throw new Error(`Environment variable ${key} is missing`);
    }
});


export default config;