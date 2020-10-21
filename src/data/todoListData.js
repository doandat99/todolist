export const todolistData = [
  {
    id: 1,
    content: "Play video game",
  },
  {
    id: 2,
    content: "Learn nodejs & python",
  },
  {
    id: 3,
    content: "Join meetup event",
  },
  {
    id: 4,
    content: "PUBG Mobile",
  },
];

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(todolistData);
    }, 5000);
  });
};
