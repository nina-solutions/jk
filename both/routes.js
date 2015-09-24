//  Iron Router - for useage see https://github.com/EventedMind/iron-router

Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.map(function () {

  // delete me and replace with your homepage
  this.route('homeTemp', {path: '/'})

  // posts routes
  this.route('posts',     { path: '/posts',          controller: PostsController.Index });
  this.route('postsNew',  { path: '/posts/new',      controller: PostsController.New });
  this.route('postsShow', { path: '/posts/:id',      controller: PostsController.Show });
  this.route('postsEdit', { path: '/posts/edit/:id', controller: PostsController.Edit });

  // users routes
  this.route('users',     { path: '/users',          controller: UsersController.Index });
  this.route('usersNew',  { path: '/users/new',      controller: UsersController.New });
  this.route('usersShow', { path: '/users/:id',      controller: UsersController.Show });
  this.route('usersEdit', { path: '/users/edit/:id', controller: UsersController.Edit });

});//<end-routes>

