exports.handler = async (event, context) => {
  // Log the event argument for debugging and for use in local development.
  const _ = require('lodash');
  console.log(JSON.stringify(event, undefined, 2));
  if(_.has(event, 'api_url')){
  	return event;
  }
  return JSON.stringify({event, context});
};
