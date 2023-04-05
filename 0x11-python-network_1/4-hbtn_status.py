#!/usr/bin/python3
"""Fetches https://alx-intranet.hbtn.io/status using requests"""

if __name__ == '__main__':
    import requests

    res = requests.get("https://alx-intranet.hbtn.io/status")
    data = res.text
    print("Body response:")
    print(f"\t- type: {type(data)}")
    print(f"\t- content: {data}")

