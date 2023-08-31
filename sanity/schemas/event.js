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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
      name: 'speakers',
      title: 'Speakers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'socialProfileUrl',
              title: 'Social Profile URL',
              type: 'url',
            },
          ],
        },
      ],
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
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming', default: 'upcoming' },
          { title: 'Activity', value: 'activity' },
        ],
      },
    }
  ],
};

export default event;
