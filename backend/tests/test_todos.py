import pytest
from app import app
from services.db import db
from models import Todo

@pytest.fixture
def client():
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    test_client = app.test_client()
    with app.app_context():
        db.create_all()
    yield test_client

def test_create_and_get_todo(client):
    # Create
    resp = client.post('/todos/', json={'title': 'Test Task'})
    assert resp.status_code == 201
    data = resp.get_json()
    assert data['title'] == 'Test Task'

    # Get
    resp = client.get('/todos/')
    data = resp.get_json()
    assert len(data) == 1
    assert data[0]['title'] == 'Test Task'