# Tech Demo UI App

## Usage

### Docker
`docker build -t {image name} .` or `docker pull adrianliaw/hyperpilot-demo-ui`  
**Note that you should access the 8080 port**

### App Routing Rule
- `/`: Demo app
- `/actions/*`: Endpoints for invoking REST calls or running CLIs
- `/grafana/*`: Proxied Grafana


## Development

### Dependencies
- Node.js v6.x
- yarn (recommended)

### Installation
- `yarn install`
- `yarn run dev`

## Enviroment Variables
- `NODE_ENV`: `production` or anything else. If it's not `production`:
    * Mocked Grafana panels are used
    * Skips errors when doing actions
    * `actions/get_status_indicators` returns mocked responses
- `KUBE_DEPLOYMENTS`: A URL to a JSON file
    * The JSON have a `deployments` key, which it's value is an array of Kubernetes deployments, see [example](https://s3-us-west-1.amazonaws.com/hyperpilot-adrianliaw/demo-deployments.json)

## Folder Structure

- **pages/**: see [next.js docs](https://zeit.co/blog/next#zero-setup.-use-the-filesystem-as-an-api)
- **flow/**: the demo flow, each stage's component is defined inside `flow/stage[i].js`
- **actions/**: additional REST APIs
- **components/**: some utility components that are being used inside `flow/`
- **styles/**: SASS files
- **server.js**: the main script that the app runs on the server
