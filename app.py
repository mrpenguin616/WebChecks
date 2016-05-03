from flask import render_template
from flask import Flask
#from os.path import join
import subprocess
import os

app = Flask(__name__)
scripts_out = 'Out.txt'
dir = 'TestCasperScripts'

@app.route('/')
@app.route('/index')
def index():
    calling_casper_scripts()
    codes = [line.strip() for line in open(scripts_out)]
    return render_template( 'index.html', title='Web Checks', codes=codes)


def calling_casper_scripts():
    for (path, dirs, files) in os.walk(dir):
        for name in files:
            filepath = ''.join(path + '/' + name)
            print(filepath)
            if filepath.endswith('.js'):
                subprocess.call(['casperjs', filepath])


if __name__ == '__main__':
    app.run(debug=True)
