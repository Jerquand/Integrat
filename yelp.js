// import
const https = require('https');

// export
module.exports = function(yelpOptions) {
    return {
      search: function(query, count, cb) {
        // TODO
      }
    };
  };
  module.exports = function(yelpOptions) {
    let accessToken;
  
    function getAccessToken(cb) {
      if (accessToken) return cb(accessToken);
      // TODO: if no token, get token
    }
  
    return {
      search: function(query, count, cb) {
        // TODO
      }
    };
  };
  function getAccessToken(cb) {
    if (accessToken) return cb(accessToken);
  
    const bearerToken = Buffer(
      encodeURIComponent(twitterOptions.consumerKey) +
        ':' +
        encodeURIComponent(twitterOptions.consumerSecret)
    ).toString('base64');
  
    const options = {
      hostname: 'api.yelp.com',
      port: 443,
      method: 'POST',
      path: '/oauth2/token?grant_type=client_credentials',
      headers: {
        Authorization: 'Basic ' + bearerToken
      }
    };
  
    https
      .request(options, res => {
        let data = '';
        res.on('data', chunk => {
          data += chunk;
        });
        res.on('end', () => {
          const auth = JSON.parse(data);
          if (auth.token_type !== 'bearer') {
            console.log('Twitter auth failed.');
            return;
          }
          accessToken = auth.access_token;
          cb(accessToken);
        });
      })
      .end();
  }
  return {
    search: function(query, count, cb) {
      getAccessToken(accessToken => {
        var options = {
          hostname: 'api.yelp.com',
          port: 443,
          method: 'GET',
          path:
            '/1.1/search/tweets.json?q=' +
            encodeURIComponent(query) +
            '&count=' +
            (count || 10),
          headers: {
            Authorization: 'Bearer ' + accessToken
          }
        };
        https
          .request(options, res => {
            let data = '';
            res.on('data', chunk => {
              data += chunk;
            });
            res.on('end', () => {
              cb(JSON.parse(data));
            });
          })
          .end();
      });
    }
  };
  const yelp = require('./twitter')({
    consumerKey: object.for.your.consumerKey,
    consumerSecret: object.for.your.consumerSecret
  });
  
  yelp.search('#basketball', 10, result => {
    // here you will decide what to do with your newly acquired tweets
    // They should come back in result.statuses
  });