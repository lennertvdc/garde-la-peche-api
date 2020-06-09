'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Posts", [{
      posted_at: 1458302340,
      img_url: "https://scontent.fbru1-1.fna.fbcdn.net/v/t1.0-9/1931113_10206876102719802_607116194129647729_n.jpg?_nc_cat=100&_nc_sid=ca434c&_nc_ohc=mF5llbaojSgAX_CEYAO&_nc_ht=scontent.fbru1-1.fna&oh=6fc0744597d18d81a438425ac9e8be53&oe=5EFEF7F4",
      fb_url: "https://www.facebook.com/photo.php?fbid=10206876102719802&set=g.956842611031123&type=1&theater&ifg=1"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Posts", null, {});
  }
};
