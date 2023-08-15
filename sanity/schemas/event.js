const event = {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
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
              name: 'bio',
              title: 'Bio',
              type: 'text',
            },
            {
              name: 'photo',
              title: 'Photo',
              type: 'image',
            },
            {
              name: 'socialProfiles',
              title: 'Social Profiles',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'platform',
                      title: 'Platform',
                      type: 'string',
                    },
                    {
                      name: 'url',
                      title: 'URL',
                      type: 'url',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
    },
    {
      name: 'startDate',
      title: 'Event Start Date',
      type: 'datetime',
    },
    {
      name: 'endDate',
      title: 'Event End Date',
      type: 'datetime',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming', default:'upcoming' },
          { title: 'Activity', value: 'activity' },
        ],
      },
    }
    // ... other fields
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
    },
  },
};

export default event;
