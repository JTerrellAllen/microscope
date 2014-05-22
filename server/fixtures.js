if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Intro Telescope',
    author: 'Sacha G.',
    url: 'http://google.com'
  });

  Posts.insert({
    title: 'Intro Science',
    author: 'Wolf M.',
    url: 'http://google.com'
  });

  Posts.insert({
    title: 'Intro History',
    author: 'Greg G.',
    url: 'http://google.com'
  });
}