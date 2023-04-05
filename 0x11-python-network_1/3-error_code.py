#!/usr/bin/python3
"""Takes in a URL, sends a request to the URL
and displays the body of the response
"""

if __name__ == '__main__':
    from urllib import request, parse
    from urllib.error import HTTPError
    from sys import argv

    url = argv[1]

    try:
        with request.urlopen(url) as response:
            body = response.read()
    except HTTPError as e:
        if hasattr(e, 'code'):
            print("Error code:", e.code)
    else:
        print(body.decode('utf-8'))
