import lyft from 'node-lyft';
let defaultClient = lyft.ApiClient.instance;

// Configure OAuth2 access token for authorization: User Authentication
let userAuth = defaultClient.authentications['User Authentication'];
userAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new lyft.UserApi();

let request = new lyft.Ride('lyft', new lyft.Location(37.77663, -122.39227));
request.destination = new lyft.Location(37.771, -122.39123);

apiInstance.newRide(request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});