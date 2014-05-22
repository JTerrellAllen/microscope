var postsData = [
  {
    title: 'Introducing Telescope',
    author: 'Sacha Greif',
    url: 'http://sachagreif.com/'
  },
  {
    title: 'Meteor',
    author: 'Tom Coleman',
    url: 'http://sachagreif.com/'
  },
  {
    title: 'The Meteor Book',
    author: 'Tom Coleman',
    url: 'http://sachagreif.com/'
  }
];
Template.postsList.helpers({
  posts: postsData
});