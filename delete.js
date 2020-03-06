import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function activity(event, context) {
  const params = {
    TableName: "activities",
    // 'Key' defines the partition key and sort key of the item to be removed
    // - 'activityId': path parameter
    Key: {
      activityId: event.pathParameters.id
    }
  };

  try {
    const result = await dynamoDbLib.call("delete", params);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false });
  }
}

export async function team(event, context) {
  const params = {
    TableName: "teams",
    // 'Key' defines the partition key and sort key of the item to be removed
    // - 'activityId': path parameter
    Key: {
      teamId: event.pathParameters.id
    }
  };

  try {
    const result = await dynamoDbLib.call("delete", params);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false });
  }
}
