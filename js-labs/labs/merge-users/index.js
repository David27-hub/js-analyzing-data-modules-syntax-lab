// Require datejs
require('datejs');

// Create combineUsers function
function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  // Loop through each array of usernames
  for (const userArray of args) {
    combinedObject.users.push(...userArray);
  }

  // Add today's date
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combinedObject;
}

// Example call
combineUsers(
  ['alice', 'bob'],
  ['charlie'],
  ['dave', 'eve']
);



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};