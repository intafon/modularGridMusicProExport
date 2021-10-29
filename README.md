# modularGridMusicProExport
Script created in order to output the required data for the MusicPro insurance equipment list from a modulargrid.net rack.

To use:
- Open your rack in modulargrid.net. If you already have it open and/or have been editing the current rack, reload the page in the browser, as the data the script pulls from needs to be updated in the page.
- Open the developer console, or javascript console in your browser (there are different ways to do this in different browsers).
- Copy the contents of modularGridMusicProExport.js
- Paste the contents into the entry point in the javascript Console in the browser (often has a > at the left). 
- Hit return
- You should see some things logged in the console, and a prompt to download a file should appear. Do not fear -- this is simply a text file (technically a CSV file) containing the required information about your modules to be used in the Music Pro insurance equipment list. 

You should be able to open the resulting csv file in Excel, Google Sheets, or your spreadsheet editor of choice, and then be able to copy-paste the contents from there into the Music Pro equipment list spreadsheet.

If you run into any issues, don't hesitate to send me a message. I tested this on my racks and a few others in modulargrid and it seemed to work fine. I didn't put in exhaustive/robust checks for undefined data and the like, so there are potentially some issues that may crop up (which I can fix if they come up). If you message me, make sure to send me the URL for the rack for which this failed, and make sure that the rack is public so that I can access it for testing.

Cheers!


-----------

Tips:
- If you upload the CSV to Google Drive in addition to a copy of the Music Pro equipment list sheet, you can 
	- open the Music Pro sheet
	- go to the EquipmentList tab
	- select the cell below "Type"
	- go to the File menu and select Import
	- choose your modular CSV file
	- change import location to "replace data at current cell" (if you have nothing else in the sheet) or "append to current sheet" to add it to the end after the other rows you have in the sheet already.