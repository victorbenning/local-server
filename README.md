
# Local Server

This is a simple local server that will return a mock json. You can change what is the json returned, create new json to be return from different endpoint.

It was created to help people trying to learn how to consume an API and being able to use any json schema they want.


## Setting up

#### Installing Node

Its recommended to use NVM to install Node. This will allow you to change your Node versions and keep up to date with the latest LTS.

```bash
brew install nvm
```

Follow the instructions on terminal after the installation in order to add nvm to your PATH.

You won't be able to execute the next commands unless you do this.

```
nvm install 16.13.0
nvm use
```

#### Installing Yarn

Yarn is the dependency manager. On MacOS you can easily install it using [Homebrew](https://brew.sh/).

```bash
brew install yarn
```

### Running

```bash
// clone the repo
git clone git@github.com:victorbenning/local-server.git

cd local-server

// install dependencies
yarn install

// run locally
yarn dev:server
```

## Usage/Examples

- Drop the json file you want to be returned inside **Data/** folder
- If you have your server already running, go to your browser and enter the URL
```http
http://localhost:8080/json?name={name-of-json-file-with-extension}

```

#### Example

```http
http://localhost:8080/json?name=products.json
```

## API Reference

#### Get JSON

```http
  GET /json
```
##### Default response

```json
  {
  "id": 1,
  "firstName": "Terry",
  "lastName": "Medhurst",
  "maidenName": "Smitham",
  "age": 50,
  "gender": "male",
  "email": "atuny0@sohu.com",
  "phone": "+63 791 675 8914",
  "username": "atuny0",
  "password": "9uQFF1Lh",
  "birthDate": "2000-12-25",
  "image": "https://robohash.org/hicveldicta.png?size=50x50&set=set1",
  "bloodGroup": "A−",
  "height": 189,
  "weight": 75.4,
  "eyeColor": "Green",
  "hair": {
    "color": "Black",
    "type": "Strands"
  },
  "domain": "slashdot.org",
  "ip": "117.29.86.254",
  "address": {
    "address": "1745 T Street Southeast",
    "city": "Washington",
    "coordinates": {
      "lat": 38.867033,
      "lng": -76.979235
    },
    "postalCode": "20020",
    "state": "DC"
  },
  "macAddress": "13:69:BA:56:A3:74",
  "university": "Capitol University",
  "bank": {
    "cardExpire": "06/22",
    "cardNumber": "50380955204220685",
    "cardType": "maestro",
    "currency": "Peso",
    "iban": "NO17 0695 2754 967"
  },
  "company": {
    "address": {
      "address": "629 Debbie Drive",
      "city": "Nashville",
      "coordinates": {
        "lat": 36.208114,
        "lng": -86.58621199999999
      },
      "postalCode": "37076",
      "state": "TN"
    },
    "department": "Marketing",
    "name": "Blanda-O'Keefe",
    "title": "Help Desk Operator"
  },
  "ein": "20-9487066",
  "ssn": "661-64-2976",
  "userAgent": "Mozilla/5.0 ..."
}
  
```

#### Get custom JSON

```http
  GET /json?name={name-of-file-with-extension}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | This is the name of the json file you added to the **Data** folder |




