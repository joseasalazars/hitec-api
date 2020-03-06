import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function activity(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "activities",
    // 'Key' defines the partition key and sort key of the item to be updated
    // - 'activityId': path parameter
    Key: {
      activityId: event.pathParameters.id
    },
    // 'UpdateExpression' defines the attributes to be updated
    // 'ExpressionAttributeValues' defines the value in the update expression
    UpdateExpression: "SET name = :name",
    ExpressionAttributeValues: {
      ":name": data.name || null
    },
    // 'ReturnValues' specifies if and how to return the item's attributes,
    // where ALL_NEW returns all attributes of the item after the update; you
    // can inspect 'result' below to see how it works with different settings
    ReturnValues: "ALL_NEW"
  };

  try {
    const result = await dynamoDbLib.call("update", params);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false });
  }
}

export async function team(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "teams",
    // 'Key' defines the partition key and sort key of the item to be updated
    // - 'activityId': path parameter
    Key: {
      teamId: event.pathParameters.id
    },
    // 'UpdateExpression' defines the attributes to be updated
    // 'ExpressionAttributeValues' defines the value in the update expression
    UpdateExpression: "SET students_quantity = :students_quantity",
    ExpressionAttributeValues: {
      ":students_quantity": data.students_quantity || null
    },
    // 'ReturnValues' specifies if and how to return the item's attributes,
    // where ALL_NEW returns all attributes of the item after the update; you
    // can inspect 'result' below to see how it works with different settings
    ReturnValues: "ALL_NEW"
  };

  try {
    const result = await dynamoDbLib.call("update", params);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false });
  }
}

export async function points(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "teams",
    // 'Key' defines the partition key and sort key of the item to be updated
    // - 'activityId': path parameter
    Key: {
      teamId: event.pathParameters.id
    },
    // 'UpdateExpression' defines the attributes to be updated
    // 'ExpressionAttributeValues' defines the value in the update expression
    UpdateExpression: "SET points = :points",
    ExpressionAttributeValues: {
      ":points": data.points || null
    },
    // 'ReturnValues' specifies if and how to return the item's attributes,
    // where ALL_NEW returns all attributes of the item after the update; you
    // can inspect 'result' below to see how it works with different settings
    ReturnValues: "ALL_NEW"
  };

  try {
    const result = await dynamoDbLib.call("update", params);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false });
  }
}

export async function student(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "students",
    // 'Key' defines the partition key and sort key of the item to be updated
    // - 'activityId': path parameter
    Key: {
      userId: event.pathParameters.id
    },
    // 'UpdateExpression' defines the attributes to be updated
    // 'ExpressionAttributeValues' defines the value in the update expression
    UpdateExpression: "SET team = :team",
    ExpressionAttributeValues: {
      ":team": data.team || null
    },
    // 'ReturnValues' specifies if and how to return the item's attributes,
    // where ALL_NEW returns all attributes of the item after the update; you
    // can inspect 'result' below to see how it works with different settings
    ReturnValues: "ALL_NEW"
  };

  try {
    const result = await dynamoDbLib.call("update", params);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false });
  }
}
