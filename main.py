#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import eel
import os
import random

# Set web files folder and optionally specify which file types to check for eel.expose()
#   *Default allowed_extensions are: ['.js', '.html', '.txt', '.htm', '.xhtml']
eel.init('static', allowed_extensions=['.js', '.html'])

@eel.expose                         # Expose this function to Javascript
def say_hello_py(x):
    print('Hello from %s' % x)

@eel.expose
def pick_file(folder):
    if os.path.isdir(folder):
        return random.choice(os.listdir(folder))
    else:
        return 'Not valid folder'

say_hello_py('Python World!')
eel.say_hello_js('Python World!')   # Call a Javascript function
eel.start('index.html', port=8002)