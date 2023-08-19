const note = {
  name: "note",
  title: "Note",
  type: "document",
  fields: [
    {
      name: "topic",
      title: "Topic",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "semester",
      title: "Semester",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subject",
      title: "Subject",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "module",
      title: "Module",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default note;
