#TrackerTracker! A tracker that tracks trackers

import socket
import json
import ipinfo
import csv

#load the JSON file
with open('lightbeamData.json') as file:
    data = json.load(file)

#find hostnames from JSON, aggregate to list hnames
hnames = []
for key in data.keys():
    hnames.append(data[key]['hostname'])

#generate IP addresses from each hostname, get details from IP addresses
website_info = []
for i in range(len(hnames)):
    ip_address = socket.gethostbyname(hnames[i])
    access_token = '2ff94b27d3b180'
    handler = ipinfo.getHandler(access_token)
    details = handler.getDetails(ip_address)
    website_info.append(details)

#output relevant info to csv
with open('tracker_output.csv','w') as csv_file:
    writer = csv.writer(csv_file)
    fieldnames = ['IP Address', 'City', "Country", "Organization Name"]
    writer.writerow(fieldnames)
    for i in range(len(website_info)):
        writer.writerow([website_info[i].all['ip'],website_info[i].all['city'],website_info[i].all['country'],website_info[i].all['org']])
csv_file.close()
