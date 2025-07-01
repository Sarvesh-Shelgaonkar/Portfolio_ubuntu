# Sarvesh Shelgaonkar - Ubuntu Portfolio

This is a personal portfolio website of Sarvesh Shelgaonkar with Ubuntu 20.04 theme, made using Next.js & Tailwind CSS.
Features include interactive desktop environment, project showcase, skills display, and contact form.

## Updated Repository Links
- **PrimeEstate Solutions**: https://github.com/Sarvesh-Shelgaonkar/mern-estate
- **TradeForge**: https://github.com/Sarvesh-Shelgaonkar/TradeForge  
- **AI SQL Generator**: https://github.com/vidhikoul/TechOptimizers
- **WanderLust**: https://github.com/Sarvesh-Shelgaonkar/WanderLust
- **Simon Game**: https://github.com/Sarvesh-Shelgaonkar/Simon-Game

## About Me
- **Name**: Sarvesh Vivek Shelgaonkar
- **Role**: Full Stack Developer
- **Education**: 
  - B.E. Computer Engineering at PICT (2022-2026, SGPA: 9.43)
  - HSC from SVJ College, Maharashtra Board (85%)
  - SSC from Central Public School, CBSE Board (90.4%)
- **Expertise**: MERN Stack, AI-powered applications
- **Achievements**: Top 5 in Inspiron 4.0, 250+ coding problems solved

## Running Locally
To run this on localhost:
```bash
npm install
npm run dev
```

When you are done coding, build the app:
```bash
npm run build
```

_NOTE: if you have yarn just replace `npm` with `yarn`._

### To make the contact form work

- Create a account in [emailjs](https://www.emailjs.com/) create also new Outlook or Gmail account to be able
  to send email.
- Create a new service, select and log in to your newly created outlook or gmail account on EmailJS.
- Go back to the dashboard and get the Service ID copy it.
- Create a .env file in your root folder and put

```

NEXT_PUBLIC_USER_ID = 'YOUR_USER_ID'
NEXT_PUBLIC_TEMPLATE_ID = 'template_fqqqb9g'
NEXT_PUBLIC_SERVICE_ID = 'YOUR_SERVICE_ID'

```

into it. Replace \*your user id and your service ID with your values in your EmailJS service.

## This project was made using Create Next App! Here is the scripts that u can run.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributiors who wants to make this website better can make contribution,which will be **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Added some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
