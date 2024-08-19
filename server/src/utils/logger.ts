function logger(message: string, from?: string, error?: any) {
    console.log('-----------------START LOGGER------------------');
    console.log(message);
    if (error) {
        console.error(error);
    }
    console.log('-----------------END LOGGER------------------', from);
}

export default logger;