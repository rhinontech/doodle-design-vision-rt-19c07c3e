// Static demo data for Furr Circle Phase 1

import boyDog from "@/assets/doodle-boy-dog.png";
import puppy from "@/assets/doodle-puppy.png";
import cat from "@/assets/doodle-cat.png";
import rescue from "@/assets/doodle-rescue.png";
import birthday from "@/assets/doodle-birthday.png";
import vet from "@/assets/doodle-vet.png";
import group from "@/assets/doodle-group.png";

export type Post = {
  id: string;
  pet: string;
  owner: string;
  avatar: string;
  image: string;
  tint: string;
  caption: string;
  type: "photo" | "rescue" | "milestone" | "reel";
  likes: number;
  comments: number;
  tags: string[];
  time: string;
};

export const posts: Post[] = [
  {
    id: "1",
    pet: "Moona",
    owner: "Goutham R.",
    avatar: boyDog,
    image: boyDog,
    tint: "bg-coral/15",
    caption: "Sunday park dump 🌳 she met SEVEN new friends today.",
    type: "photo",
    likes: 248,
    comments: 32,
    tags: ["bordercollie", "mumbaipets", "weekend"],
    time: "2h",
  },
  {
    id: "2",
    pet: "Biscuit",
    owner: "Rescue & Co.",
    avatar: rescue,
    image: rescue,
    tint: "bg-sunshine/30",
    caption: "From a street corner to a forever couch. 6 months of love. Swipe →",
    type: "rescue",
    likes: 1820,
    comments: 211,
    tags: ["rescue", "transformation", "adoptdontshop"],
    time: "5h",
  },
  {
    id: "3",
    pet: "Mochi",
    owner: "Aanya P.",
    avatar: cat,
    image: cat,
    tint: "bg-primary/10",
    caption: "Window patrol since 6am. Reporting one squirrel and two pigeons.",
    type: "photo",
    likes: 412,
    comments: 58,
    tags: ["catsofcircle", "windowwatcher"],
    time: "9h",
  },
  {
    id: "4",
    pet: "Kobi",
    owner: "Mehul S.",
    avatar: birthday,
    image: birthday,
    tint: "bg-pinky/15",
    caption: "Kobi turns 4 today 🎂 thanks for all the wishes!",
    type: "milestone",
    likes: 967,
    comments: 124,
    tags: ["birthday", "tabby", "gotchaday"],
    time: "1d",
  },
  {
    id: "5",
    pet: "Pack",
    owner: "Indie Dogs India",
    avatar: group,
    image: group,
    tint: "bg-success/15",
    caption: "Adoption drive this Saturday in Bandra. 14 indies looking for homes 🐾",
    type: "photo",
    likes: 532,
    comments: 89,
    tags: ["adoption", "indiedogs", "mumbai"],
    time: "1d",
  },
];

export type Circle = {
  slug: string;
  name: string;
  members: number;
  unread: number;
  tint: string;
  cover: string;
  about: string;
};

export const circles: Circle[] = [
  { slug: "indie-dogs-india", name: "Indie Dogs India", members: 24500, unread: 3, tint: "bg-coral/20", cover: group, about: "Celebrating India's native pups. Stories, training tips & adoption drives." },
  { slug: "first-time-owners", name: "First-Time Owners", members: 11200, unread: 1, tint: "bg-sunshine/30", cover: puppy, about: "Just got your first pet? No question is too small here." },
  { slug: "rescue-stories", name: "Rescue Stories", members: 38900, unread: 5, tint: "bg-success/15", cover: rescue, about: "Before/after journeys. Hope, healing, happy endings." },
  { slug: "persian-cat-lovers", name: "Persian Cat Lovers", members: 7820, unread: 0, tint: "bg-pinky/15", cover: cat, about: "Grooming, fluff, and floof. Persian parents unite." },
  { slug: "training-circle", name: "Training Circle", members: 16400, unread: 2, tint: "bg-primary/10", cover: boyDog, about: "Positive reinforcement tips from real owners and trainers." },
  { slug: "health-and-nutrition", name: "Health & Nutrition", members: 21300, unread: 0, tint: "bg-success/20", cover: vet, about: "Vet-verified discussions on food, vaccines, and wellness." },
  { slug: "golden-retriever-club", name: "Golden Retriever Club", members: 9800, unread: 0, tint: "bg-sunshine/40", cover: puppy, about: "All the goldens, all the fluff." },
];

export type Thread = {
  id: string;
  circle: string;
  title: string;
  body: string;
  asker: string;
  upvotes: number;
  answers: number;
  tag: string;
  time: string;
  isHealth?: boolean;
};

export const threads: Thread[] = [
  { id: "t1", circle: "health-and-nutrition", title: "My cat suddenly stopped eating — should I worry?", body: "She's been refusing food for 18 hours. Drinks water though. 2 yr old Persian, no recent vet visits.", asker: "Aanya P.", upvotes: 124, answers: 23, tag: "health", time: "3h", isHealth: true },
  { id: "t2", circle: "first-time-owners", title: "Best food for a 3-month Beagle puppy?", body: "Adopted Biscuit last week. Currently on a generic kibble. Open to suggestions.", asker: "Rohan K.", upvotes: 78, answers: 41, tag: "nutrition", time: "6h" },
  { id: "t3", circle: "training-circle", title: "Dog anxiety during fireworks — what worked for you?", body: "Diwali is around the corner. Looking for non-medication approaches first.", asker: "Priya M.", upvotes: 312, answers: 87, tag: "behavior", time: "1d" },
  { id: "t4", circle: "indie-dogs-india", title: "How to introduce a new indie pup to a resident cat?", body: "Bringing home a 4 mo indie tomorrow. My cat Mochi has never met a dog.", asker: "Goutham R.", upvotes: 56, answers: 19, tag: "behavior", time: "2d" },
  { id: "t5", circle: "rescue-stories", title: "Day 30 update: Biscuit slept through the night 🥹", body: "Took a month, but he finally feels safe enough to sleep deep. Sharing for anyone in the early days.", asker: "Rescue & Co.", upvotes: 1820, answers: 142, tag: "milestone", time: "2d" },
];

export type Comment = {
  id: string;
  author: string;
  body: string;
  time: string;
  likes: number;
};

export const sampleComments: Comment[] = [
  { id: "c1", author: "Aanya P.", body: "She looks SO happy 😭", time: "1h", likes: 24 },
  { id: "c2", author: "Mehul S.", body: "Which park is this? Kobi needs friends!", time: "1h", likes: 12 },
  { id: "c3", author: "Indie Dogs India", body: "Reposting this on our story 🐾", time: "45m", likes: 67 },
  { id: "c4", author: "Priya M.", body: "Goals. Sundays goals.", time: "20m", likes: 8 },
];

export type Event = {
  id: string;
  title: string;
  date: string;
  day: string;
  month: string;
  location: string;
  type: "adoption" | "playdate" | "training" | "meetup";
  attendees: number;
  tint: string;
};

export const events: Event[] = [
  { id: "e1", title: "Bandra Adoption Drive", date: "Sat · 10:00 AM", day: "22", month: "Nov", location: "Carter Road, Bandra W", type: "adoption", attendees: 84, tint: "bg-success/15" },
  { id: "e2", title: "Sunday Puppy Playdate", date: "Sun · 9:00 AM", day: "23", month: "Nov", location: "Joggers Park, Bandra", type: "playdate", attendees: 41, tint: "bg-sunshine/30" },
  { id: "e3", title: "Recall Training Workshop", date: "Sat · 4:00 PM", day: "29", month: "Nov", location: "Five Gardens, Matunga", type: "training", attendees: 22, tint: "bg-primary/10" },
  { id: "e4", title: "Cat Parents Meetup ☕", date: "Sun · 5:30 PM", day: "30", month: "Nov", location: "Kala Ghoda", type: "meetup", attendees: 16, tint: "bg-pinky/15" },
];

export type LostPet = {
  id: string;
  name: string;
  breed: string;
  area: string;
  lastSeen: string;
  reward: string;
  status: "lost" | "spotted";
  tint: string;
};

export const lostPets: LostPet[] = [
  { id: "l1", name: "Simba", breed: "Golden Retriever · ♂ · 3 y", area: "Powai, near Hiranandani", lastSeen: "2 hours ago", reward: "₹10,000", status: "lost", tint: "bg-coral/15" },
  { id: "l2", name: "Unknown black cat", breed: "Looks well-fed, has red collar", area: "Andheri W, MHADA colony", lastSeen: "Spotted yesterday", reward: "—", status: "spotted", tint: "bg-success/15" },
  { id: "l3", name: "Rocky", breed: "Indie · ♂ · ~2 y", area: "Versova Beach Rd", lastSeen: "Yesterday 6 PM", reward: "₹5,000", status: "lost", tint: "bg-sunshine/30" },
];

export type Milestone = {
  id: string;
  date: string;
  title: string;
  body: string;
  icon: "adopt" | "vet" | "birthday" | "vaccine" | "weight" | "walk";
  tint: string;
};

export const moonaTimeline: Milestone[] = [
  { id: "m1", date: "Today", title: "Weighed in at 14.2 kg", body: "Healthy curve. Up 0.2 kg from last month.", icon: "weight", tint: "bg-primary/10" },
  { id: "m2", date: "Nov 8", title: "DHPP booster", body: "Annual vaccine given at Furr Care Clinic.", icon: "vaccine", tint: "bg-success/15" },
  { id: "m3", date: "Aug 12", title: "2nd birthday 🎂", body: "Carrot pupcake and a new tennis ball.", icon: "birthday", tint: "bg-pinky/15" },
  { id: "m4", date: "Mar 4", title: "First swim at Aksa", body: "Loved it. Did not want to come out.", icon: "walk", tint: "bg-sunshine/30" },
  { id: "m5", date: "Jan 2024", title: "Annual check-up", body: "All clear. Dental scaling recommended.", icon: "vet", tint: "bg-primary/10" },
  { id: "m6", date: "Aug 2023", title: "Adopted from BSPCA 🏡", body: "Day 1. The day everything changed.", icon: "adopt", tint: "bg-coral/15" },
];

export const moonaPassport = {
  microchip: "985 112 003 487 221",
  vaccines: [
    { name: "DHPP", date: "Nov 8, 2026", next: "Nov 2027", status: "ok" },
    { name: "Rabies", date: "Aug 12, 2026", next: "Aug 2027", status: "ok" },
    { name: "Bordetella", date: "Aug 12, 2026", next: "Feb 2027", status: "due" },
    { name: "Leptospirosis", date: "Nov 8, 2026", next: "Nov 2027", status: "ok" },
  ],
  allergies: ["Chicken", "Pollen (mild)"],
  vet: { name: "Dr. Kavya Rao", clinic: "Furr Care Clinic, Bandra W", phone: "+91 98••• ••321" },
  insurance: { provider: "Pawtect Gold", policy: "PG-22-994 821", valid: "Until Aug 2027" },
};
