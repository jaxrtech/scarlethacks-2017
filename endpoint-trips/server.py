import logging
import env
import requests_cache
from flask import Flask, jsonify
from flask_cors import CORS

from arcadia.api import ThingsToDo
from arcadia.util import CustomJSONEncoder

logging.basicConfig(
        format='%(asctime)s | [%(levelname)s] %(module)s - %(message)s',
        datefmt='%m/%d/%Y %I:%M:%S %p',
        level=logging.INFO)

requests_cache.install_cache('.cache')

app = Flask(__name__)
app.json_encoder = CustomJSONEncoder
cors = CORS(app, resources={r"*": {"origins": "*"}})


@app.route('/trips')
def get_places():
    app.logger.info('get_places()')
    todo = ThingsToDo(env.GOOGLE_API_KEY)
    places = todo.findPlace(time=60, start={'lat':41.8781, 'lng':-87.6298}, category='Food')
    return jsonify(places)


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080)
