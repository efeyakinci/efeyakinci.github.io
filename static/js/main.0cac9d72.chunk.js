(this.webpackJsonplanding=this.webpackJsonplanding||[]).push([[0],{40:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},47:function(e){e.exports=JSON.parse('[{"title":"Mirror","content":"This is a smart mirror I made. I got inspiration from a YouTube video, but the parts in the video proved to be too expensive, and I did not have a 3D printer at the time to print the parts. So, I decided to see if I could build the mirror for less money and with fewer tools. The answer was yes! The mirror works by using a device that outputs to a recycled monitor behind the glass. The glass has a one-way mirror film on it to give the mirror effect. I manually cut all of the wood because I didn\u2019t have electric tools, so some of the structure came out a bit uneven. This was my first real introduction to woodworking, and I think it came out good despite that. The software is a web page served by an Angular server and a Node.js backend. The backend also has Spotify integration. A Raspberry Pi works well as the video input, but anything that can display a webpage also works. In the end, the project helped me develop my woodworking and IOT skills, and I ended up with a pretty cool mirror.","image":"smartmirror.png"},{"title":"Form Delivery System","content":"This is a cross-platform app made in Flutter that allows for the delivery of customized forms in health settings. The project started when I was working with a medical research team at the University of Michigan. Due to the current pandemic, the team I worked with asked me to build a COVID-19 focused application to manage appointments. I used Flutter because it provided ease of development for cross-platform applications as well as fast rendering. I first started with a quick proof-of-concept app that I then built into an app with 3 main sections \u2014 login, appointments, and check-ins. In the end result, doctors will create access codes from a medical portal, with the patients entering said codes, and completing the check in. During check-ins, each answer can progress to the next question, ask another question, or switch to a different question set depending on the data from the backend. We are currently working with the IT department to integrate the backend with our systems.","image":"fds.png"},{"title":"Scout","content":"This is a scouting application (to collect data on robots during competitions) I created during my time as scouting app lead on FRC Team 3322. I worked with two other people to create the application. The app itself is a responsive web application created in React for the frontend, Node.js for the backend, and Firebase\u2019s Firestore for our database. The app has two main components \u2014 data entry and data viewing. The data entry allows a scouter to add a new team in a new match and enter data in sections separated by game period. The scouter can then save this data for later viewing. The data viewer uses the Chart.js framework to display data. The client can pull data for different matches and view statistics for that team. These statistics are then displayed in expandable cards that give an overview of how a team is performing. A big problem we faced was making the website responsive for different devices, and so we used the Material-UI framework\u2019s responsive grid system for our website.","image":"scout.png"},{"title":"Go Global","content":"Go Global was an application I developed during my time in FRC Team 6429 in 2018 as lead of the engineering projects subteam. Our task was to create a mobile social media application for FRC teams to discuss topics. The application was built in PHP for the backend, and Java for the frontend. The features of the app included profile pages, comment threads, and instant messaging using the Firebase In-App Messaging API. This project was a large learning experience for me in terms of interactions between mobile apps and backends, Firebase API management, and mobile app design. The biggest challenge I faced was the fact I had never created a mobile application before. We decided to use Android Studio to create a native Android App, which, in hindsight, was not the greatest idea. Regardless, we created a working social media application and learned a lot about mobile app and backend design in the process. This knowledge assisted me greatly in creating the scouting application for Team 3322.","image":"goglobal.png"},{"title":"FRC Team 6429 Safety Animation","content":"This was a safety animation that I filmed, edited, and narrated for a robotics competition. The purpose of the animation was to give information regarding robot safety to our audience. The video had to be kept under 40 seconds. Our team decided that a stop motion animation would be a unique style to present these rules. Our safety subteam provided cutouts that I moved and filmed to create the animation. One problem that we had was we had difficulty getting consistent and usable lighting. To solve this, we used a small structure to set above our paper set to provide consistent lighting and a stable viewing angle. I used Adobe Premiere to splice together pictures, add music, and sync narration.","embed":"ElL86Z0yUds"},{"title":"FRC Team 6429 Promotional Videos","content":"During my time at Team 6429, I used Adobe Premiere to create and edit videos for our team. One example is our 2018 competition recap video. For recap videos, we use clips filmed by our members and edit these videos together to create a highlight reel. For this video, despite the fact I was not able to film the videos myself, I was able to make use of tools such as optical flow interpolation and stabilization to create a video synced to the music. This was one of the earlier videos I produced during my time in the team, but this video taught me many skills such as time effects, interpolation, and keyframing. I have used these skills in creating a variety of videos for our projects including educational science videos, promotional videos, and robot overview videos. The videos can be found at https://www.youtube.com/c/4thDimension6429/videos","image":"promo_videos.png"},{"title":"Self Driving Bike Project","content":"This picture shows one of our mounted gears on the steering shaft of our bicycles. Although the picture looks simple, the challenges we had were quite complex; we had to mount a gear onto a bicycle without doing any damage to the bike itself. To do this, we utilized two very small bumps and cutouts on the steering shaft. This experience taught me prototyping skills as we had to reprint parts many times (as evidenced by the brackets on the ground) to get rid of any extra movement. I am building this bicycle as part of my engineering design and development class with Toby Wright and Ellie Witten. Our first goal is to mount our servo design with a gyroscope to control the bike\u2019s steering. Then, we plan to use a weight to balance the bike using the gyroscope and a Raspberry Pi. The project is in its very early stages, but it has already taught me a good deal about 3D printing.","image":"bike.jpg"},{"title":"Salt and Pepper Grinder","content":"This is one of the smaller but funnier projects I have made, mainly due to its backstory. One day, I was cooking for my parents, and we had quite a lot of meat that I needed to salt and pepper. Our family uses Costco pepper and salt grinders that take an annoying amount of effort to get salt out of, and so by the time I was halfway through the meat, I thought to myself, \u201cThere\u2019s got to be a better way to do this.\u201d Then, I thought that all I was doing was spinning the base of the pepper grinder while holding it. I also had a drill, which is also a thing that spins, and I thought that I could make something out of that fact. So, I took some measurements and printed out the part in the picture. Although I did get through all of the food that day through manual effort, now, all I have to do when I want copious amounts of salt or pepper is grab a drill.","image":"peppergrinder.jpg"}]')},48:function(e,t,i){"use strict";i.r(t);var a=i(2),o=i(0),n=i.n(o),s=i(9),r=i.n(s),d=(i(40),i(16)),c=(i.p,i(41),i(8));function l(e){var t={visible:{y:-40,opacity:1,transition:{duration:1,staggerChildren:1}},hidden:{y:0,opacity:0}};return Object(a.jsxs)(c.b.div,{style:{height:"100vh",width:"100vw",display:"flex",flexDirection:"column"},children:[Object(a.jsxs)(c.b.div,{variants:t,initial:"hidden",animate:"visible",style:{flexGrow:"1",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(a.jsx)(c.b.div,{variants:t,style:{fontSize:"4vw",marginBottom:"0"},children:"Welcome To Efe Akinci's Personal Website"}),Object(a.jsx)(c.b.div,{style:{display:"flex",alignItems:"center",border:"2px solid #2255FF",marginTop:"2em",padding:"0.5em 0.75em",borderRadius:"1em",color:"#2255FF",background:"#FFFFFF"},variants:t,whileHover:{color:"#FFFFFF",backgroundColor:"#2255FF",scale:1.1,cursor:"pointer"},children:Object(a.jsx)("span",{style:{fontSize:"2vw",fontWeight:"600"},onClick:e.mainScreen,children:"Continue"})})]}),Object(a.jsx)("div",{style:{flexGrow:"1"}})]})}var h=i(70),p=i(26);i(42);function u(e){var t,i=e.showMedia;console.log(e);return Object(a.jsx)(h.a,{item:!0,xs:12,sm:6,md:4,style:{padding:"2em"},children:Object(a.jsx)(c.b.div,{variants:e.projectVariant,children:Object(a.jsxs)("div",(t={style:{width:"100%"}},Object(p.a)(t,"style",{padding:"1em",borderRadius:"1em",boxShadow:"20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff",display:"flex",flexDirection:"column"}),Object(p.a)(t,"children",[Object(a.jsxs)("h2",{style:{alignSelf:"center"},children:[" ",e.project.title," "]}),e.project.image?Object(a.jsx)("span",{style:{cursor:"pointer",color:"#2233FF"},onClick:function(){return i({destination:e.project.image,contentType:"IMAGE"})},children:"Click For Media Content"}):e.project.embed?Object(a.jsx)("span",{style:{cursor:"pointer",color:"#2233FF"},onClick:function(){return i({destination:e.project.embed,contentType:"VIDEO"})},children:"Click For Media Content"}):"",Object(a.jsx)("p",{children:e.project.content})]),t))})})}var m=i(74),g=i(75),b=i(73);function f(e){var t=e.open,i=e.onClose;console.log(e);return Object(a.jsxs)(m.a,{open:t,onClose:i,children:[Object(a.jsx)(g.a,{children:"Media"}),Object(a.jsx)(b.a,{children:function(){switch(e.content.contentType){case"IMAGE":return Object(a.jsx)("img",{src:"http://efeyakinci.github.io/images/"+e.content.destination,style:{width:"100%"}});case"VIDEO":return Object(a.jsx)("iframe",{src:"https://www.youtube.com/embed/"+e.content.destination,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0});default:return Object(a.jsx)("span",{children:"Media type error."})}}()})]})}var w=i(47);function y(){var e=Object(o.useState)(!1),t=Object(d.a)(e,2),i=t[0],n=t[1],s=Object(o.useState)("hidden"),r=Object(d.a)(s,2),l=r[0],p=r[1],m=Object(o.useState)({}),g=Object(d.a)(m,2),b=g[0],y=g[1],j={hidden:{opacity:0,scale:.5},visible:{opacity:1,scale:1}},v=function(e){y(e),n(!0)};return Object(a.jsxs)("div",{style:{height:"100vh",width:"100vw"},children:[Object(a.jsxs)(h.a,{container:!0,style:{paddingLeft:"2em"},children:[Object(a.jsxs)(h.a,{item:!0,xs:12,style:{display:"flex",flexDirection:"column"},children:[Object(a.jsx)("h1",{children:"Applications On This Website"}),Object(a.jsxs)("ul",{s:!0,children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/precalc/",children:"Study For The Mad Trig Minute Test For Precalculus AC"})}),Object(a.jsx)("li",{children:Object(a.jsx)("span",{style:{color:"#2233FF",cursor:"pointer"},onClick:function(){return p("visible"==l?"hidden":"visible")},children:"Check Out Some Of My Projects"})})]})]}),Object(a.jsx)(h.a,{item:!0,xs:12,children:Object(a.jsx)(c.b.div,{style:{width:"100%"},variants:{hidden:{opacity:1,transition:{staggerChildren:.3}},visible:{opacity:1,transition:{staggerChildren:.3}}},initial:"hidden",animate:l,children:Object(a.jsx)(h.a,{container:!0,style:{width:"100%"},children:w.map((function(e,t){return Object(a.jsx)(u,{project:e,showMedia:v,projectVariant:j},t)}))})})})]}),Object(a.jsx)(f,{open:i,onClose:function(){n(!1)},content:b})]})}var j=function(){var e=Object(o.useState)(!1),t=Object(d.a)(e,2),i=t[0],n=t[1];return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(c.b.div,{children:Object(a.jsx)(c.a,{children:i?Object(a.jsx)(c.b.div,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},transition:{delay:1,when:"beforeChildren"},children:Object(a.jsx)(y,{})},"main"):Object(a.jsx)(c.b.div,{exit:{opacity:0},children:Object(a.jsx)(l,{mainScreen:function(){return n(!0)}})},"title")})})})},v=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,77)).then((function(t){var i=t.getCLS,a=t.getFID,o=t.getFCP,n=t.getLCP,s=t.getTTFB;i(e),a(e),o(e),n(e),s(e)}))};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),v()}},[[48,1,2]]]);
//# sourceMappingURL=main.0cac9d72.chunk.js.map