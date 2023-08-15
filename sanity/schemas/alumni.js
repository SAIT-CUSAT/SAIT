const alumni = {
    name: 'alumni',
    title: 'Alumni',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'designation',
        title: 'Designation',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'yearOfPassout',
        title: 'Year of Passout',
        type: 'number',
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'text',
      },
      // ... other fields if needed
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  };
  
  export default alumni;
  