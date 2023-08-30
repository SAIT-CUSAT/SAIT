const event = {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "datetime",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "datetime",
    },
    {
      name: "venue",
      title: "Venue",
      type: "string",
    },
    {
      name: "speakers",
      title: "Speakers",
      type: "array",
      of: [{ type: "reference", to: [{ type: "speaker" }] }],
    },
    {
      name: "isCompleted",
      title: "Is Completed",
      type: "boolean",
    },
  ],
};

export default event;
