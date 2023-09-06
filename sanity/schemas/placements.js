const placement = {
    name: 'placement',
    title: 'Placement',
    type: 'document',
    fields: [
      {
        name: 'companyName',
        title: 'Company Name',
        type: 'string',
      },
      {
        name: 'website',
        title: 'Website Link',
        type: 'string',
      },
      {
        name: 'designationOffering',
        title: 'Designation Offering',
        type: 'string',
      },
      {
        name: 'packageOffered',
        title: 'Average Package Offered (in Lakhs)',
        type: 'string',
      },
      {
        name: 'numberOfAlumni',
        title: 'Number of Previous Alumni',
        type: 'number',
      },
      {
        name: 'numberOfEmployees',
        title: 'Number of Employees',
        type: 'number',
      },
      {
        name: 'logo',
        title: 'Logo',
        type: 'image', // Use 'image' type to store company logos
      },
      // ... other fields you may want to add ...
    ],
    preview: {
      select: {
        title: 'companyName',
        media: 'logo', // Display the logo as preview media
      },
    },
  };
  
  export default placement;
  