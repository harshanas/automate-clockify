require('dotenv').config()
const admin = require('firebase-admin');

const serviceAccount = JSON.parse(Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT, 'base64').toString('ascii'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function getClockifyTags(projectId){
    let tags = [];
    const clockifyTagsRef = db.collection('clockify_tags');
    const queryRef = await clockifyTagsRef.where('projectIds', 'array-contains', projectId).get();
    queryRef.docs.forEach(element => {
        tags.push(element.data().tagId);
    });
    return tags;
}

module.exports = { getClockifyTags}