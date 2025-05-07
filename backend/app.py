from flask import Flask
from flask_cors import CORS
from services.db import db, init_db
from routes.todos import todos_bp

app = Flask(__name__)
app.config.from_object('config.Config')
CORS(app)

# Initialize database
init_db(app)

# Register Blueprints
app.register_blueprint(todos_bp, url_prefix='/todos')

if __name__ == '__main__':
    app.run(debug=True)