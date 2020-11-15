#Editlocations

 Cameras now have GPS which store the location at which the photos are made. 
I extract the geographic coordinates using href="https://exiftool.org/"
This information is written to a JSON file. 
This file will be read by https://openlayers.org/en/v4.6.5/ and the points will 
be placed on a map made from https://www.openstreetmap.org tiles. 

###Privacy Caution
Some information is sensitive and should not be published. 
For example, a photo of a rare species should not reveal the location. 

#Work Flow


##Should have this structure at end

+ directory: usefulprefix_thumb
+ usefulprefix.json

###In directory with fotos, 
	
+ **GPStoJSON.sh usefulprefix description** at the command line
+ Check that json file and thumb file have been created.
+ Copy json file and thumb directory i.e.
++ **GPStoJSON.sh meulunterenpad**
++ **cp -fR meulunterenpad* (localdirectorypath)/editlocations/data/json/**

### In local Browser
editpoints.html from main server directory in Browser. If points are all in the expected location, there is nothing that needs to be done. This file can be used in subsequent  OpenLayersmaps.
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
There are several cases where something goes wrong with the geolocation. These are presented in Table 1

| Case                          | example             | title is date | EXIF geolocation | EXIF date-time | shell program to run |
| foto with geolocation and date | 20190831_000353.jpg | yes | Yes| Yes| GPStoJSON.sh |
| foto with NO geolocation but date | 20180512_142458.jpg | yes | No | Yes | GPStoJSON.sh with dummy long and lat repair with editpoints.html |
| foto with wrong geolocation but date is known | | | yes | No | Yes GPStoJSON.sh with dummy long and lat, repair with editpoints.html |
| Foto with title is NOT date, no geo | statenisland.png | No | No | No |



### Special Case: Videos
If there are videos, follow these instructions need to extract a frame
	at the command line