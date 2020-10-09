import flask
from flask import request, render_template
from chat import sendChat

app = flask.Flask(__name__, static_url_path="/static")

@app.route('/', methods=['GET'])
def root():
    return render_template("index.html")

@app.route('/sendChat', methods=['POST'])
def my_form_post():
    text = request.form['text']
    print(text)
    return sendChat(text)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080)