#!/bin/bash

# Check if the URL argument was provided
if [ $# -ne 1 ]; then
  echo "Usage: $0 <URL>"
  exit 1
fi

# Send a request to the specified URL using cURL and display the size of the response body
curl -s -w '%{size_download}' -o /dev/null "$1"
