from flask import Flask
app = Flask(__name__)

import logging
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)

def fibbo(x):
    if x <= 2:
        return x
    else:
        return (fibbo(x-1) + fibbo(x-2))

@app.route('/<int:num>')
def hello_world(num):
    return str(fibbo(num))