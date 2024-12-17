```javascript
// Incorrect usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{counter:-1}});
//This will fail if the counter field does not exist and the upsert option is not used
```