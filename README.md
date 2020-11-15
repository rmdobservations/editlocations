# Editlocations
Many cameras now have GPS which store the location at which the photos are made. 
I extract the geographic coordinates using [exiftool](https://exiftool.org/)
This information is written to a JSON file. 
This file will be read by [Openlayers 3 v. 4.6.5](https://openlayers.org/en/v4.6.5/) and the points will 
be placed on a map made from [Open Street Map](https://www.openstreetmap.org) tiles. 

Editlocations has been written in order to visually be sure the coordinates are in the right place. It can also be used for older photographs 
for which there is no GPS data. 

There are two steps. 
+ Extracting the Coordinates from photograph EXIF data and writing to a JSON formatted file.
+ Correcting the locations using the editpoints tool.

# Final product
Final product is a JSON formatted file. For example, See [limietPalen_FortVechten](https://rmdobservations.github.io/limietPalen_FortVechten/index.html).
Points can be shown on a map along with a slide show of images.

# Work Flow


## Should have this structure at end

+ directory: usefulprefix_thumb
+ usefulprefix.json

### In directory with fotos, 
+ GPStoJSON.sh usefulprefix description at the command line, i.e. `GPStoJSON.sh meulunterenpad beautifulwalk`  
+ Check that json file and thumb file have been created.  
+ Copy json file and thumb directory to working directory: i.e. `cp -fR meulunterenpad* (localdirectorypath)/editlocations/data/json/`


### In local Browser
The location of the json file and thumb directory is hard coded as a subdirectory data/json

Run `editpoints.html` from main server directory in Browser. If points are all in the expected location, there is nothing that needs to be done. This json file and direcory of thumbs can be used in subsequent OpenLayers maps.

There are several cases where something goes wrong with the geolocation. These are presented in Table 1

| Foto | example | EXIF geolocation | EXIF date-time | shell program to run |
| -- | -- | -- | -- | -- | 
| EXIF geolocation and date | 20190831_000353.jpg | Yes| Yes| GPStoJSON.sh |
| NO geolocation but EXIF date | 20180512_142458.jpg | No | Yes | GPStoJSON.sh with dummy long and lat |
| wrong geolocation but date is known | mybirthday.jpg | na |  No | Yes GPStoJSON.sh with dummy long and lat |
| no date, no geo | statenisland.png | No | No | Yes GPStoJSON.sh with dummy long and lat and dummy date |

The dummy locations can be corrected in the `editpoints.html` tool. Note that this is different from some tools which allow creating a point from within Openlayers. Rather than writing a new tool  I just need to move the points. 

### Privacy Caution
Some information is sensitive and should not be published. 
For example, a photo of a rare species should not reveal the location. 
### Special Case: Videos
If there are videos, follow these instructions need to extract a frame
	at the command line
