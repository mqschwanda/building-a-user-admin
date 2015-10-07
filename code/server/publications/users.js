Meteor.publish( 'users', function() {
  return [
    Meteor.users.find( {}, { fields: { "emails.address": 1, "roles": 1 } } ),
    Invitations.find( {}, { fields: { "email": 1, "role": 1, "date": 1 } } )
  ];
});
