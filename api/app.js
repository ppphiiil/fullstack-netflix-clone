const express = require( "express" );
require( "./mongoConnect" );
const cors = require( "cors" );


const seriesRoute = require("./routes/seriesRoutes");
const rowRoute = require("./routes/rowRoutes");
const videoRoute = require("./routes/videoRoutes");

const port = 3000;

const app = express();

app.use( express.static( "public" ) );

app.use( express.json() );

app.use( cors( { origin: "*" } ) );

app.use("/series", seriesRoute);
app.use("/series/row", rowRoute);
app.use("/video", videoRoute);

app.listen( port, () => console.log( "server running on port: ", port ) );
