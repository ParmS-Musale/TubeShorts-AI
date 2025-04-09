import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    // Define the user table with fields for id, name, email, and photoURL
    name: v.string(),
    email: v.string(),
    pictureURL: v.string(),
    credits: v.number(),
  }),
});
 