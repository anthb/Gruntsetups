This is my collection of grunt congifs and plugins I think are useful. 

In the Gruntfile.js I have the following:

* A build task which compiles SASS
* A default Task which runs build and also watch
* A watch task which watches the SASS directory for change and also requirejs applicationMain target

I am missing an isolated requireJS task, but can easily add that in if 'required'. I found it annoying not knowing when saving my JavaScript modules when they had compiled the requireJS task, so The cool part for requireJS is the notify task I have running when requireJS applicationMain target is complete. This is triggered by the 'done' callback.