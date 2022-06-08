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

async function addImage({ key, image }) {
    const cos = client_cos();
    return cos
        .putObject({
            Bucket: "book-directory-images",
            Key: key,
            Body: image,
        })
        .promise()
        .then(() => {
            return true;
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
}

async function getBucketImage(id) {
    const cos = client_cos();
    try {
        // const buckets = JSON.parse(await cos.listBuckets().promise());
        const image = cos
            .getObject({ Bucket: "book-directory-images", Key: id })
            .createReadStream();
        return image;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function deleteImage(id) {
    const cos = client_cos();

    return cos
        .deleteObject({ Bucket: "book-directory-images", Key: id })
        .promise()
        .then(() => {
            return true;
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
}

module.exports = { getBucketImage, addImage, deleteImage };
