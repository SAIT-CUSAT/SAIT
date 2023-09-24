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
      type: "date", // Use "date" type instead of "datetime"
      options: {
        dateFormat: "DD-MM-YYYY", // Specify your desired date format
      },
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date", // Use "date" type instead of "datetime"
      options: {
        dateFormat: "DD-MM-YYYY", // Specify your desired date format
      },
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
