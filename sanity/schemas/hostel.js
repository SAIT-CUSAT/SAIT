const hostel = {
    "name": "hostel",
    "title": "Hostel",
    "type": "document",
    "fields": [
      {
        "name": "image",
        "title": "Image",
        "type": "image",
        "options": {
          "accept": "image/*"
        }
      },
      {
        "name": "hostel_name",
        "title": "Hostel Name",
        "type": "string",
        "validation": Rule => Rule.required().min(3).max(50)
      },
      {
        "name": "contact_number",
        "title": "Contact Number",
        "type": "string",
        "validation": Rule => Rule.required().regex(/^\d{10,}$/),
        "description": "Please enter a valid contact number."
      },
      {
        "name": "location",
        "title": "Location",
        "type": "string",
        "validation": Rule => Rule.required()
      }
    ]
  }
  export default hostel;
  