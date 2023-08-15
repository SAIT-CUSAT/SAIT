const executive = {
    name: 'executive',
    title: 'Executive',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
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
  
  export default executive;
  