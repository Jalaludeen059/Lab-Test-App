from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
import os

app = Flask(__name__)
CORS(app)

# Database configuration
db = psycopg2.connect(
    host="localhost",
    database="data",  # Your database name
    user="postgres",  # Your PostgreSQL username
    password="12345667"  # Your PostgreSQL password
)

cursor = db.cursor()

# Create uploads directory if it doesn't exist
if not os.path.exists('uploads'):
    os.makedirs('uploads')

@app.route('/register', methods=['POST'])
def register():
    name = request.form['name']
    email = request.form['email']
    phone = request.form['phone']
    password = request.form['password']
    image = request.files['image']

    image_path = os.path.join('uploads', image.filename)
    image.save(image_path)

    cursor.execute(
        "INSERT INTO users (name, email, phone, password, image) VALUES (%s, %s, %s, %s, %s)",
        (name, email, phone, password, image_path)
    )
    db.commit()
    return jsonify({"message": "Registered successfully!"}), 200

@app.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']

    cursor.execute("SELECT name FROM users WHERE email = %s AND password = %s", (email, password))
    user = cursor.fetchone()
    if user:
        return jsonify({"message": "Login successfully!", "name": user[0]}), 200
    return jsonify({"message": "Login failed"}), 401

@app.route('/user', methods=['GET'])
def get_user():
    email = request.args.get('email')
    
    cursor.execute("SELECT name, email, phone FROM users WHERE email = %s", (email,))
    user = cursor.fetchone()
    if user:
        return jsonify({"name": user[0], "email": user[1], "phone": user[2]}), 200
    return jsonify({"message": "User not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)



# # app.py
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import psycopg2
# import os

# app = Flask(__name__)
# CORS(app)

# # Database configuration
# db = psycopg2.connect(
#     host="localhost",
#     database="data",  # Your database name
#     user="postgres",  # Your PostgreSQL username
#     password="12345667"  # Your PostgreSQL password
# )

# cursor = db.cursor()

# # Create uploads directory if it doesn't exist
# if not os.path.exists('uploads'):
#     os.makedirs('uploads')

# @app.route('/register', methods=['POST'])
# def register():
#     name = request.form['name']
#     email = request.form['email']
#     phone = request.form['phone']
#     password = request.form['password']
#     image = request.files['image']

#     image_path = os.path.join('uploads', image.filename)
#     image.save(image_path)

#     cursor.execute(
#         "INSERT INTO users (name, email, phone, password, image) VALUES (%s, %s, %s, %s, %s)",
#         (name, email, phone, password, image_path)
#     )
#     db.commit()
#     return jsonify({"message": "Registered successfully!"}), 200

# @app.route('/login', methods=['POST'])
# def login():
#     email = request.json['email']
#     password = request.json['password']

#     cursor.execute("SELECT * FROM users WHERE email = %s AND password = %s", (email, password))
#     user = cursor.fetchone()
#     if user:
#         return jsonify({"message": "Login successfully!"}), 200
#     return jsonify({"message": "Login failed"}), 401

# if __name__ == '__main__':
#     app.run(debug=True)
