from flask import Blueprint, request, jsonify
from models import Todo
from schemas.todo import todo_schema, todos_schema
from services.db import db

todos_bp = Blueprint('todos', __name__)

@todos_bp.route('/', methods=['GET'])
def get_todos():
    all_todos = Todo.query.order_by(Todo.created_at.desc()).all()
    return todos_schema.jsonify(all_todos)

@todos_bp.route('/', methods=['POST'])
def create_todo():
    data = request.get_json()
    new_todo = Todo(title=data['title'])
    db.session.add(new_todo)
    db.session.commit()
    return todo_schema.jsonify(new_todo), 201

@todos_bp.route('/<int:id>', methods=['PUT'])
def update_todo(id):
    todo = Todo.query.get_or_404(id)
    data = request.get_json()
    todo.completed = data.get('completed', todo.completed)
    db.session.commit()
    return todo_schema.jsonify(todo)

@todos_bp.route('/<int:id>', methods=['DELETE'])
def delete_todo(id):
    todo = Todo.query.get_or_404(id)
    db.session.delete(todo)
    db.session.commit()
    return '', 204