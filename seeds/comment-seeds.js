const { Comment } = require('../models');

const commentData = [{
        comment_text: "Rivers are one thing that I always enjoy",
        user_id: 11,
        post_id: 11
    },
    {
        comment_text: "Ticketmaster is one of the most popular when it comes to buy a ticket event.",
        user_id: 12,
        post_id: 12
    },
    {
        comment_text: "Halo is a great game, don't you think?",
        user_id: 13,
        post_id: 13
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;


