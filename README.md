## React AirCall App

The app will have two different components:

- **Activity Feed** - simple list of calls
- **Activity Detail** - detail of a call
- **Archive** - the final user should be able to archive (and unarchive) a call. Archived calls will no longer be displayed on the Activity Feed and should have a separate Archived Tab.

### Clone this repo

```bash
$ git clone https://github.com/GoodStar20/react-aircall.git
```

## Install dependencies

```
yarn install
yarn start
```

## API documentation

### Routes

Here is the API address: https://cerulean-marlin-wig.cyclic.app/ <br>
If you run into a CORS error, please prepend the base URL with this CORS Anywhere server URL: https://charming-bat-singlet.cyclic.app/ <br>
The prepended base URL will look like this https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/

- **GET** - BASE_URL/activities: get calls to display in the Activity Feed
- **GET** - BASE_URL/activities/<call_id> retrieve a specific call details
- **PATCH** - BASE_URL/activities/<call_id> update a call. The only field updatable is `is_archived (bool)`. You'll need to send a JSON in the request body:

```
{
  is_archived: true
}
```

- **PATCH** - BASE_URL/reset: Reset all calls to initial state (usefull if you archived all calls).

### Screenshots
![Screen Shot 2023-02-28 at 10 33 15 AM](https://user-images.githubusercontent.com/39380399/221901367-a72657f7-ecd4-47bd-984a-ff57f260eb26.png)
![Screen Shot 2023-02-28 at 10 38 43 AM](https://user-images.githubusercontent.com/39380399/221902700-e40536dc-3137-416f-a6c6-6d8c60b89b35.png)
![Screen Shot 2023-02-28 at 10 38 27 AM](https://user-images.githubusercontent.com/39380399/221902717-0b02f397-86f5-487a-abbc-696f824ac687.png)

