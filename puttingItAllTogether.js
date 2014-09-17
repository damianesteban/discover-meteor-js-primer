// Here is a bit of Meteor code from Microscope.
// ===========================================================
// First, prevent the default browser behavior for the submit event.
Template.postEdit.events({
  'submit form': function(event) {
    event.preventDefault();

    // Then, define a variable containing the current post’s ID.
    var currentPostId = this._id;

    // Get the latest value of the text fields.
    var postProperties = {
      url: $(event.target).find('[name=url]').val(),
      title: $(event.target).find('[name=url]').val(),
    };

    // Update the database with those values.
    Posts.update(currentPostId, {$set: postProperties}, function(error) {
      // Finally, either throw an error, or redirect the user.
      if (error) {
        // display the error to the user
        throwError(error.reason);
      } else {
        Router.go('postPage', {_id: currentPostId});
      }
    });
  }
});


