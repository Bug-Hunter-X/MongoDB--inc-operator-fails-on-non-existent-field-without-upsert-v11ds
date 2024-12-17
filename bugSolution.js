```javascript
// Correct usage of $inc operator with upsert option
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{counter:-1}}, { upsert: true });
//Alternatively, use the $setOnInsert operator
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{
  $inc: { counter: -1 },
  $setOnInsert: { counter: 0 } 
});
```