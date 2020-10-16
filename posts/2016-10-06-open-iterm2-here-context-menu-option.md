---
title: Open iTerm2 Here Context Menu option for Finder
date: 2016-10-07
---

One of the things I miss most from using Ubuntu is the ability to open the terminal from any directory. Instead of _cd_-ing down a long directory path you can add an _Open iTerm Here_ option to Finder's context menu (right click) for easy directory access to terminal. 

# Setup
1) Open up _Automator_ and create a new file and select _Services_ as your document type. 
<img src="/assets/screenshots/2016-10-06-screen1.png" alt="Screenshot" style="width: 80%; margin-left:10%; margin-right:10%; margin-top:20px; margin-bottom:20px;"/>
2) For the _Service receives selected_ field, select _Folders_. 
<img src="/assets/screenshots/2016-10-06-screen2.png" alt="Screenshot" style="width: 100%; margin-left:0%; margin-right:0%; margin-top:20px; margin-bottom:20px;"/>
3) Drag _Run AppleScript_ onto the right hand window to add some of the AppleScript code that will power the service.  
<img src="/assets/screenshots/2016-10-06-screen4.png" alt="Screenshot" style="width: 100%; margin-left:0%; margin-right:0%; margin-top:20px; margin-bottom:20px;"/>
4) Paste the following code:
 
```applescript
on run {input, parameters}
	cd(input)
end run

on cd(dir)
	tell application "iTerm"
		activate
		set terminalWindow to current window
		
		if terminalWindow is equal to missing value then
			set terminalWindow to (create window with default profile)
		else
			tell terminalWindow
				set t to (create tab with default profile)
			end tell
		end if
		
		tell current session of terminalWindow
			write text "cd " & (quoted form of POSIX path of (dir as string))
		end tell
	end tell
end cd
```

5) Hit _Command+S_ to save the service. Whichever name you save it under will appear in the context menu when you right click on a folder.
<img src="/assets/screenshots/2016-10-06-screen6.png" alt="Screenshot" style="width: 80%; margin-left:10%; margin-right:10%; margin-top:20px; margin-bottom:20px;"/>
6) Right click on any finder folder and click _Open in iTerm2_! Voila!

# Caveats
The context menu will only appear when you right click on a folder. Unfortunately that means if you're already in a folder, you cannot open the iTerm in that location. You'll have to go up a directory level and open the context menu from there.


