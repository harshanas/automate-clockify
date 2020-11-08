const admin = require('firebase-admin');

const serviceAccount = require('../config/service_account.json');

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