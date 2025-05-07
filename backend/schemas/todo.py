from flask_marshmallow import Marshmallow
from models import Todo

ma = Marshmallow()

class TodoSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Todo
        load_instance = True

# Instantiate schema objects
todo_schema = TodoSchema()
todos_schema = TodoSchema(many=True)