import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Standup",
    url: "https://res.cloudinary.com/sadath/image/upload/v1650422863/FunYard/CategoryImage1_a4wfjl.jpg",
    description:
      "Stand-up comedians tell anecdotes and jokes with punchlines to surprise and amuse their audiences",
  },
  {
    _id: uuid(),
    categoryName: "Sketch",
    url: "https://res.cloudinary.com/sadath/image/upload/v1650368447/FunYard/s_p1jtqb.jpg",
    description:
      "Sketch comedy involves a group of performers acting out short comedic scenes.",
  },
  {
    _id: uuid(),
    categoryName: "Improv",
    url: "https://res.cloudinary.com/sadath/image/upload/v1650368173/FunYard/Improv_Comedy_tlitdq.jpg",
    description:
      "Improv comedy involves performers inventing comedic situations on the spot without a script",
  },
];
