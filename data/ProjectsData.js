// all domain projects is required
// domain specific project should be served from server in order to save time of computation at the frontend
// this file is used for testing purpose only
// this file is not used in production

const projects = {
    "all": [
        {
            "id": 1,
            "name": "GDSCWCE website",
            "description": "GDSCWCE website is a website for GDSCWCE community. It is a community of students who are interested in Google technologies. This website is built using NextJS and TailwindCSS.",
            "techStack": ["NextJS", "TailwindCSS"],
            "contributors": ["Nehal Ughade"],
            "githubLink": "https://github.com/gdscwce/gdscwce",
            "liveLink": "https://gdscwce.vercel.app/",
            "image": "https://avatars.githubusercontent.com/u/90445010?s=400&u=3819ffd5fea31aae321f757229fb2fc9ee54c1b4&v=4",
            "license": "MIT",

        },
        {
            "id": 2,
            "name": "DEVOPS GDSC",
            "description": "GDSC DEVOPS SERIES specifically focused on Docker.",
            "techStack": ["Javascript", "HTML", "Dockerfile"],
            "contributors": ["Aaradhya Pitlawar", "Tushar Patil", "Neha Gaddam", "Prajwal Shah", "Vaishnavi Nagarale",],
            "githubLink": "https://github.com/gdscwce/DEVOPS-GDSC",
            "image": "https://www.neovasolutions.com/wp-content/uploads/2020/05/container-and-docker-min.png",


        },
        {
            "id": 3,
            "name": "Leetcode Questions",
            "description": "Most tagged Interview questions of Leetcode.",
            "techStack": ["C++", "Jupyter Notebook", "C", "Java"],
            "contributors": ["Aaradhya Pitlawar", "Tushar Patil", "Neha Gaddam", "Prajwal Shah", "Vaishnavi Nagarale",],
            "githubLink": "https://github.com/gdscwce/DEVOPS-GDSC",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhtHakscGB4ga0ZpHTnEuroANJY51ZrhqNIFaq9_bRheMxyyrjDMXyKJleyAiAvome6TA&usqp=CAU",


        }
    ],
    "web": [{
        "id": 1,
        "name": "GDSCWCE website",
        "description": "GDSCWCE website is a website for GDSCWCE community. It is a community of students who are interested in Google technologies. This website is built using NextJS and TailwindCSS.",
        "techStack": ["NextJS", "TailwindCSS"],
        "contributors": ["Nehal Ughade"],
        "githubLink": "https://github.com/gdscwce/gdscwce",
        "liveLink": "https://main.dsu1tngbt4jw.amplifyapp.com/",
        "image": "https://avatars.githubusercontent.com/u/90445010?s=400&u=3819ffd5fea31aae321f757229fb2fc9ee54c1b4&v=4",
        "license": "MIT",

    }],
    "cloud": [{
        "id": 1,
        "name": "DEVOPS-GDSC",
        "description": "GDSC DEVOPS SERIES specifically focused on Docker.",
        "techStack": ["Javascript", "HTML", "Dockerfile"],
        "contributors": ["Aaradhya Pitlawar", "Tushar Patil", "Neha Gaddam", "Prajwal Shah", "Vaishnavi Nagarale",],
        "githubLink": "https://github.com/gdscwce/DEVOPS-GDSC",
        "image": "https://www.neovasolutions.com/wp-content/uploads/2020/05/container-and-docker-min.png",


    }],
}
module.exports = projects