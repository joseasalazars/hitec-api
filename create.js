import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function activity(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "activities",
    Item: {
      activityId: uuid.v1(),
      name: data.name,
      points: data.points,
      createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    return failure({ status: false });
  }
}

export async function team(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "teams",
    Item: {
      teamId: uuid.v1(),
      color: data.color,
      building: data.building,
      points: 0,
      students_quantity: 0,
      createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    return failure({ status: false });
  }
}

export async function student(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "students",
    Item: {
      userId: uuid.v1(),
      name: data.name,
      last_name: data.last_name,
      phone: data.phone,
      studentId: data.student_id,
      allergies: data.allergies,
      origin: data.origin,
      team: "-",
      createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    return failure({ status: false });
  }
}
