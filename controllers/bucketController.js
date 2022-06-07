const IBM = require("ibm-cos-sdk");

function client_cos() {
    const cos = new IBM.S3({
        endpoint: process.env.ENDPOINT,
        apiKeyId: process.env.API_KEY_ID,
        serviceInstanceId: process.env.SERVICE_INSTANCE_ID,
        ibmAuthEndpoint: process.env.IBM_AUTH_ENDPOINT,
        signatureVersion: process.env.SIGNATURE_VERSION,
    });
    return cos;
}

async function getBuckets() {
    const cos = client_cos();
    try {
        // const buckets = JSON.parse(await cos.listBuckets().promise());
        const b = await cos
            .listObjects({ Bucket: "book-directory-images" })
            .promise();
        console.log(b);
        // const buckets = await cos
        //     .listObjects({ Bucket: "book-directory-images" })
        //     .promise();
        // if (buckets.Contents !== null) {
        //     buckets.Contents.forEach((content) =>
        //         console.log(`Bocket Name: ${content.Key} ${content.Size}`)
        //     );
        // }
    } catch (err) {
        console.log(err);
    }
}

async function getBucketImage(id) {
    const cos = client_cos();
    try {
        // const buckets = JSON.parse(await cos.listBuckets().promise());
        const image = cos
            .getObject({ Bucket: "book-directory-images", Key: id })
            .createReadStream();
        console.log(image);
        return image;
    } catch (err) {
        console.log(err);
        return null;
    }
}

module.exports = { getBucketImage };
