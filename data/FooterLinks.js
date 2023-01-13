import ig from '../public/icons/instagram.png';
import tw from '../public/icons/twitter.png';
import yt from '../public/icons/youtube.png';
import gh from '../public/icons/github.png';
import ld from '../public/icons/linkedin.png';
const FooterLinks = [
    {
        title: 'Quick Links',
        links: [
            {
                name: 'Home',
                url: '/',
            },
            {
                name: 'Events',
                url: '/events',
            },
            {
                name: 'Projects',
                url: '/projects',
            },
            {
                name: 'Contact Us',
                url: 'contact',
            },
        ],
    },
    {
        title: 'Quick Links',
        links: [
            {
                name: 'Home',
                url: '/',
            },
            {
                name: 'Events',
                url: '/events',
            },
            {
                name: 'Projects',
                url: '/projects',
            },
            {
                name: 'Contact Us',
                url: 'contact',
            },
        ],
    },
];

const SocialLinks = [
    { icon: ig, link: 'https://www.instagram.com/gdsc_wce/?hl=en' },
    { icon: tw, link: '#' },
    {
        icon: yt,
        link: 'https://www.youtube.com/channel/UCrwdrer13mWACqFNR8y6vgA',
    },
    { icon: gh, link: 'https://github.com/gdscwce' },
    { icon: ld, link: 'https://www.linkedin.com/company/gdsc-wce/mycompany/' },
];

module.exports = { SocialLinks, FooterLinks };