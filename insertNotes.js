const mongoose = require("mongoose");
const Notes = require("./models/Notes");

mongoose
  .connect("mongodb://localhost:27017/Notes")
  .then(() => {
    console.log("Connection Open");
  })
  .catch((e) => {
    console.log(e);
    console.log("Connection Failed");
  });

const insertNotes = [
  {
    title: "Clean the Bathroom",
    reminder:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut perspiciatis neque nesciunt ratione molestiae eveniet temporibus dolorum laborum saepe.",
  },
  {
    title: "Study Algebra",
    reminder:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut perspiciatis neque nesciunt ratione molestiae eveniet temporibus dolorum laborum saepe.",
  },
  {
    title: "Attend Class at 5:30 PM",
    reminder:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut perspiciatis neque nesciunt ratione molestiae eveniet temporibus dolorum laborum saepe.",
  },
  {
    title: "Dinner Date",
    reminder:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut perspiciatis neque nesciunt ratione molestiae eveniet temporibus dolorum laborum saepe.",
  },
  {
    title: "Birthday Celebration",
    reminder:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut perspiciatis neque nesciunt ratione molestiae eveniet temporibus dolorum laborum saepe.",
  },
];

Notes.insertMany(insertNotes)
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
