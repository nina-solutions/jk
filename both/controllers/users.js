// page for a list of Users - /users
UsersController.Index = AppController.extend({
  template: 'users',

  waitOn: function() {
    //return Meteor.subscribe('users');
  },

  data: function() {
    //return db.users.find();
  },

  onBeforeAction: function() {
    console.log("  [UsersController.Index]: loading", this.url);
    this.next();
  }
});


// page for creating a single User - /users/new/:id
UsersController.New = AppController.extend({
  template: 'usersNew',

  onBeforeAction: function() {
    console.log("  [UsersController.New]: loading", this.url);
    this.next();
  }
});


// page for showing a single User - /users/:id
UsersController.Show = AppController.extend({
  template: 'usersShow',

  waitOn: function() {
    //return Meteor.subscribe('user', this.params.id);
  },

  data: function() {
    //return db.users.findOne(this.params.id);
  },

  onBeforeAction: function() {
    console.log("  [UsersController.Show]: loading", this.url);
    this.next();
  }
});


// show edit page for single User : /users/edit/:id
UsersController.Edit = AppController.extend({
  template: 'usersEdit',

  waitOn: function() {
    //return Meteor.subscribe('user', this.params.id);
  },

  data: function() {
    //return db.users.findOne(this.params.id);
  },

  onBeforeAction: function() {
    console.log("  [UsersController.Edit]: loading", this.url);
    this.next();
  }
});


// create a User
UsersController.create = function(data, callback) {
  console.log('Fired Create User');

  User.create(data, function(err, docId) {
    if (callback) {
      callback(err, docId);
    }

    if (err) {
      console.log(err);
    }
  });
};

 
// update a User
UsersController.update = function(data, callback) {
  console.log('Fired Update User');

  User.update(data, function(err, count) {
    if (callback){
      callback(err, count);
    }

    if (err) {
      console.log(err);
    }
  });
};


// destroy a User
UsersController.destroy = function(data, callback) {
  console.log('Fired Destroy User');

  User.destroy(data, function(err, count) {
    if (callback) {
      callback(err, count);
    }

    if (err) {
      console.log(err);
    }
  });
};

