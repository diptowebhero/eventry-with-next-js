import connectMongo from "@/dbConnect/connectMongo";
import { Events } from "@/models/EventModel";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/utils";

export const getAllEvents = async () => {
  await connectMongo();
  const events = await Events.find().lean();
  return replaceMongoIdInArray(events);
};

export const getEventById = async (id) => {
  await connectMongo();
  const event = await Events.findById(id).lean();
  if (!event) {
    throw new Error("Event not found");
  }
  return replaceMongoIdInObject(event);
};
