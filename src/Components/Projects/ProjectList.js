const GITHUB_DESIGN = 'https://puredevper.github.io/SimpleWebProject/';
const AMAZON_S3 = 'https://puredevper.s3.amazonaws.com/';
const GITHUB_LINK = 'https://github.com/PureDevPer/';

export const FULLSTACKPROJECTS = [
	{
		imageLink: `${AMAZON_S3}MyTube.png`,
		title: 'MystaGram',
		youtube: 'QcQEY0r8pIQ',
		githubLink: `${GITHUB_LINK}MystaGram`,
		description1: `I developed a full stack, scalable, and improved Instagram
        replica that uploads and shares photos between users. Both web
        application and mobile app (iOS/Android) are developed by React
        and React Native. When user uploads data on mobile app, both web
        application and mobile app synchronize all data simutaneoulsy.`,
		description2: `Login system using one-time password (OTP) are improved. In
        other words, new password is sent to user email for each login.
        I developed sign-up using Google and Facebook account (Oauth2),
        photo upload from phone storage, Post, Like and Comment.`,
		frontend: ['React', 'React Native', 'React Hooks', 'Apollo'],
		backend: [
			'Node.js',
			'Express',
			'Prisma',
			'GraphQL',
			'Passport',
			'Babel',
			'AWS S3',
			'Heroku',
			'Netlify'
		]
	},
	{
		imageLink: `${AMAZON_S3}MyTube.png`,
		title: 'MyTube',
		youtube: 'QcQEY0r8pIQ',
		githubLink: `${GITHUB_LINK}MyTube`,
		description1: `I created a full stack and scalable YouTube replica, which
        allows people to enjoy wathching and uploading videos. The
        project followed the MVC pattern. All pages are divided into
        different routers which render templates and have controllers.
        User information controllers and video information controllers
        render a page from Database, MongoDB.`,
		description2: `I implemented video upload to AWS S3 server, video record in
        real time, coments, video search, and custom video player. A
        full authentication system is built for users in order to
        provide more accountability.`,
		frontend: ['JavaScript', 'Pug', 'SaSS', 'Webpack'],
		backend: [
			'JavaScript',
			'Express',
			'Node.js',
			'MongoDB',
			'Mongo Atlas',
			'Mongoose',
			'passport',
			'Babel',
			'AWS S3',
			'Heroku'
		]
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
