# MongoDB $inc Operator Error
This repository demonstrates a common error encountered when using the `$inc` operator in MongoDB update queries. The error arises when attempting to increment or decrement a field that does not yet exist in a document. Without the `upsert` option set to true, the operation will fail instead of creating the field and performing the increment/decrement.
## Bug
The `bug.js` file contains code that attempts to decrement the `counter` field using `$inc`. If the `counter` field is missing, the operation will fail.  The solution involves adding the upsert option or using the $setOnInsert operator. 
## Solution
The `bugSolution.js` file demonstrates how to correct the behavior by using the `upsert` option or `$setOnInsert` operator to handle cases where the field doesn't exist.  This ensures that the operation will either create the field and update it, or just update the existing field.
