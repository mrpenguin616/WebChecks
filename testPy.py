#!/usr/bin/python3
import requests
import getpass


sites = [line.rstrip('\n') for line in open('sites.txt')]
passwd = getpass.getpass()

payload = {
    'username':'',
    'password':passwd,
    'lt':"LT-759699-vDDIj9GQaEHO1dPLBrbXs41QHtOlOO-secure3",
    "execution" : "c156e000-4e83-42c8-880c-da88b015a2db_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"
}

with requests.Session() as s:
    p = s.post('https://secure.byui.edu/cas/', data=payload)
    r = s.get('https://my.byui.edu/ICS/')
    print(r.text)