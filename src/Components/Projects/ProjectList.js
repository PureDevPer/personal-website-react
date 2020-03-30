const GITHUB_DESIGN = "https://puredevper.github.io/SimpleWebProject/";
const AMAZON_S3 = "https://puredevper.s3.amazonaws.com/";
const GITHUB_LINK = "https://github.com/PureDevPer/";

export const FULLSTACK_PROJECT_MYSTAGRAM = [
  {
    imageLink: `${AMAZON_S3}MystaGram.png`,
    title: "MystaGram",
    isYoutube: true,
    youtube: "XpxQkVMxJ1A",
    isDeployed: false,
    deployedLink: "",
    isGithubLink: true,
    githubLink: `${GITHUB_LINK}MystaGram`,
    description1: `I developed a full stack, scalable, and improved Instagram
	replica that uploads and shares photos between users. Both web
	application and mobile app (iOS/Android) are developed by React
	and React Native. When user uploads data on mobile app, both web
	application and mobile app synchronize all data simutaneoulsy.`,
    isDescription2: true,
    description2: `Login system using one-time password (OTP) are improved. In
	other words, new password is sent to user email for each login.
	I developed sign-up using Google and Facebook account (Oauth2),
	photo upload from phone storage, Post, Like and Comment.`,
    frontend: ["React", "React Native", "React Hooks", "Apollo"],
    isBackend: true,
    backend: [
      "Node.js",
      "Express",
      "Prisma",
      "GraphQL",
      "Passport",
      "Babel",
      "AWS S3",
      "Heroku",
      "Netlify"
    ]
  }
];

export const FULLSTACK_PROJECT_MYTUBE = [
  {
    imageLink: `${AMAZON_S3}MyTube.png`,
    title: "MyTube",
    isYoutube: true,
    youtube: "QcQEY0r8pIQ",
    isDeployed: false,
    deployedLink: "",
    isGithubLink: true,
    githubLink: `${GITHUB_LINK}MyTube`,
    description1: `I created a full stack and scalable YouTube replica, which
        allows people to enjoy wathching and uploading videos. The
        project followed the MVC pattern. All pages are divided into
        different routers which render templates and have controllers.
        User information controllers and video information controllers
        render a page from Database, MongoDB.`,
    isDescription2: true,
    description2: `I implemented video upload to AWS S3 server, video record in
        real time, coments, video search, and custom video player. A
        full authentication system is built for users in order to
        provide more accountability.`,
    frontend: ["JavaScript", "Pug", "SaSS", "Webpack"],
    isBackend: true,
    backend: [
      "JavaScript",
      "Express",
      "Node.js",
      "MongoDB",
      "Mongo Atlas",
      "Mongoose",
      "passport",
      "Babel",
      "AWS S3",
      "Heroku"
    ]
  }
];

export const FULLSTACK_PROJECT_GUESSMYDRAWING = [
  {
    imageLink: `${AMAZON_S3}GuessMyDrawing.png`,
    title: "Guess My Drawing",
    isYoutube: true,
    youtube: "fe1tly6uwik",
    isDeployed: false,
    deployedLink: "",
    isGithubLink: true,
    githubLink: `${GITHUB_LINK}guessing_my_drawing`,
    description1: `I developed a full stack web application called Guess My Drawing. 
		User A can draw something to describe a word. 
		User B then guesses the word that User A draws, and can type an answer. 
		Both users can chat with each other. If the answer is correct, the User B gets 10 points.`,
    isDescription2: true,
    description2: `The project is built by responsive web design. Socket.io is being used to draw on the canvas 
		and to chat in real time. I implemented chat, canvas, notifications, and timer in real time.
		LocalStorage is used instead of database.`,
    frontend: ["JavaScript", "Pug", "Gulp"],
    isBackend: true,
    backend: ["JavaScript", "Node.js", "Express", "Socket.io", "Babel"]
  }
];

export const FULLSTACK_PROJECT_BEERWORLD = [
  {
    imageLink: `${AMAZON_S3}BeerWorld.png`,
    title: "Beer World",
    isYoutube: true,
    youtube: "me41-EW22TM",
    isDeployed: false,
    deployedLink: "",
    isGithubLink: true,
    githubLink: `${GITHUB_LINK}BeerWorld`,
    description1: `I created a full stack Beer World application, using BreweryDB API, that has two different pages. 
		A main page displays a list of beers and "Like" buttons. A "My Beers" page shows beers a user likes from the main page.
		The project followed the MVC (Model, View, Controller) pattern and used RESTful API. 
		Beer data are saved by database, MongoDB.`,
    isDescription2: true,
    description2: `The BreweryDB API doesn't have all the information. 
		If there doesn't exist a beer image on the API, alternative beer image has been used.
		When a user clicks the "Like" button, beer information saves on the MongoDB server. 
		CRUD (Create, Read, Update, Delete) features are implemented on BeerController.`,
    frontend: [
      "React",
      "React Router",
      "React Infinite Scroll Component",
      "Styled Components",
      "Axios"
    ],
    isBackend: true,
    backend: [
      "JavaScript",
      "Node.js",
      "Express",
      "Babel",
      "Nodemon",
      "Morgan",
      "MongoDB",
      "Mongoose",
      "Axios"
    ]
  }
];

export const WEB_BASED_PROJECTS = [
  {
    imageLink: `${AMAZON_S3}MovieWorld.png`,
    title: "Movie World",
    isYoutube: true,
    youtube: "Mwb0m6DDkgc",
    isDeployed: false,
    deployedLink: "",
    isGithubLink: true,
    githubLink: `${GITHUB_LINK}MovieWorld`,
    description1: `I developed a web application which offers Movie
        and TV show information using The MOVIE DB. The Movie page shows Now Playing, Upcoming Movies, and Popular
        movies. The TV show page offers Airing Today, Top Rated Shows, and
        Popular shows. Each Movie and each TV show has their own detail
        page, which offers program information.`,
    isDescription2: false,
    description2: ``,
    frontend: ["react", "react router", "styled component", "axios"],
    isBackend: false,
    backend: []
  },
  {
    imageLink: `${AMAZON_S3}Momentum.png`,
    title: "Momentum",
    isYoutube: false,
    youtube: "",
    isDeployed: true,
    deployedLink: "https://puredevper.github.io/LearningJavaScript/",
    isGithubLink: true,
    githubLink: `${GITHUB_LINK}LearningJavaScript`,
    description1: `I developed Momentum replica, Google Chrome app, which allows
        users to input to-do list with locaiton. A basic gelocation
        setting with weather information is built by allowing users to
        convert temperature. All data written by users are saved on
        local storage.`,
    isDescription2: false,
    description2: ``,
    frontend: ["HTML5", "CSS3", "JavaScript"],
    isBackend: false,
    backend: []
  },
  {
    imageLink: `${AMAZON_S3}KaTalk.png`,
    title: "Kakao",
    isYoutube: false,
    youtube: "",
    isDeployed: true,
    deployedLink: "https://puredevper.github.io/kakao/",
    isGithubLink: true,
    githubLink: `${GITHUB_LINK}kakao`,
    description1: `I created UI parts of an instant messaing application. A
        responsive web application is implemented to fit mobile screen.
        Landing pages, built by animation, are created to change 2
        different versions of Kakao and to make user's screen smaller.`,
    isDescription2: false,
    description2: ``,
    frontend: ["HTML5", "CSS3"],
    isBackend: false,
    backend: []
  }
];

export const DESIGN_UI = [
  {
    demo: `${GITHUB_DESIGN}PictureComments/index.html`,
    imageLink: `${AMAZON_S3}PictureComment.gif`
  },
  {
    demo: `${GITHUB_DESIGN}PictureComments/index.html`,
    imageLink: `${AMAZON_S3}PhotoComment1.gif`
  },
  {
    demo: `${GITHUB_DESIGN}PictureComments/index.html`,
    imageLink: `${AMAZON_S3}PhotoComment2.gif`
  },
  {
    demo: `${GITHUB_DESIGN}Loading_UsingAnimation/index.html`,
    imageLink: `${AMAZON_S3}Loading.gif`
  },
  {
    demo: `${GITHUB_DESIGN}iPhoneProfile/index.html`,
    imageLink: `${AMAZON_S3}iPhoneProfile.png`
  },
  {
    demo: `${GITHUB_DESIGN}FoodMenu_iPhone/index.html`,
    imageLink: `${AMAZON_S3}iPhoneFood.png`
  },
  {
    demo: `${GITHUB_DESIGN}Products_Profile/index.html`,
    imageLink: `${AMAZON_S3}Product.png`
  },
  {
    demo: `${GITHUB_DESIGN}Products_Profile/index.html`,
    imageLink: `${AMAZON_S3}Profile.png`
  }
];

export const OTHERS = [
  {
    imageLink: `${AMAZON_S3}MachineLearning.png`,
    title: "Recognizing Hand-Written Characters",
    isYoutube: false,
    youtube: "",
    isDeployed: true,
    deployedLink:
      "https://github.com/PureDevPer/MachineLearning/blob/master/Project%20-%20EMNIST/MachineLearning.ipynb",
    isGithubLink: true,
    githubLink: `${GITHUB_LINK}MachineLearning`,
    description1: `I developed machine learning programs that detect hand-written
        digits and characters using 6 different algorithms, SoftMax
        Logistic Regression, Neural Networks, Neural Networks with
        Xavier Initialization, Neural Networks with Dropout,
        Convolutional Neural Networks, and Ensemble Convolutional Neural
        Networks. I attained 99.7% accuracy for digits and 89.5%
        accuracy for characters.`,
    isDescription2: false,
    description2: ``,
    frontend: ["Python", "Tensorflow", "Numpy", "Pandas", "Matplotlib"],
    isBackend: false,
    backend: []
  },
  {
    imageLink: `${AMAZON_S3}GithubJenkins.png`,
    title: "Integrating Github with Jenkins",
    isYoutube: true,
    youtube: "ijO5mvEtGKE",
    isDeployed: false,
    deployedLink: "",
    isGithubLink: false,
    githubLink: ``,
    description1: `This project was for my master's project. I improved on Github
        integration with Jenkins by making a continuous integration and
        depoyment (CI / CD) pipeline. I developed an automation script
        in order to test all the code before and after pull request.
        Jenkins icon is displayed on Github during an automation test.`,
    isDescription2: false,
    description2: ``,
    frontend: ["Jenkins", "Docker"],
    isBackend: false,
    backend: []
  }
];
