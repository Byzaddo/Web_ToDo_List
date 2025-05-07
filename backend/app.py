from flask import Flask
from flask_cors import CORS
from services.db import db, init_db
from routes.todos import todos_bp

app = Flask(__name__)
app.config.from_object('config.Config')
CORS(app)

init_db(app)

app.register_blueprint(todos_bp, url_prefix='/todos')

if __name__ == '__main__':
    app.run(debug=True)