/**
 * Task.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,

  attributes: {

    taskId: {
      type: "string",
      required: true,
      unique: true
    },
    taskDescription: {
      type: "text",
      required: true
    },
    taskOwners: {
      type: "text",
      required: true
    },
    taskStatus: {
      type: "string",
      required: true
    },
    taskOthers: {
      type: "text"
    }

  }
};
