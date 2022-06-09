require('dotenv').config({ path: './.env.test' });
const yargs = require('yargs');
const algoliasearch = require('algoliasearch');

// Reduce price in specified category based on percent reduction
function reducePrice(data, category_name, percent_reduction) {
    console.log(`Reducing prices by ${percent_reduction}% in ${category_name} category`);
    for (const product of data) {
        if(product.categories.includes(category_name)) {
            product.price = Math.floor(product.price * (1 - percent_reduction / 100));
        }
    }
}

// Send data to Algolia
function sendData(data, index) {
    console.log(`Sending ${data.length} products to Algolia`);
    try {
        index.saveObjects(data, { autoGenerateObjectIDIfNotExist: true }).then(() => {
            console.log('Data Successfully sent to Algolia');
        });
    } catch (error) {
        console.log(error);
    }
}

// Configure index settings to set attributes for searching, custom rankings, and attributes for faceting
function setIndexSettings(index) {
    console.log("Setting index settings");

    index.setSettings({
        'searchableAttributes': [
            'name',
            'description'
        ],
        'customRanking': [
            'desc(rating)',
            'desc(popularity)'
        ],
        'attributesForFaceting': [
            'brand',
            'categories'
        ]
    });
}

// Configure command line arguments to give user more control over data source and sale options
const argv = yargs
    .options({
        f: {
            alias: 'file',
            type: 'string',
            requiresArg: true,
            describe: 'Set file path for data source',
            default: './data/products.json'
        },
        c: {
            alias: 'category',
            type: 'string',
            requiresArg: true,
            describe: 'Set product category',
            default: 'Cameras & Camcorders'
        },
        p: {
            alias: 'percent-reduction',
            type: 'number',
            requiresArg: true,
            describe: 'Set percentage of price reduction',
            default: 20
        },
        s: {
            alias: 'set-settings',
            type: 'boolean',
            requiresArg: false,
            describe: 'Optionally configure index settings',
            default: false
        }
    }).check(argv => {
        // Check to ensure price reduction percentage is a valid number
        if(Number.isNaN(argv.p) ) {
            throw new Error("Percent price reduction must be a valid number.")
        }
        // TODO: Insert more error checking for data source filepath, product categories here
        else {
            return true
        }
    }).argv;

// Establish connection to Algolia API via environment variables and create index
const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
const index = client.initIndex(process.env.ALGOLIA_INDEX);

const products = require(argv.f);
const product_category = argv.c;
const percent_price_reduction = argv.p;

if(argv.s) setIndexSettings(index);

reducePrice(products, product_category, percent_price_reduction);
sendData(products, index);
