from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__) # Creating an instance of the Flask class
app.secret_key = 'secret_key'   # Secret key for the session

# Configuring the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
