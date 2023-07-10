import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshbalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
   followers:[],
   following:[],
   bio: "",
   portfolio_link: "",
   avatar: "https://i.ibb.co/kSXJLZg/avataaars-1.png"
  },
  {
    _id: uuid(),
    firstName: "Subham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "shubhamsoni123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers:[],
   following:[],
   bio: "",
   portfolio_link: "",
   avatar: "https://i.ibb.co/kSXJLZg/avataaars-1.png"
  },
  {
    _id: uuid(),
    firstName: "Debashis",
    lastName: "Kar",
    username: "debashiskar",
    password: "debashiskar123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers:[],
   following:[],
   bio: "",
   portfolio_link: "",
   avatar: "https://i.ibb.co/kSXJLZg/avataaars-1.png"
  },
  {
    _id: uuid(),
    firstName: "Subhman",
    lastName: "Gill",
    username: "subhmangill",
    password: "subhmangill123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers:[],
   following:[],
   bio: "",
   portfolio_link: "",
   avatar: "https://i.ibb.co/kSXJLZg/avataaars-1.png"
  },
  {
    _id: uuid(),
    firstName: "Tanay",
    lastName: "Pratap",
    username: "tanaypratap",
    password: "tanaypratap123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers:[],
   following:[],
   bio: "",
    portfolio_link: "",
    avatar: "https://i.ibb.co/kSXJLZg/avataaars-1.png"
  },
];
