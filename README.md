# TrackerTracker
This is our SisterHacks project (Marilyn, Annie, Vanessa). It gives a user information about the trackers following them. 

## To run the example file:
1. Download the files "lightbeamData.json" and "trackertracker.py" from the repository locally to your device. Make sure they are located within the same directory.
2. Navigate to the directory the files are located in using the command line.
3. Run the script from the command line:
```
python3 trackertracker.py
```
4. When the script is finished, a .csv file named "tracker_output.csv" will appear in the directory. In it will contain the IP addresses, city (if possible), country, and company name associated with the companies in the example JSON file. The output from the sample file can also be seen in the file "sample_output.csv" located in the repository.

## To get a customized output of websites you've visited that have tracked you:
1. Download the web extension Lightbeam for the web browser Firefox [here](https://github.com/mozilla/lightbeam-we). We recommend exploring Lightbeam and its capabilities. When you've browsed enough, click on the Lightbeam icon in the Firefox add-on toolbar to see a visualization of every website's trackers following you. From there, click on the "Save Data" button under the DATA heading on the left. This will download your personal JSON file of your browsing and tracking history. The Lightbeam github link above has helpful visuals if you have trouble finding the Lightbeam icon and "Save Data" button.
2. With your custon JSON file, follow the above instructions to run the example file, *making sure that your JSON is named "lightbeamData.json".*
Alternatively, you can alter the python script in a text editor to match the name of your JSON file. At the top of the script where you see
```
#load the JSON file
with open('lightbeamData.json') as file:
    data = json.load(file)
```
change 'lightbeamData.json' to whatever your JSON filename is. Make sure there are single quotes around your filename!
