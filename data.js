const books = [
  {
    title: "Breaking bad",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Walter White",
    pages: 789,
    genre: "drama",
    link: "https://tailwindcss.com/",
    ratings: "5",
  },
  {
    title: "Prison Break",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Michael Scofield",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "5",
  },
  {
    title: "Peaky Blinder",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Thomas Shelby",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "4.5",
  },
  {
    title: "You",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Joe Goldberg",
    pages: 689,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "4",
  },
  {
    title: "Mindhunter",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "3.5",
  },
  {
    title: "13 reasons why",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
  {
    title: "Behind her eyes",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 249,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "2.5",
  },
  {
    title: "Psy : Enqueteur Malgre lui",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "Adventure",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
  {
    title: "Lost",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3.5",
  },
  {
    title: "13 reasons why",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
  {
    title: "Breaking bad",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Walter White",
    pages: 789,
    genre: "drama",
    link: "https://tailwindcss.com/",
    ratings: "5",
  },
  {
    title: "Prison Break",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Michael Scofield",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "5",
  },
  {
    title: "Peaky Blinder",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Thomas Shelby",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "4.5",
  },
  {
    title: "You",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Joe Goldberg",
    pages: 689,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "4",
  },
  {
    title: "Mindhunter",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "3.5",
  },
  {
    title: "13 reasons why",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
  {
    title: "Behind her eyes",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 249,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "2.5",
  },
  {
    title: "Psy : Enqueteur Malgre lui",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "Adventure",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
  {
    title: "Lost",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3.5",
  },
  {
    title: "13 reasons why",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
  {
    title: "Breaking bad",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Walter White",
    pages: 789,
    genre: "drama",
    link: "https://tailwindcss.com/",
    ratings: "5",
  },
  {
    title: "Prison Break",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Michael Scofield",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "5",
  },
  {
    title: "Peaky Blinder",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Thomas Shelby",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "4.5",
  },
  {
    title: "You",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Joe Goldberg",
    pages: 689,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "4",
  },
  {
    title: "Mindhunter",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "3.5",
  },
  {
    title: "13 reasons why",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
  {
    title: "Behind her eyes",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 249,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "2.5",
  },
  {
    title: "Psy : Enqueteur Malgre lui",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "Adventure",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
  {
    title: "Lost",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3.5",
  },
  {
    title: "13 reasons why",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
  {
    title: "Breaking bad",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Walter White",
    pages: 789,
    genre: "drama",
    link: "https://tailwindcss.com/",
    ratings: "5",
  },
  {
    title: "Prison Break",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Michael Scofield",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "5",
  },
  {
    title: "Peaky Blinder",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Thomas Shelby",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "4.5",
  },
  {
    title: "You",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Joe Goldberg",
    pages: 689,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "4",
  },
  {
    title: "Mindhunter",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "3.5",
  },
  {
    title: "13 reasons why",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
  {
    title: "Behind her eyes",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 249,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "2.5",
  },
  {
    title: "Psy : Enqueteur Malgre lui",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "Adventure",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
  {
    title: "Lost",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3.5",
  },
  {
    title: "13 reasons why",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
  {
    title: "Breaking bad",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Walter White",
    pages: 789,
    genre: "drama",
    link: "https://tailwindcss.com/",
    ratings: "5",
  },
  {
    title: "Prison Break",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Michael Scofield",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "5",
  },
  {
    title: "Peaky Blinder",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Thomas Shelby",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "4.5",
  },
  {
    title: "You",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Joe Goldberg",
    pages: 689,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "4",
  },
  {
    title: "Mindhunter",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "3.5",
  },
  {
    title: "13 reasons why",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
  {
    title: "Behind her eyes",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 249,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "2.5",
  },
  {
    title: "Psy : Enqueteur Malgre lui",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "Adventure",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
  {
    title: "Lost",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3.5",
  },
  {
    title: "13 reasons why",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
  {
    title: "Breaking bad",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Walter White",
    pages: 789,
    genre: "drama",
    link: "https://tailwindcss.com/",
    ratings: "5",
  },
  {
    title: "Prison Break",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Michael Scofield",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "5",
  },
  {
    title: "Peaky Blinder",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Thomas Shelby",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "4.5",
  },
  {
    title: "You",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Joe Goldberg",
    pages: 689,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "4",
  },
  {
    title: "Mindhunter",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "3.5",
  },
  {
    title: "13 reasons why",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
  {
    title: "Behind her eyes",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 249,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "2.5",
  },
  {
    title: "Psy : Enqueteur Malgre lui",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "Adventure",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
  {
    title: "Lost",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3.5",
  },
  {
    title: "13 reasons why",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
  {
    title: "Psy : Enqueteur Malgre lui",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "Adventure",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
  {
    title: "Lost",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3.5",
  },
];

export const booksSimilar = [
  {
    title: "Breaking bad",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Walter White",
    pages: 789,
    genre: "drama",
    link: "https://tailwindcss.com/",
    ratings: "5",
  },
  {
    title: "Prison Break",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Michael Scofield",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "5",
  },
  {
    title: "Peaky Blinder",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Thomas Shelby",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "4.5",
  },
  {
    title: "You",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Joe Goldberg",
    pages: 689,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "4",
  },
  {
    title: "Mindhunter",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 989,
    genre: "suspense",
    link: "https://tailwindcss.com/",
    ratings: "3.5",
  },
  {
    title: "13 reasons why",
    thumbnail: "",
    image: "../../assets/images/image-three.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse voluptates ipsam facere repellendus error delectus sapiente mollitia, ipsa dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni eum in alias molestiae culpa?",
    author: "Unknown",
    pages: 489,
    genre: "suspense",
    link: "https://tailwindcss.com/",

    ratings: "3",
  },
];

export default books;
