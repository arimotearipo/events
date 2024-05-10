### Database

You will need to have a running instance of a MongoDB database running on port **27017**

### Server

Navigate into the `server` directory.

Create a `.env` file in the directory.

Give values for `SERVER_PORT` and `MONGOOSE_CONNECTION`.

Use the `env.template` file as a guide.

Install dependencies:

`npm install`

Start the server:

`npm run dev`

You should see a message like this

`Server has started on port [PORT_NUMBER_THAT_YOU_SET]`

`Database connected`

### Client

Navigate into `client` directory

Install dependencies:

`npm install`

Start the client app:

`npm run dev`

By default, the client app will be hosted on port **5173**

On your browser go this URL `localhost:5173`
