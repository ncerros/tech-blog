const { Comment } = require('../models');

const commentData = [{
        comment_text: "Rivers are my one thing that I always enjoy",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Tickect master is one of the most popular when it comes to buy a ticket event.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Halo is a great game, don't you think?",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
