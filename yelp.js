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
      hostname: 'https://api.yelp.com/v3/businesses/search',
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
          hostname: 'https://api.yelp.com/v3/businesses/search',
          port: 443,
          method: 'GET',
          path:
            '/1.1/search/businesses.json?q=' +
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
  const yelp = require('./yelp')({
    consumerKey: object.for.your.consumerKey,
    consumerSecret: object.for.your.consumerSecret
  });
  module.exports = function(query, cb) {

    var options = {
        hostname: 'https://api.yelp.com/v3/businesses/search',
        path: '/maps/api/geocode/json?address=' + encodeURIComponent(query) + '&sensor=false'
    };

    http.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chuck;
        });
        res.on('end', () => {
            data = JSON.parse(data);
            if(data.results.length) {
                cb(null, data.results[0].geometry.location);
            } else {
                cb("No results found.", null);
            }
        })
    })
}
  
  yelp.search('#basketball', 10, result => {
  });
//   Response Body
{
    "total": 8228,
    "businesses": [
      {
        "rating": 4,
        "price": "$",
        "phone": "+14152520800",
        "id": "E8RJkjfdcwgtyoPMjQ_Olg",
        "alias": "four-barrel-coffee-san-francisco",
        "is_closed": false,
        "categories": [
          {
            "alias": "coffee",
            "title": "Coffee & Tea"
          }
        ],
        "review_count": 1738,
        "name": "Four Barrel Coffee",
        "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
        "coordinates": {
          "latitude": 37.7670169511878,
          "longitude": -122.42184275
        },
        "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
        "location": {
          "city": "San Francisco",
          "country": "US",
          "address2": "",
          "address3": "",
          "state": "CA",
          "address1": "375 Valencia St",
          "zip_code": "94103"
        },
        "distance": 1604.23,
        "transactions": ["pickup", "delivery"]
      },
      
    ],
    "region": {
      "center": {
        "latitude": 37.767413217936834,
        "longitude": -122.42820739746094
      }
    }
  } 