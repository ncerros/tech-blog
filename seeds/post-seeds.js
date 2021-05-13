const { Post } = require('../models');

const postData = [{
    title: "echological-travels",
    content: "There are many places in the World where you can go and enjoy, be carful where you go!",
    user_id: 1

    },
    {
        title: "Concerts",
        content: "There are many websites where you can search an event of your choice!",
        user_id: 2
    },
    {
        title: 'Halo 5',
        content: 'A game for XBOX where players have to unlock missions in order to continue.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;




